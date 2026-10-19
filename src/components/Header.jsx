import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// Masthead. The site name is set large in the page-background color and sits
// flush on the bottom edge of the navy band, so the letters read as cut out of
// the masthead and rising from the page below. overflow-hidden clips the
// descender, which would otherwise vanish into the matching page color anyway.
function Header() {
  const { t } = useTranslation()

  return (
    <header className="overflow-hidden bg-deep-navy text-paper">
      <div className="mx-auto max-w-[1200px] px-4 pt-6">
        <Link
          to="/"
          className="block rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
        >
          <p className="masthead-tagline mt-1 text-sm text-paper/80">{t('app.tagline')}</p>
          <h1 className="masthead-title mt-2 font-bold tracking-tight text-paper">{t('app.siteName')}</h1>
        </Link>
      </div>
    </header>
  )
}

export default Header
