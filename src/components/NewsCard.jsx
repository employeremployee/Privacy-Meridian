import { useTranslation } from 'react-i18next'
import { normalizeCategory } from '../data/barrelman/taxonomy.js'

// One story in the Barrelman grid. The whole card is a single link that opens
// the original article in a new tab. Cards are text-only by design: no article
// image is loaded, so a visitor's browser makes no third-party requests. The
// source name is set in the citation typeface to read as an attribution.
function NewsCard({ item }) {
  const { t, i18n } = useTranslation()
  const category = normalizeCategory(item.category)
  const dateLabel = formatDate(item.publishedAt, i18n.language)

  // Non-English articles carry a language note so a click-through is never a
  // surprise. The original headline shows on hover.
  const isForeign = item.lang && item.lang !== 'en'
  const languageNote = isForeign ? t('barrelman.inLanguage', { language: t(`barrelman.language.${item.lang}`) }) : null

  return (
    <li className="list-none">
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        title={item.originalTitle || undefined}
        className="group flex h-48 flex-col gap-3 overflow-hidden rounded-lg border border-rule border-l-4 border-l-meridian-blue bg-paper p-4 transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue"
      >
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-sm bg-surface px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-ink">
            {t(`barrelman.category.${category}`)}
          </span>
          <span className="text-xs text-ink">{dateLabel}</span>
        </div>

        <h3 className="line-clamp-3 text-base font-semibold leading-snug text-ink group-hover:text-meridian-blue">
          {item.title}
        </h3>

        <p className="mt-auto font-mono text-xs text-ink">
          {item.source}
          {languageNote && (
            <span className="text-ink"> · {languageNote}</span>
          )}
          <span className="sr-only">. {t('barrelman.openInNewTab')}</span>
        </p>
      </a>
    </li>
  )
}

function formatDate(value, locale) {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  return new Intl.DateTimeFormat(locale || 'en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date)
}

export default NewsCard
