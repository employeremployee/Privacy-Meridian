// Country legal-status for the v2 map. One axis drives map color + interactivity.
//
// Tiers:
//   'enacted' -> comprehensive law in force. Strong color, drillable, full content.
//   (absent)  -> no comprehensive law in force yet. Neutral grey, non-interactive.
//
// A law that is passed but not yet in force is intentionally NOT shown as a
// separate tier: only laws that are 100% live are colored. Everything else is grey.
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

export function getJurisdictionForCountryCode(code) {
  for (const [jurisdictionId, codes] of Object.entries(V2_REGION_CODES)) {
    if (codes.includes(code)) return jurisdictionId
  }
  return null
}

export function getCountryStatus(code) {
  return getJurisdictionForCountryCode(code) ? 'enacted' : null
}

export { V2_REGION_CODES as JURISDICTION_REGION_CODES }
