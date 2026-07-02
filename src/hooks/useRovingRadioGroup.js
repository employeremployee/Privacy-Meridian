import { useRef } from 'react'

export function useRovingRadioGroup(values, current, onChange) {
  const refs = useRef([])

  return function getItemProps(value, index) {
    return {
      ref: (el) => {
        refs.current[index] = el
      },
      tabIndex: value === current ? 0 : -1,
      onKeyDown: (event) => {
        let nextIndex = null
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
          nextIndex = (index + 1) % values.length
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
          nextIndex = (index - 1 + values.length) % values.length
        } else if (event.key === 'Home') {
          nextIndex = 0
        } else if (event.key === 'End') {
          nextIndex = values.length - 1
        }
        if (nextIndex !== null) {
          event.preventDefault()
          onChange(values[nextIndex])
          refs.current[nextIndex]?.focus()
        }
      },
    }
  }
}
