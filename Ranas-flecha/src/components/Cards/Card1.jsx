import { frogs } from '../exports'
import img from '/assets/rana1.jpg'
import './cards.scss'

export const Card1 = () => {
  return(
    <div className="card card1">
      <img src={img} alt="Rana negra con motas amarillas" />
      <h3>{frogs[0].nombre}</h3>
      <h3>Habitat:</h3>
      <p>{frogs[0].habitat}</p>
      <h3>Tamaño macho:</h3>
      <p>{frogs[0].tam_machos}</p>
      <h3>Tamaño hembra:</h3>
      <p>{frogs[0].tam_hembras}</p>
    </div>
  );
}