import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientStyles from "./burger-ingredient.module.css";
import {  handleClick } from '../modal/modal.jsx'

export default function BurgerIngredient({  ingredientData, count, onClick, setIsModal}) {
  const { image, price, name } = ingredientData;

  function handleClick() {
    onClick(ingredientData);
    setIsModal(true);
  }

  return (
      <ul className={ingredientStyles.card} onClick={handleClick}>
        <li className={ingredientStyles.image}><img src={image} alt={name} /></li>
        <li className={ingredientStyles.box}>
          <p className={`${ingredientStyles.price} text text_type_digits-default`}>{price}</p>
          <div><CurrencyIcon type="primary" /></div>
        </li>
        <li><h3 className={`${ingredientStyles.name} text text_type_main-default`}>{name}</h3></li>
        <li><Counter count={1} size="default" extraClass="m-1" /></li>
      </ul>
  )
}
