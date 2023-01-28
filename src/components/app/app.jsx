import { useState, useEffect } from 'react';
import { getIngredients } from '../api/api.js';
import BurgerIngredient from '../burger-ingredient/burger-ingredient.jsx';
import { config } from '../data/data.js';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import appStyles from './app.module.css';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';


function App() {
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    getIngredients(config)
      .then(res => {
        setIngredients(res);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <>
      <AppHeader />
      <main className={appStyles.main}>
        <BurgerIngredients ingredients={ingredients} />
        <BurgerConstructor ingredients={ingredients} />
      </main>
    </>
  )
}

export default App;


