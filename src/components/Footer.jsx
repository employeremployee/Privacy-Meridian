import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const LINK_CLASS =
  'underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue'

// Month and year of the latest commit, set at build time in vite.config.js.
const LAST_UPDATED = new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(
  new Date(__LAST_UPDATED__),
)

const SITE_MAP = [
  { to: '/', key: 'footer.siteMap.explore' },
  { to: '/barrelman', key: 'nav.barrelman' },
  { to: '/about', key: 'footer.about' },
]

// One line on wide screens (xl, 1280px and up; narrower overflowed at 1024px):
// the site map on the left, site facts on the right.
// Both wrap onto their own lines on a phone.
function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-rule bg-surface">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-4 py-6 text-sm text-ink xl:flex-row xl:items-center xl:justify-between xl:gap-8">
        <nav aria-label={t('footer.siteMapLabel')}>
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 xl:flex-nowrap xl:whitespace-nowrap">
            {SITE_MAP.map(({ to, key }, index) => (
              <Fragment key={to}>
                {index > 0 && (
                  <li aria-hidden="true" className="text-ink">
                    |
                  </li>
                )}
                <li>
                  <Link to={to} className={LINK_CLASS}>
                    {t(key)}
                  </Link>
                </li>
              </Fragment>
            ))}
          </ul>
        </nav>
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 xl:flex-nowrap xl:whitespace-nowrap">
          <span>{t('footer.lastUpdated', { date: LAST_UPDATED })}</span>
          <span aria-hidden="true">|</span>
          <span>{t('footer.privacyNote')}</span>
          <span aria-hidden="true">|</span>
          <span>{t('footer.copyright')}</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
