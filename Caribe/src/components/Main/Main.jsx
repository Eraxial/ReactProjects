import { Carrousel } from '../Carrousel/Carrousel';
import { Form } from '../Form/Form';
import './main.scss'

export const Main = () => {
  return (
    <section className='section1'>
      <div>
        <h2>Busca información de tu destino</h2>
        <Form />
        <Carrousel />
      </div>
      <img className='palms' src="/assets/palmeras.jpg" alt="" />
    </section>
  );
}
