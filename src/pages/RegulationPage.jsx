import { useParams } from 'react-router-dom'
import gdprData from '../data/jurisdictions/gdpr.json'
import ccpaData from '../data/jurisdictions/ccpa.json'
import lgpdData from '../data/jurisdictions/lgpd.json'
import piplData from '../data/jurisdictions/pipl.json'
import glossaryData from '../data/glossary.json'
import ContentBlock from '../components/ContentBlock.jsx'
import { getCategoryArticles } from '../utils/contentLookup.js'

const JURISDICTIONS = {
  gdpr: gdprData,
  ccpa: ccpaData,
  lgpd: lgpdData,
  pipl: piplData,
}

function RegulationPage() {
  const { jurisdictionId, categoryId } = useParams()
  const jurisdictionData = JURISDICTIONS[jurisdictionId]

  if (!jurisdictionData || !categoryId) {
    return <main></main>
  }

  const articles = getCategoryArticles(jurisdictionData, categoryId)

  return (
    <main className="mx-auto flex max-w-[760px] flex-col gap-6 px-4 py-8">
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
