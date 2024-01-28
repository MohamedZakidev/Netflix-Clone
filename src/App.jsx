import { React } from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import * as ROUTES from "./constants/routes"
import Home from "./pages/home"
import Signin from "./pages/signin"
import Signup from "./pages/signup"
import Browse from "./pages/browse"
import useAuthListener from "./hooks/useAuthListener"
// import { IsUserRedirect, ProtectedRoute } from "./helpers/routes"
import { AuthRequired } from "./helpers/routes"

function App() {
  const { user } = useAuthListener()

  return (
    <BrowserRouter>
      <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SIGN_IN} element={<Signin />}/>
          <Route path={ROUTES.SIGN_UP} element={<Signup />} />
          
          <AuthRequired>
            <Route user={user} path={ROUTES.BROWSE} element={<Browse />}/>
          </AuthRequired>

      </Routes>
    </BrowserRouter>
  )
}

export default App
