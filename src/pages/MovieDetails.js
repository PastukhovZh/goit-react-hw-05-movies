import { getMoviesDetails } from "api"
import { useEffect, useState } from "react"
import { Link, Outlet, useParams } from "react-router-dom"



 const MoviesDetails = () => {
  const [movie, setMovie] = useState([])
    const {id} = useParams()



   const moviePicture = {
      base_url:'https://image.tmdb.org/t/p/',
   size:'w500',
   picture:movie.backdrop_path,
   }
  
useEffect(() => {
  getMoviesDetails(id).then(res => {
    if (id !== undefined) {
     return setMovie(res)
   }
 } )
     
     
}, [id])

   
 

// console.log(movie)
  //  const movieReviews = getMovieReviews(id)

    
    return (
      <div>
        <Link to={`/movies`}>
          Go back
        </Link>
        <h2>
          {movie.title} - id {id}
        </h2>
        <img src={`${moviePicture.base_url}${moviePicture.size}${moviePicture.picture}`} alt='' />
        <ul>
          <li>
            <Link to='cast' >Cast</Link>
          </li>
          <li>
            <Link to='reviews'>Reviews</Link>
          </li>
          </ul>
        <Outlet/>
      </div>
    )
}

export default MoviesDetails