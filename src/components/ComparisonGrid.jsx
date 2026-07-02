import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import DifferenceToggle from './DifferenceToggle.jsx'
import GridRow from './GridRow.jsx'
import JurisdictionBadge from './JurisdictionBadge.jsx'
import Modal from './Modal.jsx'
import ContentBlock from './ContentBlock.jsx'
import { findArticleLocation } from '../utils/contentLookup.js'

const JURISDICTION_ORDER = ['gdpr', 'ccpa', 'lgpd', 'pipl']

function ComparisonGrid({ rows, jurisdictionsData, glossaryData }) {
  const { t } = useTranslation()
  const [showDifferencesOnly, setShowDifferencesOnly] = useState(false)
  const [activeCell, setActiveCell] = useState(null)

  const filteredRows = showDifferencesOnly
    ? rows.filter((row) => JURISDICTION_ORDER.some((jid) => row.jurisdictions[jid]?.differenceType))
    : rows

  const activeJurisdictionData = activeCell ? jurisdictionsData[activeCell.jurisdictionId] : null
  const activeLocation =
    activeCell && activeJurisdictionData
      ? findArticleLocation(activeJurisdictionData, activeCell.articleId)
      : null

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <DifferenceToggle checked={showDifferencesOnly} onChange={setShowDifferencesOnly} />
        <span className="text-sm text-ink" aria-live="polite">
          {t('comparisonGrid.showingCount', { shown: filteredRows.length, total: rows.length })}
        </span>
      </div>

      <div className="max-h-[600px] overflow-auto rounded-lg border border-rule">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th
                scope="col"
                className="sticky left-0 top-0 z-20 bg-surface p-3 text-left text-sm font-medium text-ink"
              >
                {t('comparisonGrid.requirementColumn')}
              </th>
              {JURISDICTION_ORDER.map((jid) => {
                const meta = jurisdictionsData[jid].jurisdiction
                return (
                  <th
                    key={jid}
                    scope="col"
                    className="sticky top-0 z-10 bg-surface p-3 text-left text-sm font-medium text-ink"
                  >
                    <div className="flex items-center gap-2">
                      <span>{meta.name}</span>
                      <JurisdictionBadge badge={meta.badge} />
                    </div>
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row) => (
              <GridRow
                key={row.id}
                row={row}
                jurisdictionOrder={JURISDICTION_ORDER}
                onCellClick={(jurisdictionId, articleId) => setActiveCell({ jurisdictionId, articleId })}
              />
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={!!activeLocation}
        onClose={() => setActiveCell(null)}
        label={activeLocation ? activeLocation.article.surfaceLabel : ''}
      >
        {activeLocation && (
          <ContentBlock
            article={activeLocation.article}
            jurisdictionId={activeCell.jurisdictionId}
            jurisdictionData={activeJurisdictionData}
            glossaryData={glossaryData}
          />
        )}
      </Modal>
    </div>
  )
}

export default ComparisonGrid
