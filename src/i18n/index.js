import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en/translation.json'
import fr from './locales/fr/translation.json'
import de from './locales/de/translation.json'
import es from './locales/es/translation.json'
import pt from './locales/pt/translation.json'
import zh from './locales/zh/translation.json'

// The site ships English-only (decided 2026-10-07). The other locale files are
// kept parked here, dormant, so translation can be re-enabled later without
// re-importing them. To turn languages back on: restore <LanguageSelector /> in
// Header.jsx, set supportedLngs to the full list, and restore a language-pref
// init. Until then the app is locked to English and stores no language state.
const resources = {
  en: { translation: en },
  fr: { translation: fr },
  de: { translation: de },
  es: { translation: es },
  pt: { translation: pt },
  zh: { translation: zh },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  supportedLngs: ['en'],
  interpolation: { escapeValue: false },
})

if (typeof document !== 'undefined') {
  document.documentElement.lang = 'en'
}

export default i18n
