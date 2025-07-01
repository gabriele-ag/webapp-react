import { useContext, useState, useEffect} from "react"
import axios from "axios"
import MovieCard from "../components/MovieCard"
import { MovieContextProvider } from "../contexts/MovieContext"


const Movie = () => {

    // const {movies, setMovies} = useContext(MovieContextProvider)
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        getMovie();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault()
        getMovie()
    };


    const getMovie = () => {
        const params = {};
        if (search) {
            params.search = search;
        }

        axios
            .get(`${import.meta.env.VITE_API_URL}/movies`, {
                params,
            })
            .then((resp) => {
                setMovies(resp.data.data)
            });
    };




    return (
        <>
            <section className="py-5">
                <h1 className="text-center">Catalogo dei Film</h1>
                <div className="my-5 container">
                    <form 
                    action=""
                    onSubmit={handleSubmit}
                    className="d-flex justify-content-center"
                    >
                        <input 
                        type="search" 
                        className="form-control w-50" 
                        placeholder="Inizia ricerca..." 
                        aria-label="Cerca film per titolo"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)} />
                        <button type="submit" className="btn btn-success"
                        >Cerca</button>
                    </form>
                </div>
                    <div className="container py-5">
                        <div className="row g-1 justify-content-between" >
                            {movies.map((curMovie) => (
                                <MovieCard
                                key={curMovie.id} 
                                movie={curMovie}
                                />
                            ))}
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Movie