import { useContext, useState } from "react"
import { ButtonRick } from "../../components/ButtonRick/ButtonRick"
import './login.scss'
import { AppContext } from "../../context/ContextProvider"
import axios from "axios"
import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router-dom"

const initialValue = {
  email:"",
  password:""
}

export const Login = () => {

  const [state, setState] = useContext(AppContext);
  const [login, setLogin] = useState(initialValue)

  const handleChange = (event) => {
    const {name, value} = event.target;
    setLogin({...login, [name]: value});
  }

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:3000/login', login)
      .then (res => {
        localStorage.setItem('token', res.data);
        setState(jwtDecode(res.data))
        navigate('/characters')
      }).cath(err => {console.log(err)})
  }

  console.log(state)

  return (
    <main>
      <form className="login" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>
          Email
          <input 
            type="text"
            name="email"
            value={login.email}
            onChange={handleChange}
         />
        </label>
        <label>
          pass
          <input 
            type="text"
            name="password"
            value={login.password}
            onChange={handleChange}
         />
        </label>
        <ButtonRick>Submit</ButtonRick>
      </form>
    </main>
  )
}
