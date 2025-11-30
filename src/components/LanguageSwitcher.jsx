import { useLanguage } from '../contexts/LanguageContext'

function LanguageSwitcher() {
    const { language, toggleLanguage } = useLanguage()

    return (
        <button
            onClick={toggleLanguage}
            className="language-switcher"
            aria-label="Change language"
        >
      <span className="language-flag">
        {language === 'fr' ? '🇬🇧' : '🇫🇷'}
      </span>
            <span className="language-text">
        {language === 'fr' ? 'EN' : 'FR'}
      </span>
        </button>
    )
}

export default LanguageSwitcher