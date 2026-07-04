// Country legal-status tiers for the map. One axis drives map color + interactivity + content depth.
//
// Tiers:
//   'enacted'    -> comprehensive law in force. Strong color, drillable, full content.
//   'developing' -> law passed-but-not-in-force OR actively developing. Distinct color, identified only.
//   (absent)     -> no comprehensive law. Neutral, non-interactive.
//
// ISO 3166-1 numeric codes, matched against public/maps/world-110m.json's geo.id.
//
// NOTE (prototype): the 'enacted' set below reuses the four jurisdictions we have deep content for.
// The 'developing' set is ILLUSTRATIVE and UNVERIFIED. It exists only to demonstrate the three-tier
// color treatment visually. Do not treat these classifications as authoritative; they need review and
// a proper country-status dataset before this ships.

import { JURISDICTION_REGION_CODES, getJurisdictionForCountryCode } from './jurisdictionRegions.js'

// Illustrative only: placeholder classifications to show the 'developing' tier color.
const DEVELOPING_CODES = {
  356: 'India (DPDP Act)',
  360: 'Indonesia (PDP Law)',
  566: 'Nigeria (NDPA)',
}

export function getCountryStatus(code) {
  if (getJurisdictionForCountryCode(code)) return 'enacted'
  if (DEVELOPING_CODES[code]) return 'developing'
  return null
}

export function getDevelopingLabel(code) {
  return DEVELOPING_CODES[code] || null
}

export { JURISDICTION_REGION_CODES, getJurisdictionForCountryCode }
