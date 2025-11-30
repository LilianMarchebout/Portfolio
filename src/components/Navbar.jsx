import { useTranslation } from '../hooks/useTranslation'
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar({ currentPage, setCurrentPage }) {
    const { t } = useTranslation()

    return (
        <div className="navbar">
            <div className="navbar-container">

                <div className="navbar-links">
                    <div className="navbar-links-left">
                        <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}
                            className={currentPage === 'home' ? 'active' : ''}
                        >
                            {t('nav.projects')}
                        </a>
                        <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }}
                            className={currentPage === 'about' ? 'active' : ''}
                        >
                            {t('nav.about')}
                        </a>
                        <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); setCurrentPage('cv'); }}
                            className={currentPage === 'cv' ? 'active' : ''}
                        >
                            {t('nav.cv')}
                        </a>
                    </div>

                    <LanguageSwitcher />
                </div>
            </div>
        </div>
    )
}

export default Navbar