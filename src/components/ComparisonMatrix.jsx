import { useTranslation } from 'react-i18next'
import ComparisonCell from './ComparisonCell.jsx'
import { STATE } from './comparisonStates.js'
import JurisdictionBadge from './JurisdictionBadge.jsx'

function ComparisonMatrix({ data, selectedIds, jurisdictionsData }) {
  const { t } = useTranslation()

  if (!selectedIds || selectedIds.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-rule bg-surface p-6 text-center text-sm text-ink">
        {t('comparison.pickCountries')}
      </p>
    )
  }

  return (
    <div>
      <div className="overflow-x-auto rounded-lg border border-rule">
        <table className="w-full border-collapse">
          <caption className="sr-only">{data.topicLabel}</caption>
          <thead>
            <tr>
              <th
                scope="col"
                className="sticky left-0 z-10 bg-surface p-3 text-left text-sm font-medium text-ink"
              >
                {data.rowHeader || t('comparison.requirementColumn')}
              </th>
              {selectedIds.map((jid) => {
                const meta = jurisdictionsData[jid].jurisdiction
                return (
                  <th key={jid} scope="col" className="bg-surface p-3 text-left text-sm font-medium text-ink">
                    <span className="flex items-center gap-2">
                      <JurisdictionBadge badge={meta.badge} />
                      <span>{meta.name}</span>
                    </span>
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row) => (
              <tr key={row.id}>
                <th
                  scope="row"
                  className="sticky left-0 z-10 border-t border-rule bg-surface p-3 text-left text-sm font-medium text-ink"
                >
                  {row.label}
                </th>
                {selectedIds.map((jid) => (
                  <td key={jid} className="border-t border-rule bg-paper p-3 align-top">
                    <ComparisonCell cell={row.jurisdictions[jid]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Key for Yes / Partial / No tables. "Partial" means something different
          in each table, so the meanings come from that table's own data. */}
      {data.states && (
        <div className="mt-3">
          <h3 className="text-xs font-medium uppercase tracking-wide text-ink">
            {t('comparison.keyHeading')}
          </h3>
          <dl className="mt-1 flex flex-col gap-1 text-xs text-ink">
            {['yes', 'partial', 'no'].map((state) =>
              data.states[state] ? (
                <div key={state} className="flex items-start gap-1.5">
                  <dt className="flex shrink-0 items-center gap-1 font-medium">
                    <span aria-hidden="true" style={{ color: STATE[state].color }}>
                      {STATE[state].icon}
                    </span>
                    {t(STATE[state].labelKey)}:
                  </dt>
                  <dd>{data.states[state]}</dd>
                </div>
              ) : null,
            )}
          </dl>
        </div>
      )}
    </div>
  )
}

export default ComparisonMatrix
