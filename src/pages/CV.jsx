import { useTranslation } from '../hooks/useTranslation'

function CV() {
    const { t, language } = useTranslation()
    const cvPath = `${import.meta.env.BASE_URL}cv-lilian-marchebout.pdf`

    return (
        <div className="cv-container">
            <div className="cv-header">
                <h2>{t('cv.title')}</h2>
                <a
                    href={cvPath}
                    download
                    className="cv-download-btn"
                >
                    {t('cv.download')}
                </a>
            </div>

            <div className="cv-viewer">
                <iframe
                    src={cvPath}
                    title={`CV Lilian Marchebout ${language.toUpperCase()}`}
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
    )
}

export default CV