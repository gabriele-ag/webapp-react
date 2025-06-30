import { Link } from "react-router-dom"

const MovieCard = ({movie}) => {

    const {slug, title, director, abstract, image, year} = movie
    
    return (
        <div className="card col-4" style={{ width: '18rem' }}>
            <img src={image} className="card-img-top" alt="image-movie"></img>
                <div className="card-body">
                    <h5 className="card-title text-center">{title}</h5>
                    <span className="card-text text-center">{director}</span>
                    <p className="card-text text-center">{abstract}</p>
                    <p className="card-text text-center">{year}</p>
                    <Link to={`/movies/${slug}`} className="btn btn-primary">Vedi dettagli</Link>
                  
                </div>
        </div>
    )
}

export default MovieCard