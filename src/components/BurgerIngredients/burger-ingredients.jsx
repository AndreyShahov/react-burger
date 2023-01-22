import React from 'react';
import ingredientsStyles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerIngredients() {
  const [current, setCurrent] = React.useState('one')

  return (
    <main className={ingredientsStyles.main}>
      <section className={`${ingredientsStyles.section} pt-10`}>
        <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
        <div className="mb-10" style={{ display: 'flex' }}>
          <Tab value="one" active={current === 'one'} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="two" active={current === 'two'} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="three" active={current === 'three'} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>


      </section>
    </main>
  )
}
