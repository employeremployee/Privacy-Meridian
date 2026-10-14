import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-rule bg-surface">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4 py-6 text-sm text-ink">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>{t('footer.sourceAttribution')}</p>
          <div className="flex flex-wrap items-center gap-4">
            <span>{t('footer.about')}</span>
            <span>{t('footer.lastUpdated')}</span>
            <span>{t('footer.copyright')}</span>
          </div>
        </div>
        {/* Standing notices shown on every page. */}
        <div className="flex flex-col gap-1 border-t border-rule pt-4 text-xs">
          <p>{t('footer.notLegalAdvice')}</p>
          <p>{t('footer.privacyNote')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
