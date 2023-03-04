import { useState, useEffect } from 'react';
import { getIngredients } from '../api/api.js';
import { config } from '../../configs/configs';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import appStyles from './app.module.css';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import { OrderDetails } from '../order-details/order-details.jsx';
import { Modal } from '../modal/modal.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { setItems } from '../../services/slices/ingredientsSlice.js';

function App() {
  const ingredients = useSelector(state => state.ingredientsReducer.items);
  const dispatch = useDispatch();

  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    getIngredients(config)
      .then(res => {
        dispatch(setItems(res));
      })
      .catch(err => console.log(err));
  }, [])

  return ingredients ? (
    <>
      <AppHeader />
      <main className={appStyles.main}>
        <BurgerIngredients ingredients={ingredients} />
        <BurgerConstructor ingredients={ingredients} setIsModal={setIsModal} />
        {isModal &&
          <Modal setIsModal={setIsModal}>
            <OrderDetails />
          </Modal>}
      </main>
    </>
  ) : (
    <p>Загрузка...</p>
  );
}

export default App;
