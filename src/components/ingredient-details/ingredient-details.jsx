import styles from './ingredient-details.module.css';
import PropTypes from 'prop-types';

export default function IngredientDetails({ image_large, name, calories, proteins, fat, carbohydrates }) {
  return (
    <ul className={styles.container}>
      <li><img src={image_large} alt={name} /></li>
      <li><p className="text text_type_main-medium mt-4 mb-8">{name}</p></li>
      <li className={`${styles.nutrition} mb-15`}>
        <div className={styles.value}>
          <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
          <p className="text text_type_digits-default text_color_inactive">{calories}</p>
        </div>
        <div className={styles.value}>
          <p className="text text_type_main-default text_color_inactive">Белки, г</p>
          <p className="text text_type_digits-default text_color_inactive">{proteins}</p>
        </div>
        <div className={styles.value}>
          <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
          <p className="text text_type_digits-default text_color_inactive">{fat}</p>
        </div>
        <div className={styles.value}>
          <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
          <p className="text text_type_digits-default text_color_inactive">{carbohydrates}</p>
        </div>
      </li>
    </ul>
  )
}

IngredientDetails.propTypes = {
  image_large: PropTypes.string,
  name: PropTypes.string.isRequired,
  calories: PropTypes.number,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number
};
