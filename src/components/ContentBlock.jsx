import { useTranslation } from 'react-i18next'
import SurfaceLabel from './SurfaceLabel.jsx'
import ProfessionalLayer from './ProfessionalLayer.jsx'
import CrossReference from './CrossReference.jsx'
import Timeline from './Timeline.jsx'
import SourceLinks from './SourceLinks.jsx'
import AssessTrigger from './AssessTrigger.jsx'
import GapRemediation from './GapRemediation.jsx'

// `showOrganizations` shows the "Help for Organizations" layer.
// `onNavigateToArticle(articleId, categoryId)` lets Related Articles move the
// reader within the current law instead of leaving the page.
function ContentBlock({ article, jurisdictionData, glossaryData, showOrganizations, onNavigateToArticle }) {
  const { t } = useTranslation()

  return (
    <article
      id={article.id}
      tabIndex={-1}
      className="scroll-mt-4 rounded-lg border-l-4 border-meridian-blue bg-surface p-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue"
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
        jurisdictionData={jurisdictionData}
        onNavigate={onNavigateToArticle}
      />
      {article.responseTimeline && <Timeline timeline={article.responseTimeline} />}
      <SourceLinks links={article.sourceLinks} />
      {showOrganizations && (
        <>
          <AssessTrigger trigger={article.assessTrigger} />
          <GapRemediation gapRemediation={article.gapRemediation} />
        </>
      )}
    </article>
  )
}

export default ContentBlock
