import { useTranslation } from 'react-i18next'
import { useMode } from '../context/ModeContext.jsx'
import { useRovingRadioGroup } from '../hooks/useRovingRadioGroup.js'

const VALUES = ['inform', 'assess']

function ModeToggle() {
  const { t } = useTranslation()
  const { mode, setMode } = useMode()
  const getItemProps = useRovingRadioGroup(VALUES, mode, setMode)

  const optionClassName = (value) =>
    [
      'rounded-md px-3 py-1.5 text-xs font-medium transition-colors',
      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
      mode === value ? 'bg-white text-deep-navy' : 'text-white/70 hover:text-white',
    ].join(' ')

  return (
    <div role="radiogroup" aria-label={t('mode.groupLabel')} className="inline-flex flex-wrap gap-2">
      <button
        type="button"
        role="radio"
        aria-checked={mode === 'inform'}
        onClick={() => setMode('inform')}
        className={optionClassName('inform')}
        {...getItemProps('inform', 0)}
      >
        {t('mode.inform')}
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={mode === 'assess'}
        onClick={() => setMode('assess')}
        className={optionClassName('assess')}
        {...getItemProps('assess', 1)}
      >
        {t('mode.assess')}
      </button>
    </div>
  )
}

export default ModeToggle
