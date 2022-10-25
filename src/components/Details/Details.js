import { getMoviesDetails } from "api"
import { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom"
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
  
useEffect(() => {
  getMoviesDetails(id).then(res =>setMovie(res) )
  // getMoviesDetails(id).then(res =>console.log(res) )

}, [id])

  

  return (
    <Wrapper>
      <GoBackLink to={`/movies`}>
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
      <Link to='cast' >Cast</Link>
      <Link to='reviews'>Reviews</Link>
      <Outlet/>
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