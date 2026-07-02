import { useTranslation } from 'react-i18next'

function DifferenceToggle({ checked, onChange }) {
  const { t } = useTranslation()

  return (
    <label className="inline-flex items-center gap-2 text-sm text-ink">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-rule text-meridian-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue"
      />
      {t('comparisonGrid.showDifferencesOnly')}
    </label>
  )
}

export default DifferenceToggle
