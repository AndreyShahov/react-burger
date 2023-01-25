import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientStyles from "./burger-ingredient.module.css";

export default function BurgerIngredient({ image, price, name }) {
  return (
      <ul className={ingredientStyles.card}>
        <li><img src={image} alt={name} /></li>
        <li className={ingredientStyles.box}>
          <p className={ingredientStyles.price}>{price}</p>
          <div><CurrencyIcon type="primary" /></div>
        </li>
        <li><h3 className={ingredientStyles.name}>{name}</h3></li>
        <li className={ingredientStyles.counter}><Counter count={1} size="default" extraClass="m-1" /></li>
      </ul>
  )
}
