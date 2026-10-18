import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en/translation.json'

// The site ships English-only (decided 2026-10-07). The fr, de, es, pt and zh
// locale files stay parked in ./locales, dormant and no longer imported, so the
// download carries English only (approved 2026-10-18). To turn languages back
// on: import each locale here and add it to resources, restore
// <LanguageSelector /> in Header.jsx, set supportedLngs to the full list, and
// restore a language-pref init. Until then the app is locked to English and
// stores no language state.
const resources = {
  en: { translation: en },
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
