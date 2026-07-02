import { useTranslation } from 'react-i18next'

function DifferenceBadge({ type }) {
  const { t } = useTranslation()

  if (!type) return null

  const isStructural = type === 'structural-difference'
  const label = isStructural
    ? t('comparisonGrid.structuralDifference')
    : t('comparisonGrid.additionalRequirement')

  return (
    <span
      className={[
        'inline-block rounded border px-2 py-0.5 text-xs font-medium',
        isStructural ? 'border-horizon text-horizon' : 'border-meridian-blue text-meridian-blue',
      ].join(' ')}
    >
      {label}
    </span>
  )
}

export default DifferenceBadge
