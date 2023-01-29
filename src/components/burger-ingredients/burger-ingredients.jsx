import React from 'react';
import { useRef } from 'react'
import ingredientsStyles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';

export default function BurgerIngredients({ ingredients }) {
  const [current, setCurrent] = React.useState('one');
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

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
              {ingredients &&
                ingredients.data.filter(item => item.type == 'bun').map(item => {
                  return <BurgerIngredient {...item} key={item['_id']} />
                })}
            </div>
          </li>
          <li>
            <h2 className="text text_type_main-medium mt-10 mb-6" ref={sauceRef}>Соусы</h2>
            <div className={ingredientsStyles.container}>
              {ingredients &&
                ingredients.data.filter(item => item.type == 'sauce').map(item => {
                  return <BurgerIngredient {...item} key={item['_id']} />
                })}
            </div>
          </li>
          <li>
            <h2 className="text text_type_main-medium mt-10 mb-6" ref={mainRef}>Начинки</h2>
            <div className={ingredientsStyles.container}>
              {ingredients &&
                ingredients.data.filter(item => item.type == 'main').map(item => {
                  return <BurgerIngredient {...item} key={item['_id']} />
                })}</div>
          </li>
        </ul>
      </section>
  )
}


