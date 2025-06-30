import { BrowserRouter, Routes, Route } from "react-router-dom"
import GuestLayout from "./layout/GuestLayout.jsx"
import Home from "./pages/Home.jsx"
import Movies from "./pages/Movies.jsx"
import ShowMovie from "./pages/SinglePage.jsx"
import {MovieContent} from "./contexts/MovieContext.jsx"
import NotFound404 from "./pages/NotFound.jsx"

function App() {

  return (
    <>
    <MovieContent>
        <BrowserRouter>
          <Routes>
            <Route element={<GuestLayout/>}>
              <Route path="/" element={<Home/>} />
              <Route path="/movies" element={<Movies/>} />
              <Route path="/movies/:id" element={<ShowMovie/>}/>
              <Route path="*" element={<NotFound404/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </MovieContent>
    </>
  )
}

export default App