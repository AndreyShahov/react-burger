import { useState, useEffect } from 'react';
import { getIngredients } from '../api/api.js';
import { config } from '../data/data.js';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import appStyles from './app.module.css';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import { OrderDetails } from '../order-details/order-details.jsx';
import Modal from '../modal/modal.jsx';

function App() {
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    getIngredients(config)
      .then(res => {
        setIngredients(res);
      })
      .catch(err => console.log(err));
  }, [])

  return ingredients ? (
    <>
      <AppHeader />
      <main className={appStyles.main}>
        <BurgerIngredients ingredients={ingredients} />
        <BurgerConstructor ingredients={ingredients} />
        <Modal>
          <OrderDetails />
        </Modal>
      </main>
    </>
  ) : (
    <p>Загрузка...</p>
  );
}

export default App;
