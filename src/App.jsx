import { React } from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import * as ROUTES from "./constants/routes"
import Home from "./pages/home"
import Signin from "./pages/signin"
import Signup from "./pages/signup"
import Browse from "./pages/browse"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SIGN_IN} element={<Signin />}/>
          <Route path={ROUTES.SIGN_UP} element={<Signup />} />
          <Route path={ROUTES.BROWSE} element={<Browse />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
