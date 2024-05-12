import { frogs } from '../exports'
import img from '/assets/rana3.jpg'

export const Card3 = () => {
  return(
    <div className="card card3">
      <img src={img} alt="Rana Azul con motas negras" />
      <h3>{frogs[2].nombre}</h3>
      <h3>Habitat:</h3>
      <p>{frogs[2].habitat}</p>
      <h3>Tamaño macho:</h3>
      <p>{frogs[2].tam_machos}</p>
      <h3>Tamaño hembra:</h3>
      <p>{frogs[2].tam_hembras}</p>
    </div>
  );
}