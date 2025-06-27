import { useContext } from "react"
import { MovieContextProvider } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

const Home = () => {

    const {movies} = useContext(MovieContextProvider)

     return (
        <main>
                <div className="hero-section">
                    <div className="container">
                        <h1 className="text-center text-light">Benvenut* su Movie Collection Catalog</h1>
                        <p className="text-center text-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="container py-4">
                    <div className="row g-1 justify-content-between" >
                        <h3>Ultime novità</h3>
                        {movies.map((curMovie) => (
                            <MovieCard
                            key={curMovie.id}
                            movie={curMovie}
                            />
                        ))} 
                        </div>
                </div>
        </main>
    )
}

export default Home