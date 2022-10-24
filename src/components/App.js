import { Routes, Route, Outlet } from "react-router-dom";
import Home from "pages/Home"
import Movies from "pages/Movies"
import Cast from "pages/Cast"
import MovieDetails from "pages/MovieDetails"
import Reviews from "pages/Reviews"
import { Link, Wrap,Container } from "./App.styled";
import { ToastContainer } from "react-toastify";

export const App = () => {


  return (
    <>
    <Container>
    <Wrap>
      <nav>
        <Link to="/" end>Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </Wrap>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/movies" element={<Movies />}></Route>
      <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast/>}></Route>
          <Route path="reviews" element={<Reviews/>}></Route>
        </Route>
      <Route path="*" element={<Home />} />
    </Routes>
    <Outlet/>

    </Container>
              <ToastContainer autoClose={3000} />
    </>
  );
};
