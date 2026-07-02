import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { findArticleLocation } from '../utils/contentLookup.js'

function CrossReference({ references, jurisdictionId, jurisdictionData }) {
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
          if (!location) {
            return (
              <li key={ref.articleId} className="text-sm text-ink">
                {ref.label}
              </li>
            )
          }
          return (
            <li key={ref.articleId}>
              <Link
                to={`/regulation/${jurisdictionId}/${location.categoryId}#${ref.articleId}`}
                className="text-sm text-meridian-blue underline hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue"
              >
                {ref.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CrossReference
