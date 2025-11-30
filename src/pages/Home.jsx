import ProjectCard from '../components/ProjectCard'
import projectsData from '../data/projects.json'
import { useTranslation } from '../hooks/useTranslation'

function Home() {

    const { t } = useTranslation()
    return (
        <>
            <h2>{t('home.title')}</h2>
            <p>{t('home.text')}</p>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        url={project.url}
                        tags={project.tags}
                    />
                ))}
            </div>
        </>
    )
}

export default Home