// Barrelman taxonomy. IDs only; human labels live in translation.json under
// barrelman.category.* so no display strings are hardcoded. Order here drives
// the order of the filter chips on the page.

export const NEWS_CATEGORIES = [
  'legal-regulatory',
  'policy-perspectives',
  'breaches',
]

const CATEGORY_SET = new Set(NEWS_CATEGORIES)

// Fallback keeps an unknown value from breaking a badge or filter.
export function normalizeCategory(category) {
  return CATEGORY_SET.has(category) ? category : 'policy-perspectives'
}
