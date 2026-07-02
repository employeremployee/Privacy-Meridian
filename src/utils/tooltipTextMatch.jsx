import TooltipTerm from '../components/TooltipTerm.jsx'

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function getMatchCandidates(term) {
  const candidates = []
  const label = term.term

  const parenMatches = label.matchAll(/\(([^)]+)\)/g)
  for (const match of parenMatches) {
    candidates.push(match[1])
  }

  const withoutParens = label.replace(/\([^)]*\)/g, '').trim()
  const altParts = withoutParens.split(' / ')
  altParts.forEach((part) => {
    const subParts = part
      .split(/,| and /)
      .map((p) => p.trim())
      .filter(Boolean)
    candidates.push(...subParts)
  })

  candidates.push(withoutParens.trim())

  return [...new Set(candidates.filter(Boolean))].sort((a, b) => b.length - a.length)
}

export function renderProfessionalLayerWithTooltips(text, tooltipTermIds, glossaryData) {
  if (!tooltipTermIds || tooltipTermIds.length === 0) return [text]

  const accepted = []

  for (const termId of tooltipTermIds) {
    const term = glossaryData.terms.find((t) => t.id === termId)
    if (!term) continue

    const candidates = getMatchCandidates(term)
    let found = null

    for (const candidate of candidates) {
      const regex = new RegExp(`\\b${escapeRegExp(candidate)}\\b`, 'i')
      const match = regex.exec(text)
      if (match) {
        const start = match.index
        const end = start + match[0].length
        const overlaps = accepted.some((a) => start < a.end && end > a.start)
        if (!overlaps) {
          found = { termId, start, end }
          break
        }
      }
    }

    if (found) accepted.push(found)
  }

  if (accepted.length === 0) return [text]

  accepted.sort((a, b) => a.start - b.start)

  const nodes = []
  let cursor = 0
  accepted.forEach((match, i) => {
    if (match.start > cursor) {
      nodes.push(text.slice(cursor, match.start))
    }
    nodes.push(
      <TooltipTerm key={`${match.termId}-${i}`} termId={match.termId} glossaryData={glossaryData}>
        {text.slice(match.start, match.end)}
      </TooltipTerm>,
    )
    cursor = match.end
  })
  if (cursor < text.length) {
    nodes.push(text.slice(cursor))
  }

  return nodes
}
