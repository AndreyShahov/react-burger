import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components"

export default function burgerSmallIngredient({ name, price, image_mobile }) {
  return (
    <li>
      <ConstructorElement
        // type="top"
        // isLocked={true}
        text={name}
        price={price}
        thumbnail={image_mobile}
      />
    </li>
  )
}
