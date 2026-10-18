import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
import { getJurisdictionForCountryCode } from '../data/countryStatus.js'
import { getMapOnlyLaw } from '../data/mapOnlyLaws.js'

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
  // Law in force, not covered in detail (approved 2026-10-18). A greyed navy
  // chosen for at least 3:1 against covered blue and the page background.
  mapOnly: '#647FA3',
  none: '#D4D0CC',
}

// Light-blue border for a selected country (approved 2026-10-03). Softer and
// thinner than the old dark Meridian Blue outline, which read as too heavy.
const SELECTED_BORDER = '#9DC3E6'

// Keyboard focus ring for a country, drawn as two overlaid outlines: a wide Ink
// stroke under a narrow Paper stroke. One of the two always contrasts with what
// sits beside it (the light sea, a dark country, or a selected country), which
// CSS outlines on SVG paths could not do because the map library forces
// outline: none on every state.
const FOCUS_RING = { outer: '#1A1A2E', inner: '#F8F7F4' }

// US states and Canadian provinces (Natural Earth 50m admin-1, public domain,
// simplified). Ids are ISO 3166-2 codes such as "US-CA" and "CA-QC".
const SUBNATIONAL_URL = `${import.meta.env.BASE_URL}maps/us-canada-50m.json`
// Countries drawn by state or province instead of as one shape.
const SUBNATIONAL_COUNTRIES = new Set(['840', '124'])

// Which covered law a state or province opens. California has the CCPA. All
// provinces open the federal law (PIPEDA) until provincial laws are covered.
function jurisdictionForRegion(geo) {
  if (geo.id === 'US-CA') return 'ccpa'
  if (geo.properties.country === '124') return 'pipeda'
  return null
}

// Ignore touch gestures for pan/zoom so a finger drag scrolls the page instead of
// getting trapped inside the map (iOS). Desktop mouse drag and wheel still zoom.
// Paired with touch-action: pan-y on the container below.
function filterZoomEvent(event) {
  return !String(event.type).startsWith('touch')
}

function MapExplorer({ jurisdictionsData, selectedIds = [], onSelectJurisdiction }) {
  const { t } = useTranslation()
  const [hoveredLabel, setHoveredLabel] = useState(null)
  // The country path that has keyboard focus, so the ring can be drawn on top.
  const [focusedGeo, setFocusedGeo] = useState(null)

  // Draws one country, state or province. jurisdictionId is the covered law it
  // opens, or null. regionName is the place name announced first in labels.
  function renderShape(geo, jurisdictionId, regionName) {
    // Not covered. Places with a law in effect that the site does not cover yet
    // get the map-only tint and name their law on hover. The rest (no law in
    // effect) are neutral grey. Neither is a tab stop: the list under the legend
    // gives the same information.
    if (!jurisdictionId) {
      const mapOnly = getMapOnlyLaw(geo.id)
      const fill = mapOnly ? FILL.mapOnly : FILL.none
      const stroke = mapOnly ? '#FFFFFF' : '#F8F7F4'
      const flat = { fill, stroke, strokeWidth: 0.5, outline: 'none' }
      const mapOnlyLabel = mapOnly ? t('map.mapOnlyLabel', { country: mapOnly.name, law: mapOnly.law }) : null
      return (
        <Geography
          key={geo.rsmKey}
          geography={geo}
          tabIndex={-1}
          aria-hidden="true"
          onMouseEnter={mapOnly ? () => setHoveredLabel(mapOnlyLabel) : undefined}
          onMouseLeave={mapOnly ? () => setHoveredLabel(null) : undefined}
          style={{ default: flat, hover: flat, pressed: flat }}
        />
      )
    }

    const label = jurisdictionsData[jurisdictionId].jurisdiction.fullName
    const isSelected = selectedIds.includes(jurisdictionId)
    // Name the place first, so countries and provinces sharing one law do not
    // all announce the same name.
    const ariaLabel = isSelected
      ? t('map.selectedCountryLabel', { country: regionName, name: label })
      : t('map.viewCountryLabel', { country: regionName, name: label })

    // Selected places get a light-azure fill with a soft light-blue border, and
    // stay light on hover instead of flipping to navy, so the picked state reads
    // at a glance. Borders are kept thin so they do not overwhelm the map.
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
        aria-pressed={isSelected}
        aria-label={ariaLabel}
        onMouseEnter={() => setHoveredLabel(label)}
        onMouseLeave={() => setHoveredLabel(null)}
        onFocus={(event) => {
          setHoveredLabel(label)
          // Ring for keyboard focus only, not for mouse clicks.
          if (event.currentTarget.matches(':focus-visible')) setFocusedGeo(geo)
        }}
        onBlur={() => {
          setHoveredLabel(null)
          setFocusedGeo(null)
        }}
        onClick={() => onSelectJurisdiction(jurisdictionId, regionName)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            onSelectJurisdiction(jurisdictionId, regionName)
          }
        }}
        style={geoStyle}
      />
    )
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

      <div className="mx-auto max-w-[1040px] touch-pan-y overflow-hidden rounded-lg border border-rule bg-paper">
        <ComposableMap
          projection="geoMercator"
          // Scale so the full 360 degrees of longitude fit the 800px frame.
          // The library default (160) cut off New Zealand and the far east.
          projectionConfig={{ scale: MAP_WIDTH / (2 * Math.PI) }}
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
            {/* Countries. The US and Canada are skipped here and drawn below as
                states and provinces. */}
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies
                  .filter((geo) => !SUBNATIONAL_COUNTRIES.has(geo.id))
                  .map((geo) => renderShape(geo, getJurisdictionForCountryCode(geo.id), geo.properties.name))
              }
            </Geographies>
            {/* US states and Canadian provinces. California opens the CCPA page.
                Every province opens the federal law (PIPEDA) for now. */}
            <Geographies geography={SUBNATIONAL_URL}>
              {({ geographies }) =>
                geographies.map((geo) => renderShape(geo, jurisdictionForRegion(geo), geo.properties.name))
              }
            </Geographies>
            {focusedGeo && (
              <g aria-hidden="true" style={{ pointerEvents: 'none' }}>
                {[
                  { color: FOCUS_RING.outer, width: 4 },
                  { color: FOCUS_RING.inner, width: 1.5 },
                ].map((ring) => (
                  <path
                    key={ring.color}
                    d={focusedGeo.svgPath}
                    fill="none"
                    stroke={ring.color}
                    strokeWidth={ring.width}
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
              </g>
            )}
          </ZoomableGroup>
        </ComposableMap>
      </div>

      <div id="after-map" tabIndex={-1} />
    </div>
  )
}

export default MapExplorer
