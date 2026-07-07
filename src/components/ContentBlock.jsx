import { useTranslation } from 'react-i18next'
import { useMode } from '../context/ModeContext.jsx'
import SurfaceLabel from './SurfaceLabel.jsx'
import ProfessionalLayer from './ProfessionalLayer.jsx'
import CrossReference from './CrossReference.jsx'
import Timeline from './Timeline.jsx'
import SourceLinks from './SourceLinks.jsx'
import AssessTrigger from './AssessTrigger.jsx'
import GapRemediation from './GapRemediation.jsx'

// `showOrganizations` (v2): explicit control of the org layer per jurisdiction. When undefined,
// falls back to the legacy global mode context so the old routes keep working.
function ContentBlock({ article, jurisdictionId, jurisdictionData, glossaryData, showOrganizations }) {
  const { t } = useTranslation()
  const modeCtx = useMode()
  const resolvedShowOrg =
    showOrganizations !== undefined ? showOrganizations : modeCtx?.mode === 'assess'

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
      {article.personalImpact && (
        <div className="mt-4 border-l-4 border-meridian-blue bg-paper p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-meridian-blue">
            {t('contentBlock.personalImpact')}
          </p>
          <p className="mt-1 text-sm text-ink">{article.personalImpact}</p>
        </div>
      )}
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
      {resolvedShowOrg && (
        <>
          <AssessTrigger trigger={article.assessTrigger} />
          <GapRemediation gapRemediation={article.gapRemediation} />
        </>
      )}
    </article>
  )
}

export default ContentBlock
