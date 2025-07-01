import {useParams, Link, useNavigate} from "react-router-dom"
import {useEffect, useState} from "react"
import axios from "axios"
import ReviewsList from "../components/reviews/ReviewsList"
import ReviewForm from "../components/reviews/ReviewForm"

const ShowMovie = () => {
    const { slug } = useParams()
    const navigate = useNavigate()

    const [showMovie, setShowMovie] = useState(null)

    useEffect(() => {
         getMovieDetails()
     }, [])

    const getMovieDetails = () => {
        axios
        .get(`${import.meta.env.VITE_API_URL}/movies/${slug}`)
        .then((resp) => {
            setShowMovie(resp.data.data)
        })
        .catch((err) => {
            if(err.status === 404) {
                navigate("/not-found")
            }
        })
        
    }

    // useEffect(() => {
    //     axios
    //     .get(`${import.meta.env.VITE_API_URL}/movies/${slug}`)
    //     .then((resp) => {
    //         setShowMovie(resp.data.data)
    //     })
    //     .catch((err) => {
    //         if(err.status === 404) {
    //             navigate("/not-found")
    //         }
    //     })
    //  }, [])


     return (

        <main>
            {showMovie !== null ? (
            <>
                <section className="bg-primary py-5">
                    <div className="container">
                        <Link to="/movies" className="btn btn-success my-3">Torna alla pagina precedente</Link>
                    </div>
                    <div className="container">
                        <img src={showMovie.image} alt="show-image"></img>
                        <p>{showMovie.abstract}</p>
                    </div>
                </section>
                <section>
                        <div className="container py-5">
                            <h2 className="mb-2">Recensioni</h2>
                            <ReviewsList reviews={showMovie.reviews}/>
                        </div>
                </section>
                <section>
                <div className="container">
                    <h2>Lascia la tua recensione</h2>
                    <div
                    className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6">
                            <div className="card">

                                <ReviewForm movie_id={showMovie.id} reloadReviews={getMovieDetails}/>

                            </div>
                        </div>
                    </div>
                </div>
            </section> 
            </>
            ) : (
                <h3 className="text-center">Caricamento...</h3>
            )} 
        </main>
            
     )

}

export default ShowMovie