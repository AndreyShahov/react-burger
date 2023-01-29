import { useState, useEffect } from 'react';
import { getIngredients } from '../api/api.js';
import { config } from '../data/data.js';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import appStyles from './app.module.css';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import IngredientDetails from '../ingredient-details/ingredient-details.jsx';
import Modal from '../modal/modal.jsx';
import ModalOverlay from '../modal-overlay/modal-overlay.jsx';


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
      <Modal header="Детали ингредиента">
         {ingredients &&
         <IngredientDetails {...ingredients.data[5]} />}
      </Modal>
    </>
  )
}

export default App;


