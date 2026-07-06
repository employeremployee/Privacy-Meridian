import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

// Accessible searchable country picker. Follows the ARIA combobox-with-listbox
// pattern: a text input filters options, arrow keys move a virtual focus, Enter
// selects, Escape closes. Works in single or multi mode.
//
// Props:
//   options            [{ name, jurisdictionId, group }]
//   mode               'single' | 'multi'
//   selectedIds        jurisdiction ids currently selected
//   onSelect(id)       toggle a jurisdiction id
//   limitReached       multi only: true when no more can be added
function CountryCombobox({ options, mode = 'single', selectedIds = [], onSelect, limitReached = false }) {
  const { t } = useTranslation()
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const rootRef = useRef(null)
  const listRef = useRef(null)
  const listboxId = useId()

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return options
    return options.filter((o) => o.name.toLowerCase().includes(q))
  }, [options, query])

  function isSelected(option) {
    return selectedIds.includes(option.jurisdictionId)
  }

  // In multi mode at the limit, options for not-yet-selected laws cannot be added.
  function isDisabled(option) {
    return mode === 'multi' && limitReached && !isSelected(option)
  }

  // Close when focus leaves the whole component.
  useEffect(() => {
    function onFocusOut(event) {
      if (rootRef.current && !rootRef.current.contains(event.relatedTarget)) {
        setOpen(false)
      }
    }
    const node = rootRef.current
    node?.addEventListener('focusout', onFocusOut)
    return () => node?.removeEventListener('focusout', onFocusOut)
  }, [])

  // Keep the active option scrolled into view.
  useEffect(() => {
    if (!open || activeIndex < 0 || !listRef.current) return
    const el = listRef.current.querySelector(`[data-index="${activeIndex}"]`)
    el?.scrollIntoView({ block: 'nearest' })
  }, [activeIndex, open])

  function choose(option) {
    if (!option || isDisabled(option)) return
    onSelect(option.jurisdictionId)
    if (mode === 'single') {
      setQuery('')
      setOpen(false)
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      if (!open) setOpen(true)
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (event.key === 'Enter') {
      if (open && activeIndex >= 0 && filtered[activeIndex]) {
        event.preventDefault()
        choose(filtered[activeIndex])
      }
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  // Plain alphabetical list of country names, no group headings.
  const rows = filtered.map((option, index) => {
    const selected = isSelected(option)
    const disabled = isDisabled(option)
    return (
      <li
        key={option.name}
        id={`${listboxId}-opt-${index}`}
        data-index={index}
        role="option"
        aria-selected={selected}
        aria-disabled={disabled || undefined}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => choose(option)}
        className={[
          'flex cursor-pointer items-center justify-between gap-2 px-3 py-1.5 text-sm',
          index === activeIndex ? 'bg-surface' : '',
          disabled ? 'cursor-not-allowed text-muted' : 'text-ink hover:bg-surface',
        ].join(' ')}
      >
        <span>{option.name}</span>
        {mode === 'multi' && selected && (
          <span aria-hidden="true" className="font-bold text-meridian-blue">
            ✓
          </span>
        )}
      </li>
    )
  })

  return (
    <div ref={rootRef} className="relative max-w-sm">
      <label htmlFor={`${listboxId}-input`} className="sr-only">
        {t('countryPicker.label')}
      </label>
      <input
        id={`${listboxId}-input`}
        type="text"
        role="combobox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-autocomplete="list"
        aria-activedescendant={open && activeIndex >= 0 ? `${listboxId}-opt-${activeIndex}` : undefined}
        autoComplete="off"
        placeholder={t('countryPicker.placeholder')}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          setOpen(true)
          setActiveIndex(0)
        }}
        onFocus={() => setOpen(true)}
        onClick={() => setOpen(true)}
        onKeyDown={handleKeyDown}
        className="w-full rounded-md border border-rule bg-paper px-3 py-2 text-sm text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue"
      />
      {open && (
        <ul
          ref={listRef}
          id={listboxId}
          role="listbox"
          aria-label={t('countryPicker.label')}
          className="absolute z-20 mt-1 max-h-64 w-full overflow-y-auto rounded-md border border-rule bg-paper py-1 shadow-lg"
        >
          {rows.length > 0 ? (
            rows
          ) : (
            <li role="presentation" className="px-3 py-2 text-sm text-ink">
              {t('countryPicker.noResults')}
            </li>
          )}
        </ul>
      )}
    </div>
  )
}

export default CountryCombobox
