import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
import {
  getCountryStatus,
  getDevelopingLabel,
  getJurisdictionForCountryCode,
} from '../data/countryStatus.js'

const GEO_URL = '/maps/world-110m.json'

// Map canvas size. translateExtent below is bound to this box so panning can
// never move the map out of view: at full zoom-out it stays fixed, and panning
// room only opens up once the user has zoomed in.
const MAP_WIDTH = 800
const MAP_HEIGHT = 400

// Status -> fill. Enacted = Meridian Blue (strong), Developing = Horizon (distinct), none = Rule (neutral).
const FILL = {
  enacted: '#0F3460',
  enactedHover: '#16213E',
  enactedSelected: '#16213E',
  developing: '#533483',
  developingHover: '#3E2762',
  none: '#D4D0CC',
}

const FOCUS_CLASS =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

function MapExplorer({ jurisdictionsData, mode = 'single', selectedIds = [], onSelectJurisdiction }) {
  const { t } = useTranslation()
  const [hoveredLabel, setHoveredLabel] = useState(null)

  function labelForGeo(geo) {
    const jurisdictionId = getJurisdictionForCountryCode(geo.id)
    if (jurisdictionId) return jurisdictionsData[jurisdictionId].jurisdiction.fullName
    const dev = getDevelopingLabel(geo.id)
    if (dev) return `${dev}, developing`
    return null
  }

  return (
    <div>
      <a
        href="#after-map"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:rounded-md focus:bg-meridian-blue focus:px-4 focus:py-2 focus:text-white"
      >
        {t('map.skipLink')}
      </a>

      <p aria-live="polite" className="mb-2 min-h-[1.5em] text-sm font-medium text-meridian-blue">
        {hoveredLabel ? t('map.currentlyHighlighting', { name: hoveredLabel }) : ' '}
      </p>

      <div className="overflow-hidden rounded-lg border border-rule bg-paper">
        <ComposableMap
          projection="geoMercator"
          width={MAP_WIDTH}
          height={MAP_HEIGHT}
          style={{ width: '100%', height: 'auto' }}
        >
          <ZoomableGroup
            center={[0, 20]}
            zoom={1}
            maxZoom={8}
            minZoom={1}
            translateExtent={[
              [0, 0],
              [MAP_WIDTH, MAP_HEIGHT],
            ]}
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const status = getCountryStatus(geo.id)
                  const jurisdictionId = getJurisdictionForCountryCode(geo.id)
                  const interactive = !!jurisdictionId
                  const label = labelForGeo(geo)
                  const isSelected = interactive && selectedIds.includes(jurisdictionId)

                  if (!interactive) {
                    const devFill = status === 'developing' ? FILL.developing : FILL.none
                    const devHover = status === 'developing' ? FILL.developingHover : FILL.none
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        tabIndex={status === 'developing' ? 0 : -1}
                        aria-hidden={status === 'developing' ? undefined : 'true'}
                        aria-label={status === 'developing' ? label : undefined}
                        role={status === 'developing' ? 'img' : undefined}
                        onMouseEnter={() => status === 'developing' && setHoveredLabel(label)}
                        onMouseLeave={() => setHoveredLabel(null)}
                        onFocus={() => status === 'developing' && setHoveredLabel(label)}
                        onBlur={() => setHoveredLabel(null)}
                        className={status === 'developing' ? FOCUS_CLASS : undefined}
                        style={{
                          default: { fill: devFill, stroke: '#F8F7F4', strokeWidth: 0.5, outline: 'none' },
                          hover: { fill: devHover, stroke: '#F8F7F4', strokeWidth: 0.5, outline: 'none' },
                          pressed: { fill: devHover, stroke: '#F8F7F4', strokeWidth: 0.5, outline: 'none' },
                        }}
                      />
                    )
                  }

                  const fill = isSelected ? FILL.enactedSelected : FILL.enacted
                  const ariaLabel = isSelected
                    ? t('map.selectedJurisdictionLabel', { name: label })
                    : t('map.viewJurisdictionLabel', { name: label })

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      tabIndex={0}
                      role="button"
                      aria-pressed={mode === 'multi' ? isSelected : undefined}
                      aria-label={ariaLabel}
                      className={FOCUS_CLASS}
                      onMouseEnter={() => setHoveredLabel(label)}
                      onMouseLeave={() => setHoveredLabel(null)}
                      onFocus={() => setHoveredLabel(label)}
                      onBlur={() => setHoveredLabel(null)}
                      onClick={() => onSelectJurisdiction(jurisdictionId, geo.properties.name)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault()
                          onSelectJurisdiction(jurisdictionId, geo.properties.name)
                        }
                      }}
                      style={{
                        default: {
                          fill,
                          stroke: isSelected ? '#F8F7F4' : '#FFFFFF',
                          strokeWidth: isSelected ? 1.5 : 0.75,
                          outline: 'none',
                          cursor: 'pointer',
                        },
                        hover: {
                          fill: FILL.enactedHover,
                          stroke: '#FFFFFF',
                          strokeWidth: 1,
                          outline: 'none',
                          cursor: 'pointer',
                        },
                        pressed: {
                          fill: FILL.enactedHover,
                          stroke: '#FFFFFF',
                          strokeWidth: 1,
                          outline: 'none',
                          cursor: 'pointer',
                        },
                      }}
                    />
                  )
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>

      <div id="after-map" tabIndex={-1} />
    </div>
  )
}

export default MapExplorer
