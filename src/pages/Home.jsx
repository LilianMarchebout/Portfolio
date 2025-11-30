function Home() {
    const projects = [
        {
            name: "Life Game",
            url: "https://gitlab.com/Nalil10/LifeGame",
            description: "Un projet de simulation de vie s'inspirant du jeu de la vie de John Horton Conway et a pour but de l'étendre par différents aspects."
        },
        {
            name: "Portfolio",
            url: "https://gitlab.com/Nalil10/Portfolio",
            description: "Un projet permettant de mettre en œuvre ce site."
        },
        {
            name: "Love Letter",
            url: "https://github.com/LilianMarchebout/LoveLetter2",
            description: "Un projet qui reprend le jeu de société Love Letter afin de pouvoir y jouer en console et de faire des statistiques dessus."
        },
        {
            name: "Chess 2",
            url: "https://github.com/Phileas-Afchain-Boucher/Chess-2",
            description: "Un projet de jeu d'échec pouvant se jouer en réseau local."
        },
        {
            name: "Kart Crous",
            url: "https://itch.io/jam/gamejam-lesi-2024/rate/3131063",
            description: "Dans le cadre de la game jam 2024, on a créé un jeu de combat de voiture."
        }
    ]

    return (
        <>
            <h2>Mes Projets</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            {project.name}
                        </a>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Home