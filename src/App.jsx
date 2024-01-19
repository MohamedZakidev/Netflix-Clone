// eslint-disable-next-line no-unused-vars
import { React } from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/signin" element={<p>I will be the sign in page</p>}/>
          <Route path="/signup" element={<p>I will be the sign up page</p>} />
          <Route path="/browse" element={<p>I will be the browse page</p>}/>
          <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
