import SurfaceLabel from './SurfaceLabel.jsx'
import ProfessionalLayer from './ProfessionalLayer.jsx'
import CrossReference from './CrossReference.jsx'
import Timeline from './Timeline.jsx'
import SourceLinks from './SourceLinks.jsx'

function ContentBlock({ article, jurisdictionId, jurisdictionData, glossaryData }) {
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
    </article>
  )
}

export default ContentBlock
