import { useTranslation } from 'react-i18next'

function Timeline({ timeline }) {
  const { t } = useTranslation()

  return (
    <div className="mt-4">
      <h3 className="text-xs font-medium uppercase tracking-wide text-ink">
        {t('contentBlock.timelineLabel')}
      </h3>
      <p className="mt-1 text-base text-ink">{timeline}</p>
    </div>
  )
}

export default Timeline
