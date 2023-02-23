import React from 'react';
import { useRef, useState } from 'react'
import ingredientsStyles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import { Modal } from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import PropTypes from 'prop-types';

export default function BurgerIngredients({ ingredients }) {
  const [current, setCurrent] = React.useState('one');
  const [isModal, setIsModal] = useState(false);

  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const [ingredientInModal, setIngredientInModal] = useState(null);

  const bunArray = ingredients.data.filter(item => item.type == 'bun');
  const sauceArray = ingredients.data.filter(item => item.type == 'sauce');
  const mainArray = ingredients.data.filter(item => item.type == 'main');
  const ingredientsArray = [...bunArray, ...sauceArray, ...mainArray];

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
        <li>
          <h2 className="text text_type_main-medium mt-10 mb-6" ref={bunRef}>Булки</h2>
          <div className={ingredientsStyles.container}>
            {bunArray.map(item => {
              return (
                <BurgerIngredient
                  ingredientData={item}
                  key={item['_id']}
                  onClick={setIngredientInModal}
                  setIsModal={setIsModal}
                />
              )
            })}
          </div>
        </li>
        <li>
          <h2 className="text text_type_main-medium mt-10 mb-6" ref={sauceRef}>Соусы</h2>
          <div className={ingredientsStyles.container}>
            {sauceArray.map(item => {
              return (
                <BurgerIngredient
                  ingredientData={item}
                  key={item['_id']}
                  onClick={setIngredientInModal}
                  setIsModal={setIsModal}
                />
              )
            })}
          </div>
        </li>
        <li>
          <h2 className="text text_type_main-medium mt-10 mb-6" ref={mainRef}>Начинки</h2>
          <div className={ingredientsStyles.container}>
            {mainArray.map(item => {
              return (
                <BurgerIngredient
                  ingredientData={item}
                  key={item['_id']}
                  onClick={setIngredientInModal}
                  setIsModal={setIsModal}
                />
              )
            })}
          </div>
        </li>
      </ul>
      {isModal &&
        <Modal header="Детали ингредиента" setIsModal={setIsModal}>
          <IngredientDetails {...ingredientInModal} />
        </Modal>}
    </section>


  )
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.object
};
