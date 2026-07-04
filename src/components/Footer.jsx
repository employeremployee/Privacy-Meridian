import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-rule bg-surface">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-4 py-6 text-sm text-ink md:flex-row md:items-center md:justify-between">
        <p>{t('footer.sourceAttribution')}</p>
        <div className="flex flex-wrap items-center gap-4">
          <span>{t('footer.about')}</span>
          <span>{t('footer.lastUpdated')}</span>
          <span>{t('footer.copyright')}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
