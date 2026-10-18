import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

// Sets the browser tab title for the current view, so screen-reader users and
// people with many tabs open can tell pages apart. With no page title, the tab
// shows the site name alone.
export function useDocumentTitle(pageTitle) {
  const { t } = useTranslation()

  useEffect(() => {
    const site = t('app.siteName')
    document.title = pageTitle ? t('app.documentTitle', { page: pageTitle, site }) : site
  }, [pageTitle, t])
}
