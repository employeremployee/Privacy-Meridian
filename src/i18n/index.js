import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en/translation.json'
import fr from './locales/fr/translation.json'
import de from './locales/de/translation.json'
import es from './locales/es/translation.json'
import pt from './locales/pt/translation.json'
import zh from './locales/zh/translation.json'

const STORAGE_KEY = 'privacy-meridian-language'
const SUPPORTED_LANGUAGES = ['en', 'fr', 'de', 'es', 'pt', 'zh']

const storedLanguage = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null
const initialLanguage = SUPPORTED_LANGUAGES.includes(storedLanguage) ? storedLanguage : 'en'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    de: { translation: de },
    es: { translation: es },
    pt: { translation: pt },
    zh: { translation: zh },
  },
  lng: initialLanguage,
  fallbackLng: 'en',
  supportedLngs: SUPPORTED_LANGUAGES,
  interpolation: { escapeValue: false },
})

if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.language
}

i18n.on('languageChanged', (lng) => {
  window.localStorage.setItem(STORAGE_KEY, lng)
  document.documentElement.lang = lng
})

export default i18n
