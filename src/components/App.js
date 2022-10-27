import { Routes, Route } from "react-router-dom";
// import Home from "pages/Home"
// import Movies from "pages/Movies"
// import Cast from "pages/Cast"
// import MovieDetails from "pages/MovieDetails"
// import Reviews from "pages/Reviews"
import { SharedLayout } from "./SharedLayout";
import { lazy } from "react";



const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));

  
export const App = () => {

  
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />}/>
      <Route path="/movies" element={<Movies />}/>
      <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<Home />} />
        </Route>
    </Routes>
  );
};
