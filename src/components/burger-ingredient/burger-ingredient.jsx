import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientStyles from "./burger-ingredient.module.css";
import PropTypes from 'prop-types';
import { useDrag } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import { setIsModal } from "../../services/slices/constructorSlice";

export default function BurgerIngredient({ ingredientData, onClick }) {
  const { image, price, name, _id, count } = ingredientData;

  const dispatch = useDispatch();

  function handleClick() {
    onClick(ingredientData);
    dispatch(setIsModal(true));
  }

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'NEW_INGREDIENT',
    item: { id: _id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })
  }));

  return (
    <ul ref={drag} className={ingredientStyles.card} onClick={handleClick}>
      <li className={ingredientStyles.image}><img src={image} alt={name} /></li>
      <li className={ingredientStyles.box}>
        <p className={`${ingredientStyles.price} text text_type_digits-default`}>{price}</p>
        <div><CurrencyIcon type="primary" /></div>
      </li>
      <li><h3 className={`${ingredientStyles.name} text text_type_main-default`}>{name}</h3></li>
      <li><Counter count={count} size="default" extraClass="m-1" /></li>
    </ul>
  )
}

BurgerIngredient.propTypes = {
  ingredientData: PropTypes.shape({
    image: PropTypes.string,
    price: PropTypes.number,
    name: PropTypes.string
  }),
  onClick: PropTypes.func,
  setIsModal: PropTypes.func
};

