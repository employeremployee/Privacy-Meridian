// Country legal-status tiers for the v2 map. One axis drives map color + interactivity + content depth.
//
// Tiers:
//   'enacted'    -> comprehensive law in force. Strong color, drillable, full content.
//   'developing' -> law passed-but-not-in-force OR actively developing. Distinct color, identified only.
//   (absent)     -> no comprehensive law. Neutral, non-interactive.
//
// ISO 3166-1 numeric codes, matched against public/maps/world-110m.json's geo.id.
// This file is the v2 map's own mapping. The legacy jurisdictionRegions.js is left
// untouched so the old /map route (which only knows the original four laws) keeps working.
//
// NOTE (draft): all jurisdiction content behind these mappings is DRAFT pending review.
// Liechtenstein (438) applies EEA GDPR but is absent from the 110m topology, like Malta.

import { JURISDICTION_REGION_CODES as LEGACY_CODES } from './jurisdictionRegions.js'

// EU member states (26 present in topology) plus EEA members Norway and Iceland,
// which apply the GDPR through the EEA Agreement.
const GDPR_CODES = [...LEGACY_CODES.gdpr, '578', '352']

const V2_REGION_CODES = {
  gdpr: GDPR_CODES,
  ccpa: ['840'], // United States
  lgpd: ['076'], // Brazil
  pipl: ['156'], // China
  ukgdpr: ['826'], // United Kingdom
  fadp: ['756'], // Switzerland
  'pdpa-ar': ['032'], // Argentina
  'lpdp-uy': ['858'], // Uruguay
  'pipa-kr': ['410'], // South Korea
  appi: ['392'], // Japan
  nzpa: ['554'], // New Zealand
  popia: ['710'], // South Africa
  kdpa: ['404'], // Kenya
  dpdp: ['356'], // India
}

// Illustrative only: placeholder classifications to show the 'developing' tier color.
// Unverified; replace with a reviewed country-status dataset before launch.
const DEVELOPING_CODES = {
  360: 'Indonesia (PDP Law)',
  566: 'Nigeria (NDPA)',
}

export function getJurisdictionForCountryCode(code) {
  for (const [jurisdictionId, codes] of Object.entries(V2_REGION_CODES)) {
    if (codes.includes(code)) return jurisdictionId
  }
  return null
}

export function getCountryStatus(code) {
  if (getJurisdictionForCountryCode(code)) return 'enacted'
  if (DEVELOPING_CODES[code]) return 'developing'
  return null
}

export function getDevelopingLabel(code) {
  return DEVELOPING_CODES[code] || null
}

export { V2_REGION_CODES as JURISDICTION_REGION_CODES }
