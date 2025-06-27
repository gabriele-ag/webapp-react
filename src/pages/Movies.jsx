import { useEffect, useState } from "react"
import axios from "axios"
import MovieCard from "../components/MovieCard"

const Movie = () => {

    const [movies, setMovies] = useState([])


    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/movies`).then((resp) => {
            console.log(resp.data)
            const movie = resp.data.data
            setMovies(movie)
        })
    }, [])


    return (
        <>
            <section>
                <h1>Sono pagina Movie</h1>
                    <div className="container py-5">
                        <div className="row g-1 justify-content-between" >
                            {movies.map((curMovie) => (
                                <MovieCard
                                key={curMovie.id} 
                                movie={curMovie}/>
                            ))}
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Movie