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
                    <div className="container py-5">
                        <div className="row g-1 justify-content-between" >
                            {movies.map((curMovie) => (
                                <div key={curMovie.id} className="card col-4" style={{ width: '18rem' }}>
                                    <img src={curMovie.image} className="card-img-top" alt="image-movie"></img>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{curMovie.title}</h5>
                                        <p className="card-text text-center">{curMovie.abstract}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Movie