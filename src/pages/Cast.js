import { getMovieCredits } from "api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Cast = () => {
    const { id } = useParams()
    const [casts, setCasts] = useState([])
       const castPicture = {
      base_url:'https://image.tmdb.org/t/p/',
   size:'w300',
   }

useEffect(() => {
  getMovieCredits(id).then(res => {
        if (id !== undefined) {
            
        return setCasts(res.cast)
    }
})
     
     
}, [id])
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
/////////////////////////////////////////////////// НУЖНО УКАЗАКТЬ ЗНАЧЕНИЕ ПО УМОЛЧАНИЮ!!!!!
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
    return (
        <>
            {casts.map(({ name, id, profile_path }) => (
                <ul>
                    <li key={id}>
                        <p>{name}</p>
                        <img alt="" src={`${castPicture.base_url}${castPicture.size}${profile_path}`} />
                    </li>
                </ul>
                
            ))}
        </>
    )
}

export default Cast