import { getMovieReviews } from "api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Reviews = () => {
    const { id } = useParams()
    const [reviews, setReviews] = useState([])

    useEffect(() => {
getMovieReviews(id).then(res => {
    if (id !== undefined) {
     return setReviews(res.results)
   }
 } )

    }, [id])
    return (
        <div>
            {reviews.map(review => console.log(review))}
        </div>
    )
}

export default Reviews