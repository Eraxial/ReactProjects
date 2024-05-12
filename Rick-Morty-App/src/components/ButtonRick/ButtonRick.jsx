/* eslint-disable react/prop-types */
import './buttonrick.scss'

export const ButtonRick = ({onClick, children}) => {
  return (
    <button className='buttonrick' onClick={onClick}>{children}</button>
  )
}
