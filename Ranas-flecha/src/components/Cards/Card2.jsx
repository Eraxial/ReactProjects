import { frogs } from '../exports'
import img from '/assets/rana2.jpg'

export const Card2 = () => {
  return(
    <div className="card card2">
      <img src={img} alt="Rana Azul con motas negras" />
      <h3>{frogs[1].nombre}</h3>
      <h3>Habitat:</h3>
      <p>{frogs[1].habitat}</p>
      <h3>Tamaño macho:</h3>
      <p>{frogs[1].tam_machos}</p>
      <h3>Tamaño hembra:</h3>
      <p>{frogs[1].tam_hembras}</p>
    </div>
  );
}