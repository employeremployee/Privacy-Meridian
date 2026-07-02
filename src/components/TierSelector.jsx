import { useTranslation } from 'react-i18next'
import { useRovingRadioGroup } from '../hooks/useRovingRadioGroup.js'

const TIERS = ['smb', 'midMarket', 'enterprise']

function TierSelector({ selected, onChange }) {
  const { t } = useTranslation()
  const getItemProps = useRovingRadioGroup(TIERS, selected, onChange)

  return (
    <div role="radiogroup" aria-label={t('gapRemediation.heading')} className="flex flex-wrap gap-2">
      {TIERS.map((tier, index) => (
        <button
          key={tier}
          type="button"
          role="radio"
          aria-checked={selected === tier}
          onClick={() => onChange(tier)}
          className={[
            'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
            'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue',
            selected === tier ? 'bg-meridian-blue text-white' : 'text-ink hover:bg-paper',
          ].join(' ')}
          {...getItemProps(tier, index)}
        >
          {t(`tiers.${tier}`)}
        </button>
      ))}
    </div>
  )
}

export default TierSelector
