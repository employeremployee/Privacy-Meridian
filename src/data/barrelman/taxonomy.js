// Barrelman taxonomy. IDs only; human labels live in translation.json under
// barrelman.category.* and barrelman.region.* so no display strings are
// hardcoded. Order here drives the order of the filter chips on the page.

export const NEWS_CATEGORIES = [
  'legal-regulatory',
  'policy-perspectives',
  'breaches',
]

export const NEWS_REGIONS = [
  'europe',
  'americas',
  'asia-pacific',
  'africa',
  'middle-east',
  'cross-border',
]

const CATEGORY_SET = new Set(NEWS_CATEGORIES)
const REGION_SET = new Set(NEWS_REGIONS)

// Fallbacks keep an unknown value from breaking a badge or filter.
export function normalizeCategory(category) {
  return CATEGORY_SET.has(category) ? category : 'policy-perspectives'
}

// Anything not a known filterable region (including 'unspecified') stays as-is
// so it matches no region chip and appears only under "All".
export function normalizeRegion(region) {
  return REGION_SET.has(region) ? region : 'unspecified'
}
