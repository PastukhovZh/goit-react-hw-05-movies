import { getMoviesDetails } from "api"
import { useParams } from "react-router-dom"



 const MoviesDetails = () => {
    const { id } = useParams()
    const movie = getMoviesDetails(id)
    
    
    return (
        <div>
        <h2>
          Product - {movie.name} - {id}
        </h2>
        <p>
            ХЄЛЛОУ МАЗАФАКА
        </p>
      </div>
    )
}

export default MoviesDetails