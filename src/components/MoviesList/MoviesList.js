import { Link } from "react-router-dom";
import { ListMovie, MoviesWrap } from "./MoviesList.styled";


const MovieList = ({ movies }) => {
    const moviesPicture = {
      base_url:'https://image.tmdb.org/t/p/',
   size:'w300',
   }
console.log(movies)
    return (
        <main>
        <MoviesWrap>
            {movies.map(({id, title,poster_path,release_date,vote_average}) => (
                
                <ListMovie key={id}>
                    <Link to={`${id}`}><img alt={title } src={`${moviesPicture.base_url}${moviesPicture.size}${poster_path}`} />
                        <h3>
                            {title}
                        </h3>
                        <p>Release date: {release_date }</p>
                        <p>Vote average: {vote_average }</p>
                    </Link>
                    
                </ListMovie>
            ))}
            </MoviesWrap>
            </main>
    )
}


export default MovieList