import { Link, useLocation } from "react-router-dom";
import { ListMovie, MoviesWrap } from "./MoviesList.styled";
import PropTypes from "prop-types"




const MovieList = ({ movies }) => {
    const moviesPicture = {
      base_url:'https://image.tmdb.org/t/p/',
   size:'w300',
   }
   
    const location = useLocation();
    return (
        <main>
        <MoviesWrap>
                {movies.map(({ id, title, poster_path, release_date, vote_average }) =>
                {
                    if (poster_path === null) {
                        return (
                            <ListMovie key={id}>
                        <Link to={`${id}`} state={{ from: location }}><img alt={title} height={450} width={300} src="https://media.istockphoto.com/vectors/error-page-or-file-not-found-icon-vector-id924949200?k=20&m=924949200&s=170667a&w=0&h=-g01ME1udkojlHCZeoa1UnMkWZZppdIFHEKk6wMvxrs=" />
                                <h3>
                                    {title}
                                </h3>
                                <p>Release date: {release_date}</p>
                                <p>Vote average: {vote_average}</p>
                            </Link>
                            </ListMovie>
                            )
                        
                }
                    return (
                
                        <ListMovie key={id}>
                            <Link to={`${id}`} state={{ from: location }}><img alt={title} src={`${moviesPicture.base_url}${moviesPicture.size}${poster_path}`} />
                                <h3>
                                    {title}
                                </h3>
                                <p>Release date: {release_date}</p>
                                <p>Vote average: {vote_average}</p>
                            </Link>
                    
                        </ListMovie>
                    )
                })}
            </MoviesWrap>
            </main>
    )
}




MoviesWrap.propTypes = {
    trendingMovies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            release_date: PropTypes.string,
        })
    )
}

export default MovieList