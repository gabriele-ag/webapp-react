import { useContext} from "react"
import axios from "axios"
import MovieCard from "../components/MovieCard"
import { MovieContextProvider } from "../contexts/MovieContext"

const Movie = () => {

    const {movies} = useContext(MovieContextProvider)

    // const [movies, setMovies] = useState([])


    // useEffect(() => {
    //     axios.get(`${import.meta.env.VITE_API_URL}/movies`).then((resp) => {
    //         console.log(resp.data)
    //         const movie = resp.data.data
    //         setMovies(movie)
    //     })
    // }, [])


    return (
        <>
            <section>
                <h1 className="text-center">Catalogo dei Film</h1>
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