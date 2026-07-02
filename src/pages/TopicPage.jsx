import { useParams } from 'react-router-dom'
import gdprData from '../data/jurisdictions/gdpr.json'
import ccpaData from '../data/jurisdictions/ccpa.json'
import lgpdData from '../data/jurisdictions/lgpd.json'
import piplData from '../data/jurisdictions/pipl.json'
import glossaryData from '../data/glossary.json'
import gridData from '../data/comparison/grid.json'
import categoriesData from '../data/framework/categories.json'
import ComparisonGrid from '../components/ComparisonGrid.jsx'

const JURISDICTIONS_DATA = {
  gdpr: gdprData,
  ccpa: ccpaData,
  lgpd: lgpdData,
  pipl: piplData,
}

function TopicPage() {
  const { categoryId } = useParams()

  if (!categoryId) {
    return <main></main>
  }

  const rows = gridData.rows.filter((row) => row.categoryId === categoryId)

  if (rows.length === 0) {
    return <main></main>
  }

  const categoryMeta = categoriesData.categories.find((c) => c.id === categoryId)

  return (
    <main className="mx-auto max-w-[1200px] px-4 py-8">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-ink">{categoryMeta ? categoryMeta.label : categoryId}</h2>
        {categoryMeta && <p className="mt-1 text-sm text-ink">{categoryMeta.plainLabel}</p>}
      </div>
      <ComparisonGrid rows={rows} jurisdictionsData={JURISDICTIONS_DATA} glossaryData={glossaryData} />
    </main>
  )
}

export default TopicPage
