import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const LINK_CLASS =
  'underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-rule bg-surface">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4 py-6 text-sm text-ink">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-2">
            <p>{t('footer.sourceAttribution')}</p>
            <nav aria-label={t('footer.siteMapLabel')}>
              <ul className="flex flex-wrap gap-x-4 gap-y-1">
                <li>
                  <Link to="/" className={LINK_CLASS}>
                    {t('footer.siteMap.explore')}
                  </Link>
                </li>
                <li>
                  <Link to="/barrelman" className={LINK_CLASS}>
                    {t('nav.barrelman')}
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={LINK_CLASS}>
                    {t('footer.about')}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span>{t('footer.lastUpdated')}</span>
            <span>{t('footer.copyright')}</span>
          </div>
        </div>
        {/* Standing notices shown on every page, side by side on wider screens. */}
        <div className="flex flex-col gap-2 border-t border-rule pt-4 text-xs md:flex-row md:items-start md:gap-0">
          <p className="md:flex-1 md:pr-4">{t('footer.notLegalAdvice')}</p>
          <p className="md:border-l md:border-rule md:pl-4">{t('footer.privacyNote')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
