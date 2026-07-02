import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import categoriesData from '../data/framework/categories.json'
import gridData from '../data/comparison/grid.json'

function TopicNav() {
  const { t } = useTranslation()
  const availableCategoryIds = new Set(gridData.rows.map((row) => row.categoryId))
  const categories = categoriesData.categories
    .filter((category) => availableCategoryIds.has(category.id))
    .sort((a, b) => a.order - b.order)

  return (
    <nav aria-label={t('topicNav.label')}>
      <h2 className="mb-4 text-xl font-bold text-ink">{t('topicNav.heading')}</h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              to={`/topic/${category.id}`}
              className="block rounded-lg border-l-4 border-meridian-blue bg-surface p-4 hover:bg-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue"
            >
              <span className="font-medium text-ink">{category.label}</span>
              <span className="mt-1 block text-sm text-ink">{category.plainLabel}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default TopicNav
