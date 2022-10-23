import axios from 'axios';
import {toast} from 'react-toastify'


axios.defaults.baseURL = 'https://api.themoviedb.org/3/';



export const getMovies = async (search) => {
    const response= await axios.get(
    `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${search}`)
  return response.data

}
export const getTrendingMovies = async () => {
    const response= await axios.get(
      `trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`)
  return response.data

}
export const getMoviesDetails = async (id) => {
    const response= await axios.get(
    `/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
  return response.data

}
export const getMovieCredits = async (id) => {
    const response= await axios.get(
    `/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`)
  return response.data

}
export const getMovieReviews = async (id) => {
    const response= await axios.get(
    `/movie/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}`)
  return response.data

}





// export const getMovies = async () => {
//   try {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_API_KEY}`
//     );
//     return response.data.hits
    
//   } catch (error) {
//     toast.error('It`s error, sorry');
//   }
// };