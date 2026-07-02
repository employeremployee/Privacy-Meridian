import * as Tooltip from '@radix-ui/react-tooltip'
import GlossaryTooltip from './GlossaryTooltip.jsx'

function TooltipTerm({ termId, glossaryData, children }) {
  const term = glossaryData.terms.find((t) => t.id === termId)

  if (!term) return children

  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <button
          type="button"
          className="cursor-help border-b border-dotted border-ink text-inherit focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue"
        >
          {children}
        </button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          side="top"
          collisionPadding={8}
          sideOffset={6}
          className="z-50 rounded-lg border border-rule bg-paper p-3 shadow-md"
        >
          <GlossaryTooltip term={term} />
          <Tooltip.Arrow className="fill-paper" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  )
}

export default TooltipTerm
