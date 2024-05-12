import { frogTextComp, frogTextDesc, frogTextDist, frogTextFuente, frogTextIntro, frogTextTox2 } from "../exports";
import './section2.scss'


export const Section2 = () => {
  return (
    <section className="section2">
      <div className="container">
      
        <article>
          <h3>Introducción:</h3>
          <p>{frogTextIntro}</p>
        </article>
        <article>
          <h3>Descripción:</h3>
          <p>{frogTextDesc}</p>
        </article>
        <article>
          <h3>Distribución:</h3>
          <p>{frogTextDist}</p>
        </article>
        <article>
          <h3>Comportamiento:</h3>
          <p>{frogTextComp}</p>
        </article>
        <article>
          <h3>Toxicidad:</h3>
          <p>{frogTextTox2}</p>
        </article>
        <p>{frogTextFuente}</p>
      </div>
    </section>
  );
}