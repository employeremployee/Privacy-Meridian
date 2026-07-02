// ISO 3166-1 numeric codes, matched against public/maps/world-110m.json's geo.id.
// Malta is absent from this topology's 110m resolution and cannot be mapped.
const EU_MEMBER_STATE_CODES = [
  '040', // Austria
  '056', // Belgium
  '100', // Bulgaria
  '191', // Croatia
  '196', // Cyprus
  '203', // Czechia
  '208', // Denmark
  '233', // Estonia
  '246', // Finland
  '250', // France
  '276', // Germany
  '300', // Greece
  '348', // Hungary
  '372', // Ireland
  '380', // Italy
  '428', // Latvia
  '440', // Lithuania
  '442', // Luxembourg
  '528', // Netherlands
  '616', // Poland
  '620', // Portugal
  '642', // Romania
  '703', // Slovakia
  '705', // Slovenia
  '724', // Spain
  '752', // Sweden
]

export const JURISDICTION_REGION_CODES = {
  gdpr: EU_MEMBER_STATE_CODES,
  ccpa: ['840'], // United States of America
  lgpd: ['076'], // Brazil
  pipl: ['156'], // China
}

export function getJurisdictionForCountryCode(code) {
  for (const [jurisdictionId, codes] of Object.entries(JURISDICTION_REGION_CODES)) {
    if (codes.includes(code)) return jurisdictionId
  }
  return null
}

export function isEuMemberState(code) {
  return EU_MEMBER_STATE_CODES.includes(code)
}
