import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// Catch-all for unknown URLs so a typo or dead link never lands on a blank page.
function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <main className="mx-auto max-w-[1200px] px-4 py-12">
      <div className="border-l-4 border-meridian-blue pl-4">
        <h2 className="text-2xl font-bold text-ink">{t('notFound.title')}</h2>
        <p className="mt-2 text-sm text-ink">{t('notFound.message')}</p>
      </div>
      <div className="mt-4">
        <Link
          to="/"
          className="text-sm font-medium text-meridian-blue underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue"
        >
          {t('nav.backToMap')}
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage
