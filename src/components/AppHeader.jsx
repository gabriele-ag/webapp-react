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
                <nav>
                    <div>
                        <ul className="">
                        {movieLinks.map((curLink, index) => (
                            <li className="" key={index}>
                                <NavLink to={curLink.url}>
                                    {curLink.title}
                                </NavLink>
                            </li>
                        ))};

                        </ul>
                    </div>
                </nav>
            </header>
        
    )
}

export default AppHeader