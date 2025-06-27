import { BrowserRouter, Routes, Route } from "react-router-dom"
import GuestLayout from "./layout/GuestLayout.jsx"
import Home from "./pages/Home.jsx"
import Movies from "./pages/Movies.jsx"
import SingleMovie from "./pages/SinglePage.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/movies" element={<Movies/>} />
            <Route path="/movies/:id" element={<SingleMovie/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App