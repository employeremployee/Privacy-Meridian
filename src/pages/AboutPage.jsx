import { useTranslation } from 'react-i18next'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

// About page. Every word comes from translation.json (about.*), so the copy can
// be edited without touching this component.
const SECTIONS = ['what', 'how', 'use', 'privacy', 'advice', 'roadmap']

function AboutPage() {
  const { t } = useTranslation()
  useDocumentTitle(t('about.title'))

  return (
    <main className="mx-auto max-w-[760px] px-4 py-10">
      <h2 className="text-3xl font-bold text-ink">{t('about.title')}</h2>
      <p className="mt-3 text-lg text-ink">{t('about.intro')}</p>
      <div className="mt-8 flex flex-col gap-6">
        {SECTIONS.map((key) => (
          <section key={key} className="border-l-4 border-meridian-blue pl-4">
            <h3 className="text-xl font-semibold text-ink">{t(`about.sections.${key}.heading`)}</h3>
            <p className="mt-2 text-base text-ink">{t(`about.sections.${key}.body`)}</p>
          </section>
        ))}
      </div>
    </main>
  )
}

export default AboutPage
