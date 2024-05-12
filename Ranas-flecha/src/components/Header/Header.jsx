import { Navbar } from '../Navbar/Navbar';
import './header.scss'

export const Header = () => {
  return (
    <header>
      <Navbar/>
      <section className='header'>
      <div className="container">
        <p>EL MARAVILLOSO MUNDO DE LAS RANAS FLECHA</p>
        <h1>ESPECIES, HÁBITAT, CARACTERÍSTICAS & MEDIO AMBIENTE</h1>
      </div>
      </section>
    </header>
  );
}