import React from 'react';
import { useRef, useState } from 'react'
import ingredientsStyles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Modal } from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import PropTypes from 'prop-types';
import { IngredientCategory } from '../ingredient-category/ingredient-category';

export default function BurgerIngredients({ ingredients }) {
  const [current, setCurrent] = React.useState('one');
  const [isModal, setIsModal] = useState(false);

  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const [ingredientInModal, setIngredientInModal] = useState(null);

  const bunArray = React.useMemo(
    () => ingredients.data.filter(item => item.type == 'bun'),
    [ingredients]
  );

  const sauceArray = React.useMemo(
    () => ingredients.data.filter(item => item.type == 'sauce'),
    [ingredients]
  );

  const mainArray = React.useMemo(
    () => ingredients.data.filter(item => item.type == 'main'),
    [ingredients]
  );

  function handleClick(value, ref) {
    setCurrent(value);
    ref.current.scrollIntoView();
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

BurgerIngredients.propTypes = {
  ingredients: PropTypes.shape({
    success: PropTypes.bool,
    data: PropTypes.array
  })
};
