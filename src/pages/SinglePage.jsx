import { useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const SingleMovie = () => {
    const {id} = useParams()

    const [movie, setMovie] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`).then((resp) => {
            setMovie(resp.data)
        })
    },[])


    return (
        <main>
            <h1>Dettagli di un film{id}</h1>
        </main>
    )
}

export default SingleMovie