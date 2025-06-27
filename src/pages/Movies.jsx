import { useEffect, useState } from "react"
import axios from "axios"

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
                <div>
                    {movies.map((curMovie) => (
                        <div key={curMovie.id}>
                            <h2>{curMovie.title}</h2>
                            <img src={curMovie.image}></img>
                            <p>{curMovie.abstract}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Movie