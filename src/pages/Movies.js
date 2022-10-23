import { getMovies } from "api"
import MovieList from "components/MoviesList/MoviesList"
import Searchbar from "components/Searchbar/Searchbar"
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { toast } from "react-toastify"


// const Movies = () => {
//     const movies = getMovies(movies)
//     return (
//         <div>
//            
//         </div>
//     )
// }

// export default Movies



const Movies = () => {
    const [movies, setMovies] = useState([])



    const  handleSubmit  = async e => {
        const result = await getMovies(e).then(res => res.results)
        // console.log(result)
        return setMovies(result)
}
    



    return (
        <div>
            <Searchbar onSubmit={handleSubmit}></Searchbar>
            <MovieList movies={movies}/>
            <Outlet/>
        </div>
    )
}

export default Movies