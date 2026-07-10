import { useTranslation } from 'react-i18next'

// Numbers shown at once. The arrows move by a whole window, so 1-2-3 becomes
// 4-5-6 in one click; individual pages are reached by tapping a number.
const WINDOW = 3

// Windowed numeral pager for the Barrelman grid. Shows up to three page numbers
// (the block containing the current page); the arrows jump to the next or
// previous block. Controlled by the page.
function NewsPagination({ page, totalPages, onPageChange }) {
  const { t } = useTranslation()
  if (totalPages <= 1) return null

  const blockStart = Math.floor((page - 1) / WINDOW) * WINDOW + 1
  const blockEnd = Math.min(blockStart + WINDOW - 1, totalPages)
  const numbers = []
  for (let n = blockStart; n <= blockEnd; n += 1) numbers.push(n)

  const hasPrev = blockStart > 1
  const hasNext = blockStart + WINDOW <= totalPages
  const arrow =
    'flex h-8 min-w-8 items-center justify-center rounded-md border border-rule px-2 text-sm font-medium text-ink transition-colors hover:bg-surface disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue'

  return (
    <nav
      aria-label={t('barrelman.pagination.label')}
      className="flex flex-wrap items-center justify-center gap-1"
    >
      <button
        type="button"
        onClick={() => onPageChange(blockStart - WINDOW)}
        disabled={!hasPrev}
        aria-label={t('barrelman.pagination.previous')}
        className={arrow}
      >
        <span aria-hidden="true">‹</span>
      </button>

      {numbers.map((n) => {
        const isCurrent = n === page
        return (
          <button
            key={n}
            type="button"
            onClick={() => onPageChange(n)}
            aria-label={t('barrelman.pagination.page', { page: n })}
            aria-current={isCurrent ? 'page' : undefined}
            className={[
              'flex h-8 min-w-8 items-center justify-center rounded-md px-2 text-sm font-medium transition-colors',
              'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue',
              isCurrent
                ? 'bg-meridian-blue text-white'
                : 'border border-rule text-ink hover:bg-surface',
            ].join(' ')}
          >
            {n}
          </button>
        )
      })}

      <button
        type="button"
        onClick={() => onPageChange(blockStart + WINDOW)}
        disabled={!hasNext}
        aria-label={t('barrelman.pagination.next')}
        className={arrow}
      >
        <span aria-hidden="true">›</span>
      </button>
    </nav>
  )
}

export default NewsPagination
