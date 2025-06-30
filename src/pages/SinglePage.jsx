import {useParams, Link, useNavigate} from "react-router-dom"
import {useEffect, useState} from "react"
import axios from "axios"
import ReviewsList from "../components/reviews/ReviewsList"

const ShowMovie = () => {
    const {slug} = useParams()
    const navigate = useNavigate()

    const [showMovie, setShowMovie] = useState([])


    useEffect(() => {
        axios
        .get(`${import.meta.env.VITE_API_URL}/movies/${slug}`)
        .then((resp) => {
            console.log(resp.data.data)
                setShowMovie(resp.data.data)
        })
        .catch((err) => {
            if(err.status === 404) {
                navigate("/not-found")
            }
        })
     }, [])

     return (
        <main>
            <section>
                <Link to="/movies">Torna alla pagina precedente</Link>
                <div className="container">
                    <img src={showMovie.image} alt="show-image"></img>
                    <p>{showMovie.abstract}</p>
                </div>
            </section>
            <section>
                <div className="container">
                    <h2>Recensioni</h2>
                    {/* <ReviewsList reviews={showMovie.reviews}/> */}
                </div>
            </section>
        </main>
     )

}

export default ShowMovie