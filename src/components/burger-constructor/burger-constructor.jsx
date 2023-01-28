import constructorStyles from './burger-constructor.module.css';
import BurgerSmallIngredient from '../burger-small-ingredient/burger-small-ingredient';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerConstructor({ ingredients }) {
  return (
    <section className={constructorStyles.section}>
      <ul className={constructorStyles.container}>
        {ingredients &&
          ingredients.data.map(item => {
           return <BurgerSmallIngredient {...item} key={item['_id']} />
          })}
      </ul>
    </section>
  )
}
