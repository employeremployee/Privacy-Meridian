import { useState } from 'react'
import * as Popover from '@radix-ui/react-popover'
import GlossaryTooltip from './GlossaryTooltip.jsx'

// Glossary term trigger. Uses a Popover (not a hover tooltip) so it opens on tap
// on touch devices as well as click on desktop, and closes on tap-outside,
// Escape, or the Learn more link. Popover manages focus and ARIA.
function TooltipTerm({ termId, glossaryData, children }) {
  const term = glossaryData.terms.find((t) => t.id === termId)
  const [open, setOpen] = useState(false)

  if (!term) return children

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          type="button"
          className="cursor-pointer border-b border-dotted border-ink text-inherit focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue"
        >
          {children}
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side="top"
          collisionPadding={8}
          sideOffset={6}
          className="z-50 rounded-lg border border-rule bg-paper p-3 shadow-md"
        >
          <GlossaryTooltip term={term} onLearnMore={() => setOpen(false)} />
          <Popover.Arrow className="fill-paper" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default TooltipTerm
