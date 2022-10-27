import { getMovies } from "api"
import MovieList from "components/MoviesList/MoviesList"
import Searchbar from "components/Searchbar/Searchbar"
import { useState } from "react"
import { Outlet } from "react-router-dom"


const Movies = () => {
    const [movies, setMovies] = useState([])



    const  handleSubmit  = async e => {
return await getMovies(e).then(res => setMovies(res.results))
        // console.log(result)

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