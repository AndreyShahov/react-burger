import { useMemo } from 'react';
import constructorStyles from './burger-constructor.module.css';
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { PropTypes } from 'prop-types';
import { item } from '../burger-ingredients/burger-ingredients';
import { useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';

export default function BurgerConstructor({ setIsModal }) {
  const constructor = useSelector(state => state.constructorReducer.items);

  const bun = useMemo(
    () => constructor.data.find(item => item.type == 'bun'),
    [constructor]
  );

  const sauceArray = useMemo(
    () => constructor.data.filter(item => item.type == 'sauce'),
    [constructor]
  );

  const mainArray = useMemo(
    () => constructor.data.filter(item => item.type == 'main'),
    [constructor]
  );

  function handleCLick() {
    setIsModal(true);
  }

  return (
    <section className={`${constructorStyles.section} mt-25`}>
      <div className="mr-4">
        <ConstructorElement
          type="top"
          isLocked={true}
          text={bun.name + ' (верх)'}
          price={bun.price}
          thumbnail={bun.image_mobile}
        />
      </div>
      <ul className={constructorStyles.container}>
        {mainArray.map(item => {
          return (
            <li className={constructorStyles.component} key={item['_id']}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image_mobile}
              />
            </li>
          )
        })}
        {sauceArray.map(item => {
          return (
            <li className={constructorStyles.component} key={item['_id']}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image_mobile}
              />
            </li>
          )
        })}
      </ul>
      <div className="mr-4">
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={bun.name + ' (низ)'}
          price={bun.price}
          thumbnail={bun.image_mobile}
        />
      </div>
      <ul className={`${constructorStyles.total} mt-6 mr-4`}>
        <li className={constructorStyles.price}>
          <p className="text text_type_digits-medium">610</p>
          <CurrencyIcon type="primary" />
        </li>
        <li>
          <Button htmlType="button" type="primary" size="large" onClick={handleCLick}>
            Оформить заказ
          </Button>
        </li>
      </ul>
    </section>
  )
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.shape({
    success: PropTypes.bool,
    data: PropTypes.arrayOf(item)
  })
};

