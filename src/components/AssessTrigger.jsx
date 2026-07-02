import { useTranslation } from 'react-i18next'

function AssessTrigger({ trigger }) {
  const { t } = useTranslation()

  if (!trigger) return null

  return (
    <div className="mt-4 border-l-2 border-horizon pl-4">
      <p className="text-sm font-medium text-horizon">{t('assess.considerLabel')}</p>
      <p className="mt-1 text-base text-ink">{trigger}</p>
    </div>
  )
}

export default AssessTrigger
