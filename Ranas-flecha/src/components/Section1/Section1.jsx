import './section1.scss'
import { Card1 } from '../Cards/Card1'
import { Card2 } from '../Cards/Card2'
import { Card3 } from '../Cards/Card3'

export const Section1 = () => {
  return (
    <section className="section1">
      <article>
        <h2>Bienvenido a nuestro ranario</h2>
        <p>En este lugar encontrarás toda la información relativa a las ranas flechas</p>
        <div className='cardList'>
          <Card1/>
          <Card2/>
          <Card3/>
        </div>
      </article>
    </section>
  );
}