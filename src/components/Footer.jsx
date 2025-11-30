function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <p>© {new Date().getFullYear()} Lilian Marchebout</p>

                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/lilian-marchebout" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href="mailto:lilian.mar@free.fr">
                        Email
                    </a>
                    <a href="https://github.com/LilianMarchebout" target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                    <a href="https://gitlab.com/Nalil10" target="_blank" rel="noopener noreferrer">
                        Gitlab
                    </a>
                </div>
            </div>
        </footer>


    )
}

export default Footer