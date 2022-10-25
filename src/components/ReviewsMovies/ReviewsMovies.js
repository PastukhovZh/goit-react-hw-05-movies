import { getMovieReviews } from "api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



const ReviewsMovies = () => {
        const { id } = useParams()
    const [reviews, setReviews] = useState([])

    useEffect(() => {
getMovieReviews(id).then(res =>setReviews(res.results))
    }, [id])

    if (reviews.length=== 0) {
    return (<h3>Sorry, we don`t have any reviews for thi movie...</h3>)
}

    return (
        <ul>
            {reviews.map(({id, content, author,}) => (
                <li key={id}>
                    
                    <h3>{author } :</h3><p>{content}</p></li>
            ))}
        </ul>
    )
}




export default ReviewsMovies