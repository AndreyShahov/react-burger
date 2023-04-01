import styles from './ingredient-category.module.css';
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import { isTryStatement } from 'typescript';


export function IngredientCategory({ ingredientRef, header, array, onIngredientClick }) {
  return (
    <li>
      <h2 className="text text_type_main-medium mt-10 mb-6" ref={ingredientRef}>{header}</h2>
      <div className={styles.container}>
        {array.map(item => {
          return (
            <BurgerIngredient
              ingredientData={item}
              key={item['_id']}
              onClick={onIngredientClick}
            />
          )
        })}
      </div>
    </li>
  )
}
