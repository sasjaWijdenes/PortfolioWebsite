import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav>
            <ul>
                <Link to={'/'} ><li>Home</li></Link>
                <Link to={'/skills'} ><li>Skills</li></Link>
                <Link to={'/cv'} ><li>CV</li></Link>
                <Link to={'/portfolio'} ><li>Portfolio</li></Link>
                <Link to={'/contact'} ><li>Contact</li></Link>
            </ul>
        </nav>
    )
}

export default Nav