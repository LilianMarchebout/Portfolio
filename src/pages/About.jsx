import { useTranslation } from '../hooks/useTranslation'

function About() {
    const { t } = useTranslation()

    return (
        <div className="about-section">
            <h2>{t('about.title')}</h2>
            <p>{t('about.intro')}</p>
            <p>{t('about.goal')}</p>
            <p>{t('about.interest')}</p>
            <p>{t('about.linkedin')}</p>
        </div>
    )
}

export default About