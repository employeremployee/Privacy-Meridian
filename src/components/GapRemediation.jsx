import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import TierSelector from './TierSelector.jsx'

const TIERS = ['smb', 'midMarket', 'enterprise']

function GapRemediation({ gapRemediation }) {
  const { t } = useTranslation()
  const [selectedTier, setSelectedTier] = useState('smb')

  if (!gapRemediation) return null

  return (
    <div className="mt-4">
      <h3 className="text-xs font-medium uppercase tracking-wide text-ink">
        {t('gapRemediation.heading')}
      </h3>

      <div className="mt-2 hidden md:grid md:grid-cols-3 md:gap-4">
        {TIERS.map((tier) => (
          <div key={tier} className="rounded-lg border border-rule bg-paper p-4">
            <p className="text-sm font-bold text-ink">{t(`tiers.${tier}`)}</p>
            <p className="mt-1 text-sm text-ink">{gapRemediation[tier]}</p>
          </div>
        ))}
      </div>

      <div className="mt-2 md:hidden">
        <TierSelector selected={selectedTier} onChange={setSelectedTier} />
        <div className="mt-3 rounded-lg border border-rule bg-paper p-4">
          <p className="text-sm text-ink">{gapRemediation[selectedTier]}</p>
        </div>
      </div>
    </div>
  )
}

export default GapRemediation
