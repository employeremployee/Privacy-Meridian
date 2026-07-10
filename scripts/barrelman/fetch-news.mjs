// Privacy Barrelman feed builder. Runs on GitHub Actions (Node 20+), not in the
// browser. Produces public/news.json for the static site to render.
//
// Pipeline: gather feeds -> normalize -> drop non-privacy and solicitation items
// -> filter to last 90 days -> dedupe -> classify into a category/region -> sort
// newest first -> cap -> verify each link resolves -> write JSON. A dead link
// (404/410) drops the item; a paywall or bot-block (401/403/429) is kept, since a
// human can still read it. No images are fetched or stored: cards are text-only,
// so visitors make no third-party requests.

import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createHash } from 'node:crypto'
import Parser from 'rss-parser'
import pLimit from 'p-limit'
import {
  RSS_SOURCES,
  GDELT_QUERY,
  RELEVANCE_TERMS,
  EXCLUDE_TERMS,
  CATEGORY_HINTS,
  CROSS_BORDER_TERMS,
  REGION_HINTS,
} from './sources.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_PATH = resolve(__dirname, '../../public/news.json')

const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000 // 3 months
const PER_SOURCE_CAP = 8
const TOTAL_CAP = 90
// Reserve this share of slots for non-English coverage so the feed is not
// swamped by US/EU news. Best-effort target; soft in both directions.
const NONEN_TARGET_RATIO = 0.4
const REQUEST_TIMEOUT_MS = 12000
const UA =
  'Mozilla/5.0 (compatible; PrivacyMeridianBot/1.0; +https://privacymeridian.org)'

const parser = new Parser({
  timeout: REQUEST_TIMEOUT_MS,
  headers: { 'user-agent': UA },
})

// ---- gather -----------------------------------------------------------------

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

async function fromGdelt() {
  if (!GDELT_QUERY?.enabled) return []
  const url =
    'https://api.gdeltproject.org/api/v2/doc/doc?' +
    new URLSearchParams({
      query: GDELT_QUERY.query,
      mode: 'ArtList',
      format: 'json',
      timespan: '3m',
      maxrecords: String(GDELT_QUERY.maxRecords || 40),
      sort: 'DateDesc',
    })
  try {
    const res = await fetch(url, { headers: { 'user-agent': UA }, signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS) })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    return (data.articles || []).map((a) => ({
      title: clean(a.title),
      url: a.url,
      summary: '',
      source: a.domain || 'GDELT',
      publishedAt: gdeltDate(a.seendate),
      category: 'policy-perspectives',
      region: 'unspecified',
      lang: 'en',
      trusted: false,
    }))
  } catch (err) {
    console.warn(`  skip GDELT: ${err.message}`)
    return []
  }
}

// ---- normalize / gate / classify --------------------------------------------

function clean(text) {
  return (text || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

function gdeltDate(seendate) {
  if (!seendate) return null
  const m = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z$/.exec(seendate)
  if (!m) return null
  return `${m[1]}-${m[2]}-${m[3]}T${m[4]}:${m[5]}:${m[6]}.000Z`
}

function pathOf(url) {
  try {
    return new URL(url).pathname.toLowerCase()
  } catch {
    return ''
  }
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
  // Trusted sources (privacy-only regulators) skip the relevance gate. This also
  // lets their non-English titles through without English keyword matching.
  if (item.trusted) return true
  if (!RELEVANCE_TERMS.some((term) => text.includes(term))) return false
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
  // the source's own home region, else unspecified (shown only under "All").
  // Cross-border is matched on the title alone so a stray "data transfer" deep
  // in a summary can't misfile an otherwise-domestic story.
  const title = item.title.toLowerCase()
  let region
  if (CROSS_BORDER_TERMS.some((w) => title.includes(w))) {
    region = 'cross-border'
  } else if (item.lang === 'en') {
    // Geographic hints are English words, so only trust them on English text.
    // A non-English source (a national DPA, say) keeps its own home region
    // rather than being mis-tagged by a stray substring in its summary.
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

// Translate non-English titles to English in place, storing the original as
// originalTitle. Without a key (e.g. local runs) it is a graceful no-op: items
// keep their original-language title and are still labelled by lang on the card.
async function translateTitles(items) {
  if (!DEEPL_KEY) {
    console.log('  DEEPL_API_KEY not set; skipping translation (titles stay original).')
    return items
  }
  const targets = items.filter((it) => it.lang && it.lang !== 'en')
  if (targets.length === 0) return items

  const BATCH = 40
  let translated = 0
  for (let i = 0; i < targets.length; i += BATCH) {
    const batch = targets.slice(i, i + BATCH)
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
        const t = out[idx]?.text
        if (t && t.trim() && t.trim() !== item.title) {
          item.originalTitle = item.title
          item.title = t.trim()
          translated += 1
        }
      })
    } catch (err) {
      console.warn(`  translation batch failed: ${err.message}`)
    }
  }
  console.log(`  translated ${translated} non-English titles`)
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
  console.log('Gathering sources...')
  const batches = await Promise.all([...RSS_SOURCES.map(fromRss), fromGdelt()])
  let items = batches.flat()
  console.log(`  gathered ${items.length} raw items`)

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

  // Dedupe by canonical url, then by normalized title.
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

  // Translate non-English titles to English (no-op without a DeepL key).
  await translateTitles(verified)
  const nonEnCount = verified.filter((it) => it.lang && it.lang !== 'en').length
  const pct = verified.length ? Math.round((nonEnCount / verified.length) * 100) : 0
  console.log(`  language mix: ${nonEnCount}/${verified.length} non-English (${pct}%)`)

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
