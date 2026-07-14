// Privacy Barrelman feed builder. Runs on GitHub Actions (Node 20+), not in the
// browser. Produces public/news.json for the static site to render.
//
// Two tiers feed the pipeline:
//   1. Trusted core  (RSS_SOURCES)     regulators + specialist analysis.
//   2. Discovery     (DISCOVERY_QUERIES) a per-language/region news search via
//      Google News. Each result is resolved back to its original publisher URL,
//      so visitors are never sent to Google and we get a clean domain to judge
//      reputability and de-duplicate on.
//
// Pipeline: gather both tiers -> resolve discovery links -> drop non-privacy and
// solicitation items -> keep recent -> dedupe (prefer authoritative copy) ->
// classify -> reserve ~40% for non-English -> cap -> verify each link resolves ->
// translate titles (cached) -> write JSON. A dead link (404/410) drops the item;
// a paywall or bot-block (401/403/429) is kept, since a human can still read it.
// No images are fetched or stored: cards are text-only, so visitors make no
// third-party requests.
//
// A build cache (.cache/barrelman.json) memoizes link resolutions and title
// translations across runs. It is gitignored and persisted in CI via
// actions/cache, so DeepL only ever translates a given title once.

import { writeFileSync, mkdirSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createHash } from 'node:crypto'
import Parser from 'rss-parser'
import pLimit from 'p-limit'
import {
  RSS_SOURCES,
  DISCOVERY_QUERIES,
  TRUST_DOMAINS,
  DENY_DOMAINS,
  RELEVANCE_TERMS,
  EXCLUDE_TERMS,
  CATEGORY_HINTS,
  CROSS_BORDER_TERMS,
  REGION_HINTS,
} from './sources.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_PATH = resolve(__dirname, '../../public/news.json')
const CACHE_PATH = resolve(__dirname, '../../.cache/barrelman.json')

const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000 // 3 months (discovery is already ~7 days)
const PER_SOURCE_CAP = 8
const TOTAL_CAP = 120
// Reserve this share of slots for non-English coverage so the feed is not
// swamped by US/EU news. Best-effort target; soft in both directions.
const NONEN_TARGET_RATIO = 0.4
// Cap on how many discovery items we resolve per run (resolution is a network
// round-trip each). Freshest-first, and repeats are cached, so steady-state runs
// resolve only the new arrivals.
const DISCOVERY_RESOLVE_CAP = 240
const REQUEST_TIMEOUT_MS = 12000
const UA =
  'Mozilla/5.0 (compatible; PrivacyMeridianBot/1.0; +https://privacymeridian.org)'

const parser = new Parser({
  timeout: REQUEST_TIMEOUT_MS,
  headers: { 'user-agent': UA },
})

// ---- cache ------------------------------------------------------------------

function loadCache() {
  try {
    const raw = JSON.parse(readFileSync(CACHE_PATH, 'utf8'))
    return { resolve: raw.resolve || {}, translate: raw.translate || {} }
  } catch {
    return { resolve: {}, translate: {} }
  }
}

function saveCache(cache) {
  try {
    mkdirSync(dirname(CACHE_PATH), { recursive: true })
    writeFileSync(CACHE_PATH, JSON.stringify(cache))
  } catch (err) {
    console.warn(`  cache save failed: ${err.message}`)
  }
}

// Keep the newest `max` entries (objects preserve insertion order) so the cache
// cannot grow without bound across runs.
function pruneMap(obj, max) {
  const keys = Object.keys(obj)
  if (keys.length <= max) return
  for (const k of keys.slice(0, keys.length - max)) delete obj[k]
}

// ---- gather: trusted core ---------------------------------------------------

