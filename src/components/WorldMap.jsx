import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { getJurisdictionForCountryCode } from '../data/jurisdictionRegions.js'

// Honor Vite's base path so the topology resolves under a Pages subpath too.
const GEO_URL = `${import.meta.env.BASE_URL}maps/world-110m.json`

const INTERACTIVE_FOCUS_CLASS =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

function WorldMap({ jurisdictionsData }) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [hoveredName, setHoveredName] = useState(null)

  function handleActivate(jurisdictionId, countryName) {
    const state = jurisdictionId === 'gdpr' ? { fromCountry: countryName } : undefined
    navigate(`/regulation/${jurisdictionId}`, { state })
  }

  return (
    <div>
      <a
        href="#after-map"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:rounded-md focus:bg-meridian-blue focus:px-4 focus:py-2 focus:text-white"
      >
        {t('map.skipLink')}
      </a>

      <p className="mb-2 text-sm text-ink">{t('map.instructions')}</p>
      <p aria-live="polite" className="mb-2 min-h-[1.5em] text-sm font-medium text-meridian-blue">
        {hoveredName ? t('map.currentlyHighlighting', { name: hoveredName }) : ' '}
      </p>

      <ComposableMap
        projection="geoMercator"
        width={800}
        height={420}
        style={{ width: '100%', height: 'auto' }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const jurisdictionId = getJurisdictionForCountryCode(geo.id)

              if (!jurisdictionId) {
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{
                      default: { fill: '#D4D0CC', stroke: '#F8F7F4', strokeWidth: 0.5, outline: 'none' },
                      hover: { fill: '#D4D0CC', stroke: '#F8F7F4', strokeWidth: 0.5, outline: 'none' },
                      pressed: { fill: '#D4D0CC', stroke: '#F8F7F4', strokeWidth: 0.5, outline: 'none' },
                    }}
                  />
                )
              }

              const jurisdictionMeta = jurisdictionsData[jurisdictionId].jurisdiction
              const countryName = geo.properties.name

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  tabIndex={0}
                  role="button"
                  aria-label={t('map.viewJurisdictionLabel', { name: jurisdictionMeta.fullName })}
                  className={INTERACTIVE_FOCUS_CLASS}
                  onMouseEnter={() => setHoveredName(jurisdictionMeta.fullName)}
                  onMouseLeave={() => setHoveredName(null)}
                  onFocus={() => setHoveredName(jurisdictionMeta.fullName)}
                  onBlur={() => setHoveredName(null)}
                  onClick={() => handleActivate(jurisdictionId, countryName)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault()
                      handleActivate(jurisdictionId, countryName)
                    }
                  }}
                  style={{
                    default: {
                      fill: '#0F3460',
                      stroke: '#FFFFFF',
                      strokeWidth: 0.75,
                      outline: 'none',
                      cursor: 'pointer',
                    },
                    hover: {
                      fill: '#16213E',
                      stroke: '#FFFFFF',
                      strokeWidth: 0.75,
                      outline: 'none',
                      cursor: 'pointer',
                    },
                    pressed: {
                      fill: '#16213E',
                      stroke: '#FFFFFF',
                      strokeWidth: 0.75,
                      outline: 'none',
                      cursor: 'pointer',
                    },
                  }}
                />
              )
            })
          }
        </Geographies>
      </ComposableMap>

      <div id="after-map" tabIndex={-1} />
    </div>
  )
}

export default WorldMap
