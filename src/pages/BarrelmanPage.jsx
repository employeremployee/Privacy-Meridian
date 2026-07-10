import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import NewsCard from '../components/NewsCard.jsx'
import NewsFilters from '../components/NewsFilters.jsx'
import NewsPagination from '../components/NewsPagination.jsx'
import { normalizeCategory, normalizeRegion } from '../data/barrelman/taxonomy.js'

// Stories shown per page. The rest are reached through the pager or by swiping.
const PAGE_SIZE = 9
// A horizontal drag past this many pixels flips the page on touch devices.
const SWIPE_THRESHOLD = 50

// How often to re-pull news.json while the page stays open (matches the feed's
// own 30-minute refresh). Same-origin static file, so no third-party calls.
const REFRESH_MS = 30 * 60 * 1000
// A feed older than this is flagged as stale so visitors know it may be behind.
const STALE_MS = 90 * 60 * 1000

// news.json is emitted into the site root, so honor Vite's base path (matters
// once the site is served from a GitHub Pages subpath).
const NEWS_URL = `${import.meta.env.BASE_URL}news.json`

function BarrelmanPage() {
  const { t, i18n } = useTranslation()
  const [feed, setFeed] = useState(null)
  const [status, setStatus] = useState('loading') // loading | ready | error

  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeRegion, setActiveRegion] = useState('all')
  const [page, setPage] = useState(1)

  const touchStartRef = useRef(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const res = await fetch(`${NEWS_URL}?t=${Date.now()}`, { cache: 'no-store' })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        if (cancelled) return
        setFeed(data)
        setStatus('ready')
      } catch {
        if (cancelled) return
        setStatus((prev) => (prev === 'ready' ? 'ready' : 'error'))
      }
    }

    load()
    const timer = setInterval(load, REFRESH_MS)
    return () => {
      cancelled = true
      clearInterval(timer)
    }
  }, [])

  // Preserve the pipeline's display order (diversity-interleaved across sources),
  // rather than re-sorting by date which would re-cluster prolific sources.
  const items = useMemo(() => (Array.isArray(feed?.items) ? feed.items : []), [feed])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return items.filter((item) => {
      if (activeCategory !== 'all' && normalizeCategory(item.category) !== activeCategory) return false
      if (activeRegion !== 'all' && normalizeRegion(item.region) !== activeRegion) return false
      if (q) {
        const haystack = `${item.title} ${item.source}`.toLowerCase()
        if (!haystack.includes(q)) return false
      }
      return true
    })
  }, [items, query, activeCategory, activeRegion])

  const hasActiveFilters = query.trim() !== '' || activeCategory !== 'all' || activeRegion !== 'all'

  // Show 9 at a time. Reset to the first page whenever the filtered set changes.
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  useEffect(() => {
    setPage(1)
  }, [query, activeCategory, activeRegion])

  function goToPage(next) {
    const clamped = Math.min(Math.max(1, next), totalPages)
    if (clamped === currentPage) return
    setPage(clamped)
  }

  function onTouchStart(event) {
    const touch = event.changedTouches[0]
    touchStartRef.current = { x: touch.clientX, y: touch.clientY }
  }

  function onTouchEnd(event) {
    const start = touchStartRef.current
    touchStartRef.current = null
    if (!start) return
    const touch = event.changedTouches[0]
    const dx = touch.clientX - start.x
    const dy = touch.clientY - start.y
    // Only treat mostly-horizontal drags as page swipes, so vertical scrolling
    // is never hijacked.
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return
    goToPage(dx < 0 ? currentPage + 1 : currentPage - 1)
  }

  function clearFilters() {
    setQuery('')
    setActiveCategory('all')
    setActiveRegion('all')
  }

  const generatedAt = feed?.generatedAt ? new Date(feed.generatedAt) : null
  const isStale =
    generatedAt && !feed?.seed && Date.now() - generatedAt.getTime() > STALE_MS

  return (
    <main className="mx-auto max-w-[1200px] px-4 py-6">
      <div className="border-l-4 border-meridian-blue pl-4">
        <h2 className="text-2xl font-bold text-ink">{t('barrelman.title')}</h2>
        <p className="mt-1 text-sm text-ink">{t('barrelman.tagline')}</p>
      </div>

      <p className="mt-3 max-w-2xl text-sm text-ink">{t('barrelman.intro')}</p>

      <div className="mt-3">
        <Link
          to="/"
          className="text-sm font-medium text-meridian-blue underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue"
        >
          {t('nav.backToMap')}
        </Link>
      </div>

      {feed?.seed && (
        <p className="mt-4 rounded-md border border-rule bg-surface p-3 text-sm text-ink">
          {t('barrelman.seedNotice')}
        </p>
      )}
      {isStale && (
        <p className="mt-4 rounded-md border border-rule bg-surface p-3 text-sm text-ink">
          {t('barrelman.stale')}
        </p>
      )}

      {status === 'loading' && (
        <p className="mt-8 text-sm text-ink">{t('barrelman.loading')}</p>
      )}

      {status === 'error' && (
        <p className="mt-8 rounded-md border border-rule bg-surface p-4 text-sm text-ink">
          {t('barrelman.error')}
        </p>
      )}

      {status === 'ready' && (
        <>
          <div className="mt-6">
            <NewsFilters
              query={query}
              onQueryChange={setQuery}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              activeRegion={activeRegion}
              onRegionChange={setActiveRegion}
              onClear={clearFilters}
              hasActiveFilters={hasActiveFilters}
            />
          </div>

          <p aria-live="polite" className="mt-4 text-xs font-medium text-ink">
            {t('barrelman.resultCount', { count: filtered.length })}
            <span className="mx-1.5" aria-hidden="true">·</span>
            {generatedAt
              ? t('barrelman.updatedAt', { time: formatRelative(generatedAt, i18n.language) })
              : t('barrelman.updatedUnknown')}
          </p>

          {filtered.length > 0 ? (
            <>
              {/* Fixed height so the layout does not jump when a filter has only
                  one page and the pager is absent. */}
              <div className="mt-4 flex min-h-8 items-center justify-center">
                <NewsPagination page={currentPage} totalPages={totalPages} onPageChange={goToPage} />
              </div>
              <p aria-live="polite" className="sr-only">
                {t('barrelman.pagination.status', { page: currentPage, total: totalPages })}
              </p>
              <ul
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {pageItems.map((item) => (
                  <NewsCard key={item.id} item={item} />
                ))}
              </ul>
            </>
          ) : (
            <div className="mt-8 rounded-lg border border-dashed border-rule bg-surface p-6 text-center">
              <p className="text-sm text-ink">{t('barrelman.empty')}</p>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-3 rounded-md border border-rule px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue"
                >
                  {t('barrelman.clearFilters')}
                </button>
              )}
            </div>
          )}
        </>
      )}
    </main>
  )
}

// "Updated 12 minutes ago" style label, localized. Falls back to an absolute
// date once the feed is more than a day old.
function formatRelative(date, locale) {
  const diffMs = Date.now() - date.getTime()
  const minutes = Math.round(diffMs / 60000)
  const rtf = new Intl.RelativeTimeFormat(locale || 'en', { numeric: 'auto' })

  if (minutes < 1) return rtf.format(0, 'minute')
  if (minutes < 60) return rtf.format(-minutes, 'minute')
  const hours = Math.round(minutes / 60)
  if (hours < 24) return rtf.format(-hours, 'hour')

  return new Intl.DateTimeFormat(locale || 'en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date)
}

export default BarrelmanPage
