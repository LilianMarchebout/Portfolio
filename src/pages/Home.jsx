import ProjectCard from '../components/ProjectCard'
import projectsData from '../data/projects.json'

function Home() {
    return (
        <>
            <h2>Mes Projets</h2>
            <p>Ces projets sont uniquement des projets personnels fait sur mon temps libre, ce ne sont en aucun cas des projets de fac ou d'école.</p>
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