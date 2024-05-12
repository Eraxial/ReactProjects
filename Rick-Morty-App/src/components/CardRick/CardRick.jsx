/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import './cardrick.scss'

export const CardRick = ({data}) => {
  
  const status = data.status.toLowerCase();

  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/characters/${data.id}`)
  }

  console.log(data)

  return (
    <div className={`cardRick ${status}`} onClick={onClick}>
      <img className='photo' src= {data?.image} alt="" />
      <div className='cardRickBody'>
        <h4>{data.name}</h4>
        {status && <div className='cardRickStatus'>
          <img className='status' src={`/assets/images/icons/${status}.png  `} alt="" />
          <p className='m-0'>{status}</p>
        </div>}
      </div>
    </div>
  )
}
