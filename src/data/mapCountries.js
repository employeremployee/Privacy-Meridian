// Country picker options for the map dropdowns. The map selects a law, not a
// country, so several countries map to one jurisdiction. GDPR covers the whole
// EEA, so those countries are grouped under one visible heading to make the
// merge obvious. Every other law maps to a single country.
//
// Names live here as data (not in a component), consistent with how jurisdiction
// JSON already holds fullName. English only in v1.

const GDPR_GROUP = 'European Union (GDPR)'

// EEA countries that apply the GDPR, matching the codes in countryStatus.js.
const GDPR_COUNTRIES = [
  'Austria',
  'Belgium',
  'Bulgaria',
  'Croatia',
  'Cyprus',
  'Czechia',
  'Denmark',
  'Estonia',
  'Finland',
  'France',
  'Germany',
  'Greece',
  'Hungary',
  'Iceland',
  'Ireland',
  'Italy',
  'Latvia',
  'Lithuania',
  'Luxembourg',
  'Netherlands',
  'Norway',
  'Poland',
  'Portugal',
  'Romania',
  'Slovakia',
  'Slovenia',
  'Spain',
  'Sweden',
]

// One representative country per single-country law.
const STANDALONE = [
  { name: 'Argentina', jurisdictionId: 'pdpa-ar' },
  { name: 'Brazil', jurisdictionId: 'lgpd' },
  { name: 'China', jurisdictionId: 'pipl' },
  { name: 'India', jurisdictionId: 'dpdp' },
  { name: 'Japan', jurisdictionId: 'appi' },
  { name: 'Kenya', jurisdictionId: 'kdpa' },
  { name: 'New Zealand', jurisdictionId: 'nzpa' },
  { name: 'South Africa', jurisdictionId: 'popia' },
  { name: 'South Korea', jurisdictionId: 'pipa-kr' },
  { name: 'Switzerland', jurisdictionId: 'fadp' },
  { name: 'United Kingdom', jurisdictionId: 'ukgdpr' },
  { name: 'United States', jurisdictionId: 'ccpa' },
  { name: 'Uruguay', jurisdictionId: 'lpdp-uy' },
]

// Flat option list. Each option: { name, jurisdictionId, group }.
// group is the section heading (GDPR group) or null for standalone countries.
export const COUNTRY_OPTIONS = [
  ...STANDALONE.map((c) => ({ ...c, group: null })),
  ...GDPR_COUNTRIES.map((name) => ({ name, jurisdictionId: 'gdpr', group: GDPR_GROUP })),
].sort((a, b) => a.name.localeCompare(b.name))

export { GDPR_GROUP }
