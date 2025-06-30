import { useContext } from "react"
import { MovieContextProvider } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

const Home = () => {

    const {movies} = useContext(MovieContextProvider)

     return (
        <main>
                <div className="hero-section bg-primary">
                    <div className="container">
                            <div >
                                <h1 className="font-size-big text-center text-light">Benvenut* su CIAK</h1>
                                <p className="font-size-medium text-center text-light">Il catalogo online sui film</p>
                            </div> 
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