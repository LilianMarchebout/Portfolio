import { useLanguage } from '../contexts/LanguageContext'

function ProjectCard({ title, description, image, url, tags = [] }) {
    const { language } = useLanguage()

    // Gère les descriptions multilingues
    const displayDescription = typeof description === 'object' ? description[language] : description

    return (
        <div className="project-card">
            <div className="project-image">
                <img src={image} alt={title} />
                <div className="project-overlay">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        Voir le projet →
                    </a>
                </div>
            </div>

            <div className="project-content">
                <h3 className="project-title">{title}</h3>

                {tags.length > 0 && (
                    <div className="project-tags">
                        {tags.map((tag, index) => (
                            <span key={index} className="project-tag">{tag}</span>
                        ))}
                    </div>
                )}

                <p className="project-description">{displayDescription}</p>
            </div>
        </div>
    )
}

export default ProjectCard