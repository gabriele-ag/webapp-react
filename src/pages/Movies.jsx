import { useEffect, useState } from "react"
import axios from "axios"

const Movie = () => {

    const [movies, setMovies] = useState([])


    useEffect(() => {
        axios.get("http://localhost:3000/movies").then((resp) => {
            console.log(resp.data)
            const movie = resp.data.data
            setMovies(movie)
        })
    }, [])


    return (
        <>
            <section>
                <h1>Sono pagina Movie</h1>
                <div>
                    {movies.map((curMovie) => (
                        <div key={curMovie.id}>
                            <h2>{curMovie.title}</h2>
                            <p>{curMovie.abstract}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Movie