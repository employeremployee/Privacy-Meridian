import { useTranslation } from 'react-i18next'
import { STATE } from './comparisonStates.js'

function ComparisonCell({ cell }) {
  const { t } = useTranslation()

  if (!cell) {
    return <span className="text-sm text-ink">{t('comparison.notApplicable')}</span>
  }

  // Value cell: a short text value plus an optional note.
  if (cell.value !== undefined) {
    return (
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium text-ink">{cell.value}</span>
        {cell.note && <span className="text-xs text-ink">{cell.note}</span>}
      </div>
    )
  }

  // Three-state cell.
  const config = STATE[cell.state] || STATE.no
  const label = t(config.labelKey)

  return (
    <div className="flex flex-col gap-1">
      <span className="flex items-center gap-1.5 text-sm font-medium text-ink">
        <span aria-hidden="true" style={{ color: config.color }} className="text-base leading-none">
          {config.icon}
        </span>
        <span>{label}</span>
      </span>
      {cell.note && <span className="text-xs text-ink">{cell.note}</span>}
    </div>
  )
}

export default ComparisonCell
