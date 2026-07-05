import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ContentBlock from './ContentBlock.jsx'
import JurisdictionBadge from './JurisdictionBadge.jsx'
import categoriesData from '../data/framework/categories.json'
import { getCategoryArticles } from '../utils/contentLookup.js'

function DrilldownReadout({ jurisdictionData, glossaryData }) {
  const { t } = useTranslation()
  const { jurisdiction, categories } = jurisdictionData

  // Topics this jurisdiction actually has content for, ordered by the framework's category order.
  const availableCategoryIds = new Set(categories.map((c) => c.categoryId))
  const topics = categoriesData.categories
    .filter((c) => availableCategoryIds.has(c.id))
    .sort((a, b) => a.order - b.order)

  const [activeTopic, setActiveTopic] = useState(topics[0]?.id ?? null)
  const [showOrganizations, setShowOrganizations] = useState(false)

  const articles = activeTopic ? getCategoryArticles(jurisdictionData, activeTopic) : []

  return (
    <section aria-label={jurisdiction.fullName}>
      <div className="flex flex-wrap items-center gap-3">
        <JurisdictionBadge badge={jurisdiction.badge} />
        <h2 className="text-xl font-bold text-ink">{jurisdiction.fullName}</h2>
        <span className="font-mono text-xs text-ink">{jurisdiction.citation}</span>
        {jurisdiction.draft && (
          <span className="rounded border border-horizon px-2 py-0.5 text-xs font-medium text-horizon">
            {t('drilldown.draftNotice')}
          </span>
        )}
      </div>

      <nav aria-label={t('topicPicker.label')} className="mt-4 flex flex-wrap gap-2">
        {topics.map((topic) => {
          const isActive = topic.id === activeTopic
          return (
            <button
              key={topic.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveTopic(topic.id)}
              className={[
                'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue',
                isActive ? 'bg-meridian-blue text-white' : 'bg-surface text-ink hover:bg-rule',
              ].join(' ')}
            >
              {topic.label}
            </button>
          )
        })}
      </nav>

      <div className="mt-4">
        <label className="inline-flex items-center gap-2 text-sm font-medium text-ink">
          <input
            type="checkbox"
            checked={showOrganizations}
            onChange={(e) => setShowOrganizations(e.target.checked)}
            className="h-4 w-4 rounded border-rule text-meridian-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue"
          />
          {t('organizations.toggle')}
        </label>
      </div>

      <div className="mt-4 flex flex-col gap-6">
        {articles.map((article) => (
          <ContentBlock
            key={article.id}
            article={article}
            jurisdictionId={jurisdiction.id}
            jurisdictionData={jurisdictionData}
            glossaryData={glossaryData}
            showOrganizations={showOrganizations}
          />
        ))}
      </div>
    </section>
  )
}

export default DrilldownReadout
