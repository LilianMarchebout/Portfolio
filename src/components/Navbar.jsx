function Navbar({ currentPage, setCurrentPage }) {
    return (
        <nav className="navbar">
            <div className="navbar-container">

                {/* Liens à droite */}
                <div className="navbar-links">
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}
                        className={currentPage === 'home' ? 'active' : ''}
                    >
                        Accueil
                    </a>

                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }}
                        className={currentPage === 'about' ? 'active' : ''}
                    >
                        À propos
                    </a>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
