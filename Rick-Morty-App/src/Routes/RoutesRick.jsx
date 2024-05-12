/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Characters } from "../pages/Characters/Characters"
import { NavRick } from "../components/NavRick/NavRick"
import { Character } from "../pages/Character/Character"
import { Login } from "../pages/Login/Login"
import { useContext } from "react"
import { AppContext } from "../context/ContextProvider"
import { Error } from "../pages/Error/Error"

export const RoutesRick = () => {

  const [state] = useContext(AppContext)

  console.log(state)

  return (
    <BrowserRouter>
      <NavRick/>
      <Routes>
        {state? 
        <Route index element={<Characters />} />
        :
        <Route index element={<Home />} />
        }
        {!state && <Route path="/" element = {<Home />}/>}
        {!state && <Route path="/login" element= {<Login />} />}
        {state && <Route path="/characters" element = {<Characters />} />}
        {state && <Route path="/characters/:id" element = {<Character />} />}
        <Route path="*" element = {<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
