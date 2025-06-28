import {useParams, Link} from "react-router-dom"
import {useEffect, useState} from "react"
import axios from "axios"

const ShowMovie = () => {
    const {id} = useParams()

    const [showMovie, setShowMovie] = useState([])


    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/movies/${id}`).then((resp) => {
                setShowMovie(resp.data.data)
        })
     }, [id])


     return (
        <section>
            <Link to="/movies">Torna alla pagina precedente</Link>
            <div className="container">
                <img src={showMovie.image} alt="show-image"></img>
                <p>{showMovie.abstract}</p>
            </div>
        </section>
     )

}

export default ShowMovie