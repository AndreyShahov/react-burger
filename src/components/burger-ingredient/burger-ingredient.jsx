import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components"

export default function BurgerIngredient({ image, price, name }) {
  return (
    <article>
      <ul>
        <li><img src={image} alt={name} /></li>
        <li>
          <p>{price}</p>
          <div><CurrencyIcon type="primary" /></div>
        </li>
        <li><h3>{name}</h3></li>
        <li><Counter count={1} size="default" extraClass="m-1" /></li>
      </ul>
    </article>
  )
}
