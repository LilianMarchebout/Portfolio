function CV() {
    const cvPath = `${import.meta.env.BASE_URL}cv-lilian-marchebout.pdf`

    return (
        <div className="cv-container">
            <div className="cv-header">
                <h2>Mon CV</h2>
                <a
                    href={cvPath}
                    download
                    className="cv-download-btn"
                >
                    Télécharger le CV
                </a>
            </div>

            <div className="cv-viewer">
                <iframe
                    src={cvPath}
                    title="CV Lilian Marchebout"
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
    )
}

export default CV