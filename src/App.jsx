import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'

function App() {
    const [currentPage, setCurrentPage] = useState('home')

    const renderPage = () => {
        switch(currentPage) {
            case 'home':
                return <Home />
            case 'about':
                return <About />
            default:
                return <Home />
        }
    }

    return (
        <>
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <div className="main-content">
                {renderPage()}
            </div>
            <Footer />
        </>
    )
}

export default App