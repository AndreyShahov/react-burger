import { useState, useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import appStyles from './app.module.css';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import { OrderDetails } from '../order-details/order-details.jsx';
import { Modal } from '../modal/modal.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIngredients } from '../../services/slices/ingredientsSlice.js';
import { fetchConstructor } from '../../services/slices/constructorSlice';

function App() {
  const ingredients = useSelector(state => state.ingredientsReducer.items);
  const constructor = useSelector(state => state.constructorReducer.items);

  const { loading, error } = useSelector(state => state.ingredientsReducer);

  const dispatch = useDispatch();

  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    dispatch(fetchIngredients());
    dispatch(fetchConstructor());
  }, []);

  return ingredients ? (
    ingredients &&
    <>

      {error && <p>An error occured: {error}</p>}
      <AppHeader />
      <main className={appStyles.main}>
        <BurgerIngredients />
        {constructor && <BurgerConstructor setIsModal={setIsModal} />}
        {isModal &&
          <Modal setIsModal={setIsModal}>
            <OrderDetails />
          </Modal>}
      </main>
    </>
  ) : (
    loading && <p>Loading...</p> || error && <p>{error}</p>
  )
}

export default App;