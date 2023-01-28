import { useState, useEffect, useRef } from 'react';
import { getIngredients } from '../api/api.js';
import BurgerIngredient from '../burger-ingredient/burger-ingredient.jsx';
import { config } from '../data/data.js';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import appStyles from './app.module.css';


function App() {
  const [ingredients, setIngredients] = useState(null);
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

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
      <BurgerIngredients>
        <li>
          <h2>Булки</h2>
          <div className={appStyles.container} ref={bunRef}>
            {ingredients &&
              ingredients.data.filter(item => item.type == 'bun').map(item => {
                return <BurgerIngredient {...item} key={item['_id']} />
              })}
          </div>
        </li>
        <li>
          <h2>Соусы</h2>
          <div className={appStyles.container}>
            {ingredients &&
              ingredients.data.filter(item => item.type == 'sauce').map(item => {
                return <BurgerIngredient {...item} key={item['_id']} />
              })}
          </div>
        </li>
        <li>
          <h2>Начинки</h2>
          <div className={appStyles.container}>
            {ingredients &&
              ingredients.data.filter(item => item.type == 'main').map(item => {
                return <BurgerIngredient {...item} key={item['_id']} />
              })}</div>
        </li>
      </BurgerIngredients>
    </>
  )
}

export default App;


