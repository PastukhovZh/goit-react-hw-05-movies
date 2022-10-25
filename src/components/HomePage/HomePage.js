import { HomeWrap, Link, ListMovie } from "./HomePage.styled"
import PropTypes from "prop-types"



const { getTrendingMovies } = require("api")
const { useState, useEffect } = require("react")

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([])
const homePicture = {
      base_url:'https://image.tmdb.org/t/p/',
   size:'w300',
   }
  useEffect(() => {
    getTrendingMovies().then(res => {
  setTrendingMovies(res.results)
})
  }, [])
  
  return (
    <main>
      <HomeWrap>
        {trendingMovies.map(({ id, title, poster_path, release_date, vote_average }) => (
          <ListMovie key={id}>
          <Link  to={`/movies/${id}`}>
            <img alt={title} src={`${homePicture.base_url}${homePicture.size}${poster_path}`} />
              <h3>
                  {title}
            </h3>
            <p>Release date: {release_date}</p>
            <p>Vote average: {vote_average}</p>
            </Link>
          </ListMovie>
        ))}
      </HomeWrap>
    </main>
  );
}



HomeWrap.propTypes = {
    trendingMovies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            release_date: PropTypes.string,
            vote_average: PropTypes.string,
        })
    )
}
export default HomePage


