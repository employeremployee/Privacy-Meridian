import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'de', label: 'DE' },
  { code: 'es', label: 'ES' },
  { code: 'pt', label: 'PT' },
  { code: 'zh', label: 'ZH' },
]

function LanguageSelector() {
  const { t, i18n } = useTranslation()

  return (
    <select
      value={i18n.language}
      onChange={(event) => i18n.changeLanguage(event.target.value)}
      aria-label={t('languageSelector.label')}
      className="rounded-md border border-white/30 bg-deep-navy px-2 py-1 text-xs font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {LANGUAGES.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  )
}

export default LanguageSelector
