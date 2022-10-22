import { Link } from "react-router-dom";


const MovieList = ({ movies }) => {
    return (
        <div>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <Link to={`${movie.id}`}>
                        <h3>
                            {movie.name}
                        </h3>
                    </Link>
                </div>
            ))}
        </div>
    )
}


export default MovieList