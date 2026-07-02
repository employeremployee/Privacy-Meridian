import { useParams } from 'react-router-dom'
import gdprData from '../data/jurisdictions/gdpr.json'
import ccpaData from '../data/jurisdictions/ccpa.json'
import lgpdData from '../data/jurisdictions/lgpd.json'
import piplData from '../data/jurisdictions/pipl.json'
import glossaryData from '../data/glossary.json'
import gridData from '../data/comparison/grid.json'
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

  return (
    <main className="mx-auto max-w-[1200px] px-4 py-8">
      <ComparisonGrid rows={rows} jurisdictionsData={JURISDICTIONS_DATA} glossaryData={glossaryData} />
    </main>
  )
}

export default TopicPage
