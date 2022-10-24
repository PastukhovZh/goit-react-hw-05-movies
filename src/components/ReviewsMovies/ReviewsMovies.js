import { getMovieReviews } from "api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ReviewsMovies = () => {
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
        <ul>
            {reviews.map(({id, content, author,}) => (
                <li key={id}>
                    
                    {content}</li>
                // console.log(review)
            ))}
        </ul>
    )
}

export default ReviewsMovies