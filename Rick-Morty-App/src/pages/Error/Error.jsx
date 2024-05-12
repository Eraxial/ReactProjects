import { Fragment, useContext, useEffect } from 'react'
import { AppContext } from '../../context/ContextProvider'
import { useNavigate } from 'react-router-dom'
import './error.scss'

export const Error = () => {

  const [state] = useContext(AppContext)
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      redirect();
    }, 3000);
  }, []);

  const redirect = () => {
    state? navigate('/characters') : navigate ('/')
  }

  return (
    <Fragment>
      <h1 className='error text-center'> No tienes permisos para estar Aquí, ¡FUERA!</h1>
    </Fragment>
  )
}
