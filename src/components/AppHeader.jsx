import { NavLink } from "react-router-dom"

const AppHeader = () => {
    const movieLinks = [
        {
            title: "Home",
            url: "/",
        },
        {
            title: "Movies",
            url: "/movies",
        },
    ];

    return (
        
            <header>
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                            {movieLinks.map((curLink, index) => (
                                <li className="nav-item" key={index}>
                                    <NavLink className="nav-link text-light" aria-current="page" to={curLink.url} href="#">
                                        {curLink.title}
                                    </NavLink>
                                </li>
                            ))}

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        
    )
}

export default AppHeader