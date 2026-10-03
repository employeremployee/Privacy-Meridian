import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
import { getJurisdictionForCountryCode } from '../data/countryStatus.js'

// Honor Vite's base path so the topology resolves under a Pages subpath too.
const GEO_URL = `${import.meta.env.BASE_URL}maps/world-110m.json`

// Map canvas size. translateExtent below is bound to this box so panning can
// never move the map out of view: at full zoom-out it stays fixed, and panning
// room only opens up once the user has zoomed in.
const MAP_WIDTH = 800
const MAP_HEIGHT = 400

// Status -> fill. Enacted = Meridian Blue (strong); everything else is neutral
// grey. Selected = light azure with a soft light-blue border so a picked country
// reads clearly against the dark unselected blue. Laws not yet in force are grey.
const FILL = {
  enacted: '#0F3460',
  enactedHover: '#16213E',
  selected: '#5B9BD5',
  selectedHover: '#4A8BC7',
  none: '#D4D0CC',
}

// Light-blue border for a selected country (approved 2026-10-03). Softer and
// thinner than the old dark Meridian Blue outline, which read as too heavy.
const SELECTED_BORDER = '#9DC3E6'

const FOCUS_CLASS =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

// Ignore touch gestures for pan/zoom so a finger drag scrolls the page instead of
// getting trapped inside the map (iOS). Desktop mouse drag and wheel still zoom.
// Paired with touch-action: pan-y on the container below.
function filterZoomEvent(event) {
  return !String(event.type).startsWith('touch')
}

function MapExplorer({ jurisdictionsData, mode = 'single', selectedIds = [], onSelectJurisdiction }) {
  const { t } = useTranslation()
  const [hoveredLabel, setHoveredLabel] = useState(null)

  function labelForGeo(geo) {
    const jurisdictionId = getJurisdictionForCountryCode(geo.id)
    if (jurisdictionId) return jurisdictionsData[jurisdictionId].jurisdiction.fullName
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

      <div className="mx-auto max-w-[900px] touch-pan-y overflow-hidden rounded-lg border border-rule bg-paper">
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
            filterZoomEvent={filterZoomEvent}
            translateExtent={[
              [0, 0],
              [MAP_WIDTH, MAP_HEIGHT],
            ]}
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const jurisdictionId = getJurisdictionForCountryCode(geo.id)
                  const interactive = !!jurisdictionId
                  const label = labelForGeo(geo)
                  const isSelected = interactive && selectedIds.includes(jurisdictionId)

                  // Non-interactive countries (no law in force) are neutral grey.
                  if (!interactive) {
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{
                          default: { fill: FILL.none, stroke: '#F8F7F4', strokeWidth: 0.5, outline: 'none' },
                          hover: { fill: FILL.none, stroke: '#F8F7F4', strokeWidth: 0.5, outline: 'none' },
                          pressed: { fill: FILL.none, stroke: '#F8F7F4', strokeWidth: 0.5, outline: 'none' },
                        }}
                      />
                    )
                  }

                  const ariaLabel = isSelected
                    ? t('map.selectedJurisdictionLabel', { name: label })
                    : t('map.viewJurisdictionLabel', { name: label })

                  // Selected countries get a light-azure fill with a soft
                  // light-blue border, and stay light on hover instead of
                  // flipping to navy, so the picked state reads at a glance.
                  // Borders are kept thin so they do not overwhelm the map.
                  const geoStyle = isSelected
                    ? {
                        default: { fill: FILL.selected, stroke: SELECTED_BORDER, strokeWidth: 0.75, outline: 'none', cursor: 'pointer' },
                        hover: { fill: FILL.selectedHover, stroke: SELECTED_BORDER, strokeWidth: 0.75, outline: 'none', cursor: 'pointer' },
                        pressed: { fill: FILL.selectedHover, stroke: SELECTED_BORDER, strokeWidth: 0.75, outline: 'none', cursor: 'pointer' },
                      }
                    : {
                        default: { fill: FILL.enacted, stroke: '#FFFFFF', strokeWidth: 0.5, outline: 'none', cursor: 'pointer' },
                        hover: { fill: FILL.enactedHover, stroke: '#FFFFFF', strokeWidth: 0.75, outline: 'none', cursor: 'pointer' },
                        pressed: { fill: FILL.enactedHover, stroke: '#FFFFFF', strokeWidth: 0.75, outline: 'none', cursor: 'pointer' },
                      }

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
                      style={geoStyle}
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
