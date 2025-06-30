import { createContext, useState, useEffect} from "react";
import axios from "axios";

const MovieContextProvider = createContext()

const MovieContent = ({children}) => {

    const [movies, setMovies] = useState([])


    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/movies`).then((resp) => {
            console.log(resp.data)
            const movie = resp.data.data
            setMovies(movie)
        })
    }, [])

    return (
        <MovieContextProvider.Provider value={{
            movies,
            setMovies,
        }}>{children}</MovieContextProvider.Provider>
    )
}

export { MovieContextProvider, MovieContent }



