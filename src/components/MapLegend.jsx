import { useTranslation } from 'react-i18next'

const ITEMS = [
  { key: 'enacted', color: '#0F3460' },
  { key: 'none', color: '#D4D0CC' },
]

function MapLegend() {
  const { t } = useTranslation()

  return (
    <div>
      <h2 className="sr-only">{t('legend.heading')}</h2>
      <ul className="flex flex-wrap gap-x-4 gap-y-2">
        {ITEMS.map(({ key, color }) => (
          <li key={key} className="flex items-center gap-2 text-xs text-ink">
            <span
              aria-hidden="true"
              className="inline-block h-3 w-3 rounded-sm border border-rule"
              style={{ backgroundColor: color }}
            />
            {t(`legend.${key}`)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MapLegend
