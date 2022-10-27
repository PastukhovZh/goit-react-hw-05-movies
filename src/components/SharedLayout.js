import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Container, Link, Wrap } from "./App.styled"

export const SharedLayout = () => {
    return (
            <Container>
    <Wrap>
      <nav>
        <Link to="/" end>Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
        </Wrap>
         <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
          </Suspense>
    </Container>
    )
}