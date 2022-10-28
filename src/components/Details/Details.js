import { getMoviesDetails } from "api"
import { Suspense, useEffect, useState } from "react"
import { Outlet, useLocation, useParams } from "react-router-dom"
import { GoBackLink, Link, Wrap, HeaderWrap, InfoWrap, Wrapper } from "./Details.styled"
import PropTypes from "prop-types"



const Details = () => {
      const [movie, setMovie] = useState([])
    const {id} = useParams()



   const moviePicture = {
      base_url:'https://image.tmdb.org/t/p/',
   size:'w500',
   picture:movie.poster_path,
  }

  const location = useLocation();
  const goBackLink = location.state?.from??`/Movies`;

useEffect(() => {
  getMoviesDetails(id).then(res =>setMovie(res) )
}, [id])

  

  return (
    <Wrapper>
      <GoBackLink to={goBackLink}>
          Go back
        </GoBackLink>
      <Wrap>
        <HeaderWrap>
        
        <h2>
          {movie.title} 
        </h2>
        <p>Release date - {movie.release_date}</p>
        <img src={`${moviePicture.base_url}${moviePicture.size}${moviePicture.picture}`} alt='' />
        </HeaderWrap>
        <InfoWrap>
          <ul>
        <li><h3>Overview:</h3> {movie.overview}</li>
        <li><h3>Budget: </h3>{movie.budget}$</li>
        <li><h3>Vote average : </h3>{movie.vote_average}</li>
          </ul>
          </InfoWrap>
            
        
      </Wrap>
      <Link to='cast' state={location.state} >Cast</Link>
      <Link to='reviews'state={location.state} >Reviews</Link>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
        </Suspense>
      </Wrapper>
    )
}



Wrapper.propTypes = {
    movie: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            release_date: PropTypes.string,
            vote_average: PropTypes.string,
            budget:PropTypes.number,
        })
    )
}

export default Details