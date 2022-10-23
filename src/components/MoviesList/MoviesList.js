import { Link } from "react-router-dom";


const MovieList = ({ movies }) => {

    return (
        <div>
            {movies.map(({id, title}) => (
                
                <div key={id}>
                    <Link to={`${id}`}>
                        <h3>
                            {title}
                        </h3>
                    </Link>
                    
                </div>
            ))}
        </div>
    )
}


export default MovieList