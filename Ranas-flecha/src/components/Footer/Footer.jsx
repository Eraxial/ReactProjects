import './footer.scss'
import facebook from '/assets/facebook.png';
import instagram from '/public/assets/instagram.png';
import pinterest from '/public/assets/pinterest.png';
import twitter from '/public/assets/twitter.png';

export const Footer = () => {
  return(
    <footer>
      <img src={facebook} alt="Logo de Facebook" />
      <img src={instagram} alt="Logo de Instagram" />
      <img src={pinterest} alt="Logo de Pinterest" />
      <img src={twitter} alt="Logo de Twitter" />
    </footer>
  );
}