import { useTranslation } from 'react-i18next'
import ComparisonCell from './ComparisonCell.jsx'
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
      {data.draft && (
        <p className="mb-3 inline-block rounded border border-horizon px-2 py-1 text-xs font-medium text-horizon">
          {t('comparison.draftNotice')}
        </p>
      )}
      <div className="overflow-x-auto rounded-lg border border-rule">
        <table className="w-full border-collapse">
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
    </div>
  )
}

export default ComparisonMatrix
