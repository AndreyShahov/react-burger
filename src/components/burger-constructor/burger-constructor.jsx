import { useMemo } from 'react';
import constructorStyles from './burger-constructor.module.css';
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { PropTypes } from 'prop-types';
import { item } from '../burger-ingredients/burger-ingredients';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { setBoard, removeItem } from '../../services/slices/constructorSlice';
import { increaseCounter, decreaseCounter } from '../../services/slices/ingredientsSlice';

export default function BurgerConstructor({ setIsModal }) {
  const board = useSelector(state => state.constructorReducer.board);
  const constructor = useSelector(state => state.ingredientsReducer.items)
  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'NEW_INGREDIENT',
    drop: item => addToConstructor(item.id),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    })
  }));

  const addToConstructor = (id) => {
    const ingredientsList = constructor.filter(item => id === item._id);
    dispatch(setBoard(ingredientsList[0]));
    dispatch(increaseCounter(ingredientsList[0]));
  }

  const bun = useMemo(
    () => constructor.find(item => item.type == 'bun'),
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
      <ul className={constructorStyles.container} ref={drop}>
        {board ? board.map(item => {
          return (
            <li className={constructorStyles.component} key={item['_id']}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image_mobile}
                handleClose={() => {
                  dispatch(removeItem(item._id));
                  dispatch (decreaseCounter(item._id));
                }}
              />
            </li>
          )
        }) : false}
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

