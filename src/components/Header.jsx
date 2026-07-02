import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Header() {
  const { t } = useTranslation()

  return (
    <header className="bg-deep-navy text-white">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <Link to="/" className="inline-flex flex-col gap-1 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue">
          <h1 className="text-2xl font-bold leading-tight">{t('app.siteName')}</h1>
          <p className="text-sm text-white/80">{t('app.tagline')}</p>
        </Link>

        <div role="group" aria-label={t('mode.groupLabel')} className="inline-flex flex-wrap gap-2">
          <button
            type="button"
            disabled
            className="rounded-md px-3 py-1.5 text-xs font-medium text-white/50"
          >
            {t('mode.inform')}
          </button>
          <button
            type="button"
            disabled
            className="rounded-md px-3 py-1.5 text-xs font-medium text-white/50"
          >
            {t('mode.assess')}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
