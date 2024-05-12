import { useNavigate } from "react-router-dom"
import { ButtonRick } from "../../components/ButtonRick/ButtonRick"

import './home.scss'

export const Home = () => {

  const navigate = useNavigate()

  return (
    <main className="home">
      <section className="container">
        <h1>Welcome to Rick and Morty App</h1>
        <ButtonRick onClick={() => navigate('/login')}>Login</ButtonRick>
      </section>
    </main>
  )
}
