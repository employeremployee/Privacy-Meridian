import { useTranslation } from 'react-i18next'

// Three-state indicator. Icon + text label (never color alone) + note.
const STATE = {
  yes: { icon: '✓', color: '#1B7A4B', labelKey: 'comparison.yes' },
  partial: { icon: '◑', color: '#B45309', labelKey: 'comparison.partial' },
  no: { icon: '–', color: '#1A1A2E', labelKey: 'comparison.no' },
}

function ComparisonCell({ cell }) {
  const { t } = useTranslation()
  const config = STATE[cell?.state] || STATE.no
  const label = t(config.labelKey)

  return (
    <div className="flex flex-col gap-1">
      <span className="flex items-center gap-1.5 text-sm font-medium text-ink">
        <span aria-hidden="true" style={{ color: config.color }} className="text-base leading-none">
          {config.icon}
        </span>
        <span>{label}</span>
      </span>
      {cell?.note && <span className="text-xs text-ink">{cell.note}</span>}
    </div>
  )
}

export default ComparisonCell
