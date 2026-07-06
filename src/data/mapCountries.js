// Country picker options for the map dropdowns. The map selects a law, not a
// country, so several countries map to one jurisdiction. Options are grouped by
// law, so the picker shows one heading per jurisdiction. GDPR covers the whole
// EEA, so those countries share a single "European Union (GDPR)" heading; every
// other law heads its own single country.
//
// Names live here as data (not in a component), consistent with how jurisdiction
// JSON already holds fullName. English only in v1.

// Heading shown above each jurisdiction's countries. Includes the law so the
// picker tells the user which regime a country falls under.
const GROUP_LABELS = {
  gdpr: 'European Union (GDPR)',
  ccpa: 'United States (CCPA and CPRA)',
  lgpd: 'Brazil (LGPD)',
  pipl: 'China (PIPL)',
  ukgdpr: 'United Kingdom (UK GDPR)',
  fadp: 'Switzerland (revised FADP)',
  'pdpa-ar': 'Argentina (PDPA)',
  'lpdp-uy': 'Uruguay (Law 18.331)',
  'pipa-kr': 'South Korea (PIPA)',
  appi: 'Japan (APPI)',
  nzpa: 'New Zealand (Privacy Act 2020)',
  popia: 'South Africa (POPIA)',
  kdpa: 'Kenya (Data Protection Act)',
  dpdp: 'India (DPDP Act)',
}

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
// Sorted alphabetically by country name. The dropdown lists plain country names
// with no headings. group is kept for accessible labels and possible later use.
export const COUNTRY_OPTIONS = [
  ...STANDALONE.map((c) => ({ ...c, group: GROUP_LABELS[c.jurisdictionId] })),
  ...GDPR_COUNTRIES.map((name) => ({ name, jurisdictionId: 'gdpr', group: GROUP_LABELS.gdpr })),
].sort((a, b) => a.name.localeCompare(b.name))

export { GROUP_LABELS }
