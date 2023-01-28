import { useState, useEffect } from 'react';
import { getIngredients } from '../api/api.js';
import BurgerIngredient from '../burger-ingredient/burger-ingredient.jsx';
import { config } from '../data/data.js';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import appStyles from './app.module.css';


function App() {
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    getIngredients(config)
      .then(res => {
        setIngredients(res);
      })
      .catch(err => console.log(err));
  }, [])

 function onButtonClick(ref) {
  ref.current.focus();
 }




  return (
    <>
      <AppHeader />
      <BurgerIngredients ingredients={ingredients}>

      </BurgerIngredients>
    </>
  )
}

export default App;


