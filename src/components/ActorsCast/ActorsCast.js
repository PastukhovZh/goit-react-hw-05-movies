import { getMovieCredits } from "api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Actor, ActorsList } from "./ActorsCast.styled"
import PropTypes from "prop-types"

const ActorsCast = () => {
        const { id } = useParams()
    const [casts, setCasts] = useState([])
       const castPicture = {
      base_url:'https://image.tmdb.org/t/p/',
           size: 'w300',
   }

useEffect(() => {
    getMovieCredits(id).then(res =>
        setCasts(res.cast)
)
     
     
}, [id])
    return (
        <ActorsList>
            {casts.map(({ name, id, profile_path }) => {

  if (profile_path === null) {
      return (
        <Actor key={id}>
            
              <img alt="" height={450} width={300} src="https://media.istockphoto.com/vectors/error-page-or-file-not-found-icon-vector-id924949200?k=20&m=924949200&s=170667a&w=0&h=-g01ME1udkojlHCZeoa1UnMkWZZppdIFHEKk6wMvxrs=" />
              <h3>{name}</h3>
        </Actor>)
  }
                return (
                
                    <Actor key={id}>
                        
                        <img alt="" src={`${castPicture.base_url}${castPicture.size}${profile_path}`} />
                        <h3>{name}</h3>
                    </Actor>
                
                
                )
            })}
        </ActorsList>
    )
}


ActorsList.propTypes = {
    casts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    )
}


export default ActorsCast


