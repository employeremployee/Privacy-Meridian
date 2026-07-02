import { useMode } from '../context/ModeContext.jsx'
import SurfaceLabel from './SurfaceLabel.jsx'
import ProfessionalLayer from './ProfessionalLayer.jsx'
import CrossReference from './CrossReference.jsx'
import Timeline from './Timeline.jsx'
import SourceLinks from './SourceLinks.jsx'
import AssessTrigger from './AssessTrigger.jsx'
import GapRemediation from './GapRemediation.jsx'

function ContentBlock({ article, jurisdictionId, jurisdictionData, glossaryData }) {
  const { mode } = useMode()

  return (
    <article
      id={article.id}
      className="rounded-lg border-l-4 border-meridian-blue bg-surface p-6"
    >
      <SurfaceLabel
        articleRef={article.articleRef}
        label={article.surfaceLabel}
        summary={article.plainSummary}
      />
      <ProfessionalLayer
        text={article.professionalLayer}
        tooltipTerms={article.tooltipTerms}
        glossaryData={glossaryData}
      />
      <CrossReference
        references={article.crossReferences}
        jurisdictionId={jurisdictionId}
        jurisdictionData={jurisdictionData}
      />
      {article.responseTimeline && <Timeline timeline={article.responseTimeline} />}
      <SourceLinks links={article.sourceLinks} />
      {mode === 'assess' && (
        <>
          <AssessTrigger trigger={article.assessTrigger} />
          <GapRemediation gapRemediation={article.gapRemediation} />
        </>
      )}
    </article>
  )
}

export default ContentBlock
