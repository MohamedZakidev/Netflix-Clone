import { React } from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import * as ROUTES from "./constants/routes"
import Home from "./pages/home"
import Signin from "./pages/signin"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SIGN_IN} element={<Signin />}/>
          <Route path={ROUTES.SIGN_UP} element={<p>I will be the sign up page</p>} />
          <Route path={ROUTES.BROWSE} element={<p>I will be the browse page</p>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
