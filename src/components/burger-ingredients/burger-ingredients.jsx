import { useRef, useState, useMemo } from 'react'
import ingredientsStyles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Modal } from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import PropTypes from 'prop-types';
import { IngredientCategory } from '../ingredient-category/ingredient-category';
import { useSelector } from 'react-redux';

export default function BurgerIngredients() {
  const ingredients = useSelector(state => state.ingredientsReducer.items);

  const [current, setCurrent] = useState('one');
  const [isModal, setIsModal] = useState(false);

  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const [ingredientInModal, setIngredientInModal] = useState(null);

  const bunArray = useMemo(
    () => ingredients.data.filter(item => item.type == 'bun'),
    [ingredients]
  );

  const sauceArray = useMemo(
    () => ingredients.data.filter(item => item.type == 'sauce'),
    [ingredients]
  );

  const mainArray = useMemo(
    () => ingredients.data.filter(item => item.type == 'main'),
    [ingredients]
  );

  function handleClick(value, ref) {
    setCurrent(value);
    ref.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  return (
    <section className={ingredientsStyles.section}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <div style={{ display: 'flex' }}>
        <Tab value="one" active={current === 'one'} onClick={(value) => handleClick(value, bunRef)}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={(value) => handleClick(value, sauceRef)}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={(value) => handleClick(value, mainRef)}>
          Начинки
        </Tab>
      </div>
      <ul className={`${ingredientsStyles.menu} ml-4`}>
        <IngredientCategory
          ingredientRef={bunRef}
          header={'Булки'}
          bunArray={bunArray}
          setIsModal={setIsModal}
          onIngredientClick={setIngredientInModal}
        />
        <IngredientCategory
          ingredientRef={sauceRef}
          header={'Соусы'}
          bunArray={sauceArray}
          setIsModal={setIsModal}
          onIngredientClick={setIngredientInModal}
        />
        <IngredientCategory
          ingredientRef={mainRef}
          header={'Начинки'}
          bunArray={mainArray}
          setIsModal={setIsModal}
          onIngredientClick={setIngredientInModal}
        />
      </ul>
      {isModal &&
        <Modal header="Детали ингредиента" setIsModal={setIsModal}>
          <IngredientDetails {...ingredientInModal} />
        </Modal>}
    </section>


  )
}

export const item = PropTypes.shape({
  calories: PropTypes.number,
  carbohydrates: PropTypes.number,
  fat: PropTypes.number,
  image: PropTypes.string,
  image_large: PropTypes.string,
  image_mobile: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  proteins: PropTypes.number,
  type: PropTypes.string,
  __v: PropTypes.number,
  _id: PropTypes.string
}
)

BurgerIngredients.propTypes = {
  ingredients: PropTypes.shape({
    success: PropTypes.bool,
    data: PropTypes.arrayOf(item)
  })
};





