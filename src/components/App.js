import { Routes, Route } from "react-router-dom";
import Home from "pages/Home"
import Movies from "pages/Movies"
import Cast from "pages/Cast"
import MovieDetails from "pages/MovieDetails"
import Reviews from "pages/Reviews"
import { Link, Wrap } from "./App.styled";

export const App = () => {
  return (
    <div>

<Wrap>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
          </nav>
          </Wrap>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/movies" element={<Movies />}>
          <Route path="movie-detail" element={<MovieDetails />}>
            <Route path="cast" element={<Cast/>}></Route>
            <Route path="reviews" element={<Reviews/>}></Route>
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