async function fromRss(source) {
  try {
    // Fetch with Node's fetch (auto-decompresses gzip/br, which rss-parser's own
    // client does not) then parse the text.
    const res = await fetch(source.feed, {
      redirect: 'follow',
      headers: { 'user-agent': UA, accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml' },
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const feed = await parser.parseString(await res.text())
    return (feed.items || []).map((item) => ({
      title: clean(item.title),
      url: item.link,
      summary: clean(item.contentSnippet || item.content || ''),
      source: source.name,
      publishedAt: item.isoDate || item.pubDate || null,
      category: source.category,
      region: source.region,
      lang: source.lang || 'en',
      trusted: !!source.trusted,
      pathAllow: source.pathAllow,
      pathDeny: source.pathDeny,
    }))
  } catch (err) {
    console.warn(`  skip ${source.name}: ${err.message}`)
    return []
  }
}

// ---- gather: discovery (Google News search) ---------------------------------

async function fromGoogleNews(query) {
  const url =
    'https://news.google.com/rss/search?' +
    new URLSearchParams({ q: query.q, hl: query.hl, gl: query.gl, ceid: query.ceid })
  try {
    const res = await fetch(url, {
      headers: { 'user-agent': UA, accept: 'application/rss+xml, application/xml, text/xml' },
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const feed = await parser.parseString(await res.text())
    return (feed.items || []).map((item) => ({
      title: clean(item.title),
      googleUrl: item.link,
      publishedAt: item.isoDate || item.pubDate || null,
      category: 'policy-perspectives',
      region: query.region,
      lang: query.lang,
    }))
  } catch (err) {
    console.warn(`  skip discovery ${query.hl}/${query.gl}: ${err.message}`)
    return []
  }
}

// Google News wraps every link in a redirect whose target is encoded, not a
// plain 301. Fetch the article page for its signing params, then ask Google's
// internal endpoint for the real publisher URL. Cached by article id.
function articleId(googleUrl) {
  return googleUrl.match(/\/articles\/([^?]+)/)?.[1] || null
}

async function resolveGoogleNews(googleUrl, cache) {
  const id = articleId(googleUrl)
  if (id && cache.resolve[id]) return cache.resolve[id]
  try {
    const page = await fetch(googleUrl, {
      headers: { 'user-agent': UA },
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    })
    const html = await page.text()
    const sig = html.match(/data-n-a-sg="([^"]+)"/)?.[1]
    const ts = html.match(/data-n-a-ts="([^"]+)"/)?.[1]
    const pid = html.match(/data-n-a-id="([^"]+)"/)?.[1] || id
    if (!sig || !ts || !pid) return null

    const inner = JSON.stringify([
      'garturlreq',
      [['X', 'X', ['X', 'X'], null, null, 1, 1, 'US:en', null, 1, null, null, null, null, null, 0, 1], 'X', 'X', 1, [1, 1, 1], 1, 1, null, 0, 0, null, 0],
      pid, Number(ts), sig,
    ])
    const res = await fetch('https://news.google.com/_/DotsSplashUi/data/batchexecute', {
      method: 'POST',
      headers: { 'user-agent': UA, 'content-type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      body: new URLSearchParams({ 'f.req': JSON.stringify([[['Fbv4je', inner, null, 'generic']]]) }),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    })
    // Response is XSSI-guarded; the real URL sits in an escaped inner payload:
    // ["garturlres","<url>",1].
    const outer = JSON.parse((await res.text()).replace(/^\)\]\}'\s*/, ''))
    const row = outer.find((r) => Array.isArray(r) && r[1] === 'Fbv4je' && typeof r[2] === 'string')
    if (!row) return null
    const finalUrl = JSON.parse(row[2])[1]
    if (!finalUrl || isGoogleHost(finalUrl)) return null
    if (id) cache.resolve[id] = finalUrl
    return finalUrl
  } catch {
    return null
  }
}

// Google News titles are "Headline - Source". Split on the last " - " when it
// sits near the end (source names are short), else treat the whole as headline.
function splitGoogleTitle(title) {
  const i = title.lastIndexOf(' - ')
  if (i > 0 && i > title.length - 60) {
    return { headline: title.slice(0, i).trim(), source: title.slice(i + 3).trim() }
  }
  return { headline: title.trim(), source: '' }
}

// Resolve discovery candidates to original publishers and apply the reputability
// policy. Cheap filters (solicitation, recency, headline-dedup) run first so we
// only spend a network round-trip resolving items that could actually ship.
async function prepareDiscovery(raw, cache) {
  let items = raw.filter((it) => it.title && it.googleUrl)

  items = items.filter((it) => {
    const text = it.title.toLowerCase()
    return !EXCLUDE_TERMS.some((term) => text.includes(term))
  })

  const now = Date.now()
  items = items.filter((it) => {
    const t = it.publishedAt ? new Date(it.publishedAt).getTime() : NaN
    return !Number.isNaN(t) && now - t <= MAX_AGE_MS && t <= now + 86400000
  })

  // Collapse identical headlines across queries/outlets before resolving.
  const seen = new Set()
  const deduped = []
  for (const it of items) {
    const { headline, source } = splitGoogleTitle(it.title)
    const key = headline.toLowerCase()
    if (!headline || seen.has(key)) continue
    seen.add(key)
    deduped.push({ ...it, title: headline, source })
  }

  deduped.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
  const pool = deduped.slice(0, DISCOVERY_RESOLVE_CAP)

  const limit = pLimit(8)
  const resolved = await Promise.all(
    pool.map((it) =>
      limit(async () => {
        const url = await resolveGoogleNews(it.googleUrl, cache)
        if (!url) return null
        const host = hostOf(url)
        if (domainInSet(host, DENY_DOMAINS)) return null
        const trustedDomain = domainInSet(host, TRUST_DOMAINS)
        // Topical guard: an untrusted domain must carry a privacy term in the
        // headline itself, not just somewhere in the page. This drops loose
        // matches (a TV listing, a box score) that a body-text hit let in.
        // Trusted outlets bypass it, since their headlines are often oblique.
        if (!trustedDomain && !isRelevant(it.title.toLowerCase())) return null
        return {
          title: it.title,
          url,
          summary: '',
          source: it.source || host,
          publishedAt: it.publishedAt,
          category: it.category,
          region: it.region,
          lang: it.lang,
          vouched: true, // the search query already vouches for topical relevance
          discovery: true,
          trustedDomain,
        }
      }),
    ),
  )
  return resolved.filter(Boolean)
}

// ---- normalize / gate / classify --------------------------------------------

function clean(text) {
  return (text || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

function hostOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '').toLowerCase()
  } catch {
    return ''
  }
}

function isGoogleHost(url) {
  const h = hostOf(url)
  return h === 'google.com' || h.endsWith('.google.com')
}

// True if host, or any of its parent domains (short of the bare TLD), is in the
// set. So both "reuters.com" and "jp.reuters.com" match an entry of "reuters.com".
function domainInSet(host, set) {
  if (!host) return false
  const labels = host.split('.')
  for (let i = 0; i < labels.length - 1; i += 1) {
    if (set.has(labels.slice(i).join('.'))) return true
  }
  return false
}

function pathOf(url) {
  try {
    return new URL(url).pathname.toLowerCase()
  } catch {
    return ''
  }
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// Prepare a matcher per relevance term. Latin-script terms (incl. accented) are
// matched on word boundaries so short acronyms never match inside a larger word
// (e.g. "dpo" in "endpoint", or "appi" inside a Polish word). CJK and Cyrillic
// terms have no such collisions and are matched as plain substrings (those
// scripts run without spaces, so boundaries do not apply).
const RELEVANCE_MATCHERS = RELEVANCE_TERMS.map((term) => {
  const isLatin = !/[^ -ɏ]/.test(term)
  if (!isLatin) return (text) => text.includes(term)
  const re = new RegExp(`(?<![\\p{L}\\p{N}])${escapeRegExp(term)}(?![\\p{L}\\p{N}])`, 'iu')
  return (text) => re.test(text)
})

function isRelevant(text) {
  return RELEVANCE_MATCHERS.some((match) => match(text))
}

// Keep only privacy-relevant, non-solicitation items that pass their source's
// path rules.
function passesGates(item) {
  const path = pathOf(item.url)
  if (item.pathAllow && !item.pathAllow.some((p) => path.includes(p))) return false
  if (item.pathDeny && item.pathDeny.some((p) => path.includes(p))) return false

  const text = `${item.title} ${item.summary}`.toLowerCase()
  const urlText = item.url.toLowerCase()
  if (EXCLUDE_TERMS.some((term) => text.includes(term) || urlText.includes(term))) return false
  // Trusted sources (regulators) and discovery items (vouched by their search
  // query) skip the keyword relevance gate. This also lets their non-English
  // titles through without English keyword matching.
  if (item.trusted || item.vouched) return true
  if (!isRelevant(text)) return false
  return true
}

function canonical(url) {
  try {
    const u = new URL(url)
    u.hash = ''
    for (const key of [...u.searchParams.keys()]) {
      if (/^(utm_|fbclid|gclid|mc_)/i.test(key)) u.searchParams.delete(key)
    }
    return u.toString()
  } catch {
    return url
  }
}

function classify(item) {
  const hay = `${item.title} ${item.summary}`.toLowerCase()

  let category = item.category
  for (const hint of CATEGORY_HINTS) {
    if (hint.words.some((w) => hay.includes(w))) {
      category = hint.category
      break
    }
  }

  // Region axis: cross-border topics win, then a specific geographic hint, then
  // the source's own home region, else unspecified. Cross-border is matched on
  // the title alone so a stray "data transfer" deep in a summary can't misfile
  // an otherwise-domestic story.
  const title = item.title.toLowerCase()
  let region
  if (CROSS_BORDER_TERMS.some((w) => title.includes(w))) {
    region = 'cross-border'
  } else if (item.lang === 'en') {
    // Geographic hints are English words, so only trust them on English text.
    const hinted = REGION_HINTS.find((h) => h.words.some((w) => hay.includes(w)))
    region = hinted ? hinted.region : item.region || 'unspecified'
  } else {
    region = item.region || 'unspecified'
  }
  return { ...item, category, region }
}

// ---- verify link ------------------------------------------------------------

function keepStatus(status) {
  // Under 400 is fine. 401/403/429 mean a human can still reach it (paywall,
  // bot-block, rate-limit) so we keep the story.
  return status < 400 || status === 401 || status === 403 || status === 429
}

async function verify(item) {
  try {
    const res = await fetch(item.url, {
      redirect: 'follow',
      headers: { 'user-agent': UA, accept: 'text/html,application/xhtml+xml' },
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    })
    try { await res.body?.cancel() } catch { /* noop */ }
    if (!keepStatus(res.status)) return null
    return {
      id: createHash('sha1').update(canonical(item.url)).digest('hex').slice(0, 12),
      title: item.title,
      url: res.url || item.url,
      source: item.source,
      publishedAt: item.publishedAt,
      category: item.category,
      region: item.region,
      lang: item.lang || 'en',
    }
  } catch {
    return null // network error or timeout -> treat as unreachable
  }
}

// ---- translation (DeepL) ----------------------------------------------------

const DEEPL_KEY = process.env.DEEPL_API_KEY
// Free keys end in ':fx' and use a separate host.
const DEEPL_HOST =
  DEEPL_KEY && DEEPL_KEY.endsWith(':fx') ? 'https://api-free.deepl.com' : 'https://api.deepl.com'

function tKey(lang, title) {
  return createHash('sha1').update(`${lang}|${title}`).digest('hex')
}

// Translate non-English titles to English in place, storing the original as
// originalTitle. Cached translations are applied first (so a title is only ever
// sent to DeepL once, even across runs); without a key, cached hits still apply
// and the rest stay in their original language, labelled by lang on the card.
async function translateTitles(items, cache) {
  const nonEn = items.filter((it) => it.lang && it.lang !== 'en')
  const pending = []
  for (const it of nonEn) {
    const hit = cache.translate[tKey(it.lang, it.title)]
    if (hit && hit !== it.title) {
      it.originalTitle = it.title
      it.title = hit
    } else {
      pending.push(it)
    }
  }
  const fromCache = nonEn.length - pending.length

  if (!DEEPL_KEY) {
    console.log(`  DEEPL_API_KEY not set; ${fromCache} titles from cache, ${pending.length} left original.`)
    return items
  }
  if (pending.length === 0) {
    console.log(`  all ${nonEn.length} non-English titles served from cache`)
    return items
  }

  const BATCH = 40
  let translated = 0
  for (let i = 0; i < pending.length; i += BATCH) {
    const batch = pending.slice(i, i + BATCH)
    try {
      const res = await fetch(`${DEEPL_HOST}/v2/translate`, {
        method: 'POST',
        headers: {
          Authorization: `DeepL-Auth-Key ${DEEPL_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: batch.map((b) => b.title), target_lang: 'EN-US' }),
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      const out = data.translations || []
      batch.forEach((item, idx) => {
        const tr = out[idx]?.text
        if (tr && tr.trim() && tr.trim() !== item.title) {
          cache.translate[tKey(item.lang, item.title)] = tr.trim()
          item.originalTitle = item.title
          item.title = tr.trim()
          translated += 1
        }
      })
    } catch (err) {
      console.warn(`  translation batch failed: ${err.message}`)
    }
  }
  console.log(`  translated ${translated} new non-English titles (${fromCache} from cache)`)
  return items
}

// Order for display: round-robin across sources (each source newest-first, and
// each pass led by the source with the newest remaining item). This keeps the
// feed roughly fresh while spreading sources and languages evenly, so page one
// is not dominated or repeated by one prolific source.
function interleaveBySource(items) {
  const groups = new Map()
  for (const it of items) {
    if (!groups.has(it.source)) groups.set(it.source, [])
    groups.get(it.source).push(it)
  }
  for (const arr of groups.values()) {
    arr.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
  }
  const queues = [...groups.values()]
  const result = []
  while (result.length < items.length) {
    queues.sort((a, b) => {
      if (!a.length) return 1
      if (!b.length) return -1
      return new Date(b[0].publishedAt) - new Date(a[0].publishedAt)
    })
    let took = false
    for (const q of queues) {
      if (q.length) {
        result.push(q.shift())
        took = true
      }
    }
    if (!took) break
  }
  return result
}

// ---- main -------------------------------------------------------------------

async function main() {
  const cache = loadCache()

  console.log('Gathering trusted core + discovery...')
  const [coreBatches, discoveryBatches] = await Promise.all([
    Promise.all(RSS_SOURCES.map(fromRss)),
    Promise.all(DISCOVERY_QUERIES.map(fromGoogleNews)),
  ])
  const core = coreBatches.flat()
  const discoveryRaw = discoveryBatches.flat()
  console.log(`  ${core.length} core items; ${discoveryRaw.length} discovery candidates`)

  const discovery = await prepareDiscovery(discoveryRaw, cache)
  console.log(`  ${discovery.length} discovery items resolved + reputable`)

  let items = [...core, ...discovery]

  // Valid title + url only.
  items = items.filter((it) => it.title && it.url && /^https?:/i.test(it.url))

  // Privacy-relevance and solicitation gates.
  const beforeGate = items.length
  items = items.filter(passesGates)
  console.log(`  ${items.length} passed relevance/exclusion gates (dropped ${beforeGate - items.length})`)

  // Fresh only.
  const now = Date.now()
  items = items.filter((it) => {
    const t = it.publishedAt ? new Date(it.publishedAt).getTime() : NaN
    return !Number.isNaN(t) && now - t <= MAX_AGE_MS && t <= now + 86400000
  })

  // Dedupe by canonical url, then by normalized title. Sort authoritative copies
  // first (trusted core, then trusted-domain discovery) so when the same story
  // appears twice, the copy we keep is the most authoritative one.
  items.sort((a, b) => {
    const pa = !a.discovery || a.trustedDomain ? 0 : 1
    const pb = !b.discovery || b.trustedDomain ? 0 : 1
    if (pa !== pb) return pa - pb
    return new Date(b.publishedAt) - new Date(a.publishedAt)
  })
  const seenUrl = new Set()
  const seenTitle = new Set()
  items = items.filter((it) => {
    const cu = canonical(it.url)
    const ct = it.title.toLowerCase()
    if (seenUrl.has(cu) || seenTitle.has(ct)) return false
    seenUrl.add(cu)
    seenTitle.add(ct)
    return true
  })

  // Classify and sort newest first.
  items = items.map(classify)
  items.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))

  // Balance selection: reserve ~40% of slots for non-English so the feed is not
  // swamped by US/EU coverage. Best-effort: if either pool is short, the other
  // backfills (soft floor, never blocks the feed). Per-source cap still applies.
  const nonEn = items.filter((it) => it.lang && it.lang !== 'en')
  const en = items.filter((it) => !it.lang || it.lang === 'en')
  const targetNonEn = Math.round(TOTAL_CAP * NONEN_TARGET_RATIO)

  const perSource = new Map()
  const used = new Set()
  const capped = []
  function add(it) {
    if (used.has(it.url)) return false
    const n = perSource.get(it.source) || 0
    if (n >= PER_SOURCE_CAP) return false
    perSource.set(it.source, n + 1)
    used.add(it.url)
    capped.push(it)
    return true
  }
  function take(list, limit) {
    for (const it of list) {
      if (capped.length >= limit) break
      add(it)
    }
  }
  // Round-robin one item per source each pass, so no single prolific language
  // eats the whole non-English reserve before the others get a turn.
  function takeRoundRobin(list, limit) {
    const queues = new Map()
    for (const it of list) {
      if (!queues.has(it.source)) queues.set(it.source, [])
      queues.get(it.source).push(it)
    }
    let progress = true
    while (progress && capped.length < limit) {
      progress = false
      for (const q of queues.values()) {
        if (capped.length >= limit) break
        while (q.length) {
          if (add(q.shift())) {
            progress = true
            break
          }
        }
      }
    }
  }
  takeRoundRobin(nonEn, targetNonEn) // reserve ~40% for non-English, spread across languages
  take(en, TOTAL_CAP) // fill the rest with English
  take(nonEn, TOTAL_CAP) // backfill any remainder with non-English
  capped.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
  console.log(`  ${capped.length} candidates after dedupe/quota; verifying links...`)

  // Verify links, dropping anything unreachable.
  const limit = pLimit(6)
  const results = await Promise.all(capped.map((it) => limit(() => verify(it))))
  const verified = results.filter(Boolean)
  verified.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
  console.log(`  ${verified.length} items passed verification`)

  // Translate non-English titles to English (cached; no-op without a DeepL key).
  await translateTitles(verified, cache)
  const nonEnCount = verified.filter((it) => it.lang && it.lang !== 'en').length
  const pct = verified.length ? Math.round((nonEnCount / verified.length) * 100) : 0
  console.log(`  language mix: ${nonEnCount}/${verified.length} non-English (${pct}%)`)

  // Persist the cache (new link resolutions + translations) for the next run.
  pruneMap(cache.resolve, 8000)
  pruneMap(cache.translate, 8000)
  saveCache(cache)

  // Never overwrite a good feed with an empty one: a run that finds nothing
  // (all feeds down, network blocked) fails loudly and leaves news.json intact.
  if (verified.length === 0) {
    console.error('No items produced. Leaving existing news.json untouched.')
    process.exitCode = 1
    return
  }

  const payload = { generatedAt: new Date().toISOString(), items: interleaveBySource(verified) }
  mkdirSync(dirname(OUT_PATH), { recursive: true })
  writeFileSync(OUT_PATH, JSON.stringify(payload, null, 2) + '\n')
  console.log(`Wrote ${verified.length} items to ${OUT_PATH}`)
}

main()
