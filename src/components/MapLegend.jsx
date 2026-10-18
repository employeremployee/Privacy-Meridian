import { useTranslation } from 'react-i18next'
import { MAP_ONLY_LAWS } from '../data/mapOnlyLaws.js'

const ITEMS = [
  { key: 'enacted', color: '#0F3460' },
  { key: 'mapOnly', color: '#647FA3' },
  { key: 'selected', color: '#5B9BD5' },
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
      <p className="mt-2 text-xs text-ink">{t('legend.usNote')}</p>
      <p className="mt-1 text-xs text-ink">{t('legend.canadaNote')}</p>
      {MAP_ONLY_LAWS.length > 0 && (
        <details className="mt-3 text-xs text-ink">
          <summary className="cursor-pointer font-medium underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue">
            {t('legend.mapOnlyListToggle', { count: MAP_ONLY_LAWS.length })}
          </summary>
          <ul className="mt-2 grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
            {[...MAP_ONLY_LAWS]
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((entry) => (
                <li key={entry.name}>
                  <span className="font-medium">{entry.name}</span>: {entry.law}
                </li>
              ))}
          </ul>
        </details>
      )}
    </div>
  )
}

export default MapLegend
