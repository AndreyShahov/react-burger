import constructorStyles from './burger-constructor.module.css';
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerConstructor({ ingredients }) {
  return (
    <section className={`${constructorStyles.section} mt-25`}>
      <div className="mr-4">
        {ingredients &&
          <ConstructorElement
            type="top"
            isLocked={true}
            text={ingredients.data[0].name + ' (верх)'}
            price={ingredients.data[0].price}
            thumbnail={ingredients.data[0].image_mobile}
          />
        }
      </div>
      <ul className={constructorStyles.container}>
        {ingredients &&
          ingredients.data.slice(2).map(item => {
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
        {ingredients &&
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={ingredients.data[0].name + ' (низ)'}
            price={ingredients.data[0].price}
            thumbnail={ingredients.data[0].image_mobile}
          />
        }
      </div>
      <ul className={`${constructorStyles.total} mt-6 mr-4`}>
        <li className={constructorStyles.price}>
          <p className="text text_type_digits-medium">610</p>
          <CurrencyIcon type="primary" />
        </li>
        <li>
          <Button htmlType="button" type="primary" size="large">
            Оформить заказ
          </Button>
        </li>
      </ul>
    </section>
  )
}
