import { useParams, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import gdprData from '../data/jurisdictions/gdpr.json'
import ccpaData from '../data/jurisdictions/ccpa.json'
import lgpdData from '../data/jurisdictions/lgpd.json'
import piplData from '../data/jurisdictions/pipl.json'
import glossaryData from '../data/glossary.json'
import categoriesData from '../data/framework/categories.json'
import ContentBlock from '../components/ContentBlock.jsx'
import JurisdictionBadge from '../components/JurisdictionBadge.jsx'
import RegulationNav from '../components/RegulationNav.jsx'
import { getCategoryArticles } from '../utils/contentLookup.js'

const JURISDICTIONS = {
  gdpr: gdprData,
  ccpa: ccpaData,
  lgpd: lgpdData,
  pipl: piplData,
}

const DEFAULT_CATEGORY_ID = 'data-subject-rights'

function RegulationPage() {
  const { jurisdictionId, categoryId } = useParams()
  const { t } = useTranslation()
  const location = useLocation()
  const jurisdictionData = JURISDICTIONS[jurisdictionId]

  if (!jurisdictionData) {
    return (
      <main className="mx-auto max-w-[1200px] px-4 py-8">
        <RegulationNav />
      </main>
    )
  }

  const resolvedCategoryId = categoryId || DEFAULT_CATEGORY_ID
  const articles = getCategoryArticles(jurisdictionData, resolvedCategoryId)
  const fromCountry = location.state?.fromCountry
  const categoryMeta = categoriesData.categories.find((c) => c.id === resolvedCategoryId)
  const { name, badge } = jurisdictionData.jurisdiction

  return (
    <main className="mx-auto flex max-w-[760px] flex-col gap-6 px-4 py-8">
      <div className="flex flex-wrap items-center gap-3">
        <JurisdictionBadge badge={badge} />
        <h2 className="text-xl font-bold text-ink">
          {name}
          {categoryMeta && <span className="font-normal">: {categoryMeta.label}</span>}
        </h2>
      </div>

      {fromCountry && (
        <p className="rounded-lg border border-rule bg-surface p-4 text-sm text-ink">
          {t('map.nationalImplementationNote', { country: fromCountry })}
        </p>
      )}
      {articles.map((article) => (
        <ContentBlock
          key={article.id}
          article={article}
          jurisdictionId={jurisdictionId}
          jurisdictionData={jurisdictionData}
          glossaryData={glossaryData}
        />
      ))}
    </main>
  )
}

export default RegulationPage
