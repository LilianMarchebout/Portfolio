import { useLanguage } from '../contexts/LanguageContext'
import frTranslations from '../locals/fr.json'
import enTranslations from '../locals/en.json'

const translations = {
    fr: frTranslations,
    en: enTranslations
}

export function useTranslation() {
    const { language } = useLanguage()

    const t = (key) => {
        const keys = key.split('.')
        let value = translations[language]

        for (const k of keys) {
            value = value?.[k]
        }

        return value || key
    }

    return { t, language }
}