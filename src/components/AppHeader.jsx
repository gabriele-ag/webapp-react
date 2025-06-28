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
        {
            title: "About Us",
            url: "/about-us",
        },
        {
            title: "Contacts",
            url: "/contacts",
        },
    ];

    return (
        
            <header>
                <nav className="navbar navbar-expand-lg bg-primary">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse d-flex justify-content-around p-1" id="navbarNav">
                            <div>
                                <h1 className="logo-ciak">CIAK</h1>
                            </div>
                            <div>
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
                    </div>
                </nav>
            </header>
        
    )
}

export default AppHeader