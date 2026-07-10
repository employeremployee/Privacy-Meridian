import { useId } from 'react'
import { useTranslation } from 'react-i18next'
import { NEWS_CATEGORIES, NEWS_REGIONS } from '../data/barrelman/taxonomy.js'

// Filter bar for the Barrelman grid: a search box, category chips, and a region
// select. Fully controlled by the page so the visible grid always reflects it.
function NewsFilters({
  query,
  onQueryChange,
  activeCategory,
  onCategoryChange,
  activeRegion,
  onRegionChange,
  onClear,
  hasActiveFilters,
}) {
  const { t } = useTranslation()
  const searchId = useId()
  const regionId = useId()

  const chips = [{ id: 'all', label: t('barrelman.allCategories') }].concat(
    NEWS_CATEGORIES.map((id) => ({ id, label: t(`barrelman.category.${id}`) })),
  )

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-end gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor={searchId} className="text-xs font-medium text-ink">
            {t('barrelman.searchLabel')}
          </label>
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder={t('barrelman.searchPlaceholder')}
            className="w-full max-w-xs rounded-md border border-rule bg-paper px-3 py-2 text-sm text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor={regionId} className="text-xs font-medium text-ink">
            {t('barrelman.regionFilterLabel')}
          </label>
          <select
            id={regionId}
            value={activeRegion}
            onChange={(event) => onRegionChange(event.target.value)}
            className="rounded-md border border-rule bg-paper px-3 py-2 text-sm text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue"
          >
            <option value="all">{t('barrelman.allRegions')}</option>
            {NEWS_REGIONS.map((id) => (
              <option key={id} value={id}>
                {t(`barrelman.region.${id}`)}
              </option>
            ))}
          </select>
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClear}
            className="rounded-md border border-rule px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue"
          >
            {t('barrelman.clearFilters')}
          </button>
        )}
      </div>

      <div
        role="group"
        aria-label={t('barrelman.categoryFilterLabel')}
        className="flex flex-wrap gap-2"
      >
        {chips.map((chip) => {
          const isActive = chip.id === activeCategory
          return (
            <button
              key={chip.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => onCategoryChange(chip.id)}
              className={[
                'rounded-full px-3 py-1 text-xs font-medium transition-colors',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue',
                isActive ? 'bg-meridian-blue text-white' : 'bg-surface text-ink hover:bg-rule',
              ].join(' ')}
            >
              {chip.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default NewsFilters
