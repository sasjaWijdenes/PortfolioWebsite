import Nav from "./Nav"
import { CgMenuRight } from 'react-icons/cg'
import { useState, useEffect } from "react"
import Sidebar from "./Sidebar"

const Header = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth),
        [showSidebar, setShowSidebar] = useState(false)
    
    const toggleSidebar = () => setShowSidebar(prev => !prev)

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', changeWidth)
    }, [])

    return (<>
        <div className="header-container">
        <header>
            <h1> Sasja Wijdenes </h1>
            <h1> | </h1>
            <h1> Portfolio </h1>
        </header>
        {
            screenWidth > 750
            ? <Nav />
            : <CgMenuRight className="hamburger-btn" onClick={toggleSidebar} />
        }
        </div>
        {(showSidebar && screenWidth < 750) && <Sidebar />}
    </>)
}

export default Header