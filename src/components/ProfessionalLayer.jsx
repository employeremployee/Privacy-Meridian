import { renderProfessionalLayerWithTooltips } from '../utils/tooltipTextMatch.jsx'

function ProfessionalLayer({ text, tooltipTerms, glossaryData }) {
  const content = glossaryData
    ? renderProfessionalLayerWithTooltips(text, tooltipTerms, glossaryData)
    : text

  return <p className="mt-4 text-base leading-relaxed text-ink">{content}</p>
}

export default ProfessionalLayer
