import { useTranslation } from 'react-i18next'
import { findArticleLocation } from '../utils/contentLookup.js'

// Related articles within the same law. Each is a button that moves the reader
// to that article on the current page (switching topic if needed), so the
// visitor keeps their place on the map page.
function CrossReference({ references, jurisdictionData, onNavigate }) {
  const { t } = useTranslation()

  if (!references || references.length === 0) return null

  return (
    <div className="mt-4">
      <h3 className="text-xs font-medium uppercase tracking-wide text-ink">
        {t('contentBlock.crossReferencesLabel')}
      </h3>
      <ul className="mt-1 space-y-1">
        {references.map((ref) => {
          const location = findArticleLocation(jurisdictionData, ref.articleId)
          if (!location || !onNavigate) {
            return (
              <li key={ref.articleId} className="text-sm text-ink">
                {ref.label}
              </li>
            )
          }
          return (
            <li key={ref.articleId}>
              <button
                type="button"
                onClick={() => onNavigate(ref.articleId, location.categoryId)}
                className="text-left text-sm text-meridian-blue underline hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue"
              >
                {ref.label}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CrossReference
