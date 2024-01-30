import { React } from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import * as ROUTES from "./constants/routes"
import Home from "./pages/home"
import Signin from "./pages/signin"
import Signup from "./pages/signup"
import Browse from "./pages/browse"
import useAuthListener from "./hooks/useAuthListener"
import { AuthRequired, UserRedirect } from "./helpers/routes" 

function App() {
  const { user } = useAuthListener()

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserRedirect user={user} />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SIGN_IN} element={<Signin />}/>
          <Route path={ROUTES.SIGN_UP} element={<Signup />} />
        </Route>
          
        <Route element={<AuthRequired user={user} />}>
          <Route path={ROUTES.BROWSE} element={<Browse user={user} />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
