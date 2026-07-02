import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ModeToggle from './ModeToggle.jsx'

function Header() {
  const { t } = useTranslation()

  return (
    <header className="bg-deep-navy text-white">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <Link to="/" className="inline-flex flex-col gap-1 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue">
          <h1 className="text-2xl font-bold leading-tight">{t('app.siteName')}</h1>
          <p className="text-sm text-white/80">{t('app.tagline')}</p>
        </Link>

        <ModeToggle />
      </div>
    </header>
  )
}

export default Header
