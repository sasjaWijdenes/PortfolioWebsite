import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav>
            <ul>
                <Link className="nav-link" to={'/'} ><li>Home</li></Link>
                <Link className="nav-link" to={'/skills'} ><li>Skills</li></Link>
                <Link className="nav-link" to={'/cv'} ><li>CV</li></Link>
                <Link className="nav-link" to={'/portfolio'} ><li>Portfolio</li></Link>
                <Link className="nav-link" to={'/contact'} ><li>Contact</li></Link>
            </ul>
        </nav>
    )
}

export default Nav