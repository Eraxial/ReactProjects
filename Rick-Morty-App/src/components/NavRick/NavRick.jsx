/* eslint-disable react/prop-types */
import { Container } from 'react-bootstrap'

import './navrick.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import { ButtonRick } from '../ButtonRick/ButtonRick';
import { useContext } from 'react';
import { AppContext } from '../../context/ContextProvider';

export const NavRick = () => {

  const navigate = useNavigate();

  const [state, setState] = useContext(AppContext)
  
  const logout = () => {
    localStorage.removeItem('token');
    setState();
    navigate('/')
  }

  console.log(state)

  return (
    <header>
      <nav>
        <Container className='nav'>
          <div className='d-flex'>
            <img onClick={() => navigate('/')} src="/assets/images/icons/nav.png" alt="" />
            <ul>
            
              {state && <li>
                <NavLink
                to={'/characters'}
                className={'link'}
                >Characters</NavLink>
              </li>}
            </ul>
          </div>
          {!state && <ButtonRick onClick={() => navigate('/login')}>Login</ButtonRick>}
          {state && <ButtonRick onClick={logout}>Logout</ButtonRick>}
        </Container>
      </nav>
    </header>
  )
}
