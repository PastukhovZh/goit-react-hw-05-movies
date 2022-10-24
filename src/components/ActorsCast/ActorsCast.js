import { getMovieCredits } from "api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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
        <ul>
            {casts.map(({ name, id, profile_path }) => (
                
                    <li key={id}>
                        <p>{name}</p>
                        <img alt="" src={`${castPicture.base_url}${castPicture.size}${profile_path}`} />
                    </li>
                
                
            ))}
        </ul>
    )
}
export default ActorsCast