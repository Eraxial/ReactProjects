import './navbar.scss';

export const Navbar = () => {
  return (

    <div className='container'>
      <nav className='navbar'>
        <h1>Ranas Flecha</h1>
        <ul>
          <li>Inicio</li>
          <li>Especies</li>
          <li>Cuidados</li>
          <li>Consejos</li>
        </ul>
      </nav>
    </div>
  );
}