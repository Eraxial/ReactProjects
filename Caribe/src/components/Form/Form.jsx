import { Button } from '../Button/Button';
import './form.scss';

export const Form = () => {
  return (
    <form action="">
      <label >
        Pais
        <input type="text" placeholder='Pais' />
      </label>
      <label >
        Ciudad
        <input type="text" placeholder='Ciudad' />
      </label>
     <label >
      Alojamiento
      <select>
        <option selected value="Hotel Rural">Hotel Rural</option>
      </select>
     </label>
    <Button />
    </form>
  );
}