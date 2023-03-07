import styles from './ingredient-category.module.css';
import BurgerIngredient from "../burger-ingredient/burger-ingredient";


export function IngredientCategory({ ingredientRef, header, bunArray, setIsModal, onIngredientClick }) {
  return (
    <li>
      <h2 className="text text_type_main-medium mt-10 mb-6" ref={ingredientRef}>{header}</h2>
      <div className={styles.container}>
        {bunArray.map(item => {
          return (
            <BurgerIngredient
              ingredientData={item}
              key={item['_id']}
              count={1}
              onClick={onIngredientClick}
              setIsModal={setIsModal}
            />
          )
        })}
      </div>
    </li>
  )
}
