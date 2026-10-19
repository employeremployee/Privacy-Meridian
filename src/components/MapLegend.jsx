import { useTranslation } from 'react-i18next'
import { MAP_ONLY_LAWS, MAP_ONLY_PROVINCE_LAWS, MAP_ONLY_STATE_LAWS } from '../data/mapOnlyLaws.js'

const ITEMS = [
  { key: 'enacted', color: '#0F3460' },
  { key: 'mapOnly', color: '#647FA3' },
  { key: 'selected', color: '#5B9BD5' },
  { key: 'none', color: '#D4D0CC' },
]

// Laws in effect that the site does not cover in detail yet, grouped for the
// list under the map key.
const GROUPS = [
  { key: 'countries', entries: MAP_ONLY_LAWS },
  { key: 'usStates', entries: MAP_ONLY_STATE_LAWS },
  { key: 'caProvinces', entries: MAP_ONLY_PROVINCE_LAWS },
]

function MapLegend() {
  const { t } = useTranslation()
  const total = GROUPS.reduce((sum, group) => sum + group.entries.length, 0)

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
      <details className="mt-3 text-xs text-ink">
        <summary className="cursor-pointer font-medium underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue">
          {t('legend.mapOnlyListToggle', { count: total })}
        </summary>
        <div className="mt-2 flex flex-col gap-4">
          {GROUPS.map(({ key, entries }) => (
            <section key={key}>
              <h3 className="mb-1 font-semibold">
                {t(`legend.mapOnlyGroups.${key}`, { count: entries.length })}
              </h3>
              {/* CSS columns fill top to bottom, so the A to Z order runs down each column. */}
              <ul className="gap-x-6 sm:columns-2 lg:columns-3">
                {[...entries]
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((entry) => (
                    <li key={entry.name} className="mb-1 break-inside-avoid">
                      <span className="font-medium">{entry.name}</span>: {entry.law}
                    </li>
                  ))}
              </ul>
            </section>
          ))}
        </div>
      </details>
    </div>
  )
}

export default MapLegend
