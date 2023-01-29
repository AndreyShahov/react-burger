import styles from './ingredient-details.module.css';
import Modal from '../modal/modal.jsx';
import ModalOverlay from '../modal-overlay/modal-overlay.jsx';

export default function IngredientDetails({image_large, name, calories, proteins, fat, carbohydrates}) {
  return (
    <ul className={styles.container}>
      <li>{image_large}</li>
      <li><p>{name}</p></li>
      <li className={styles.nutrition}>
        <p>{calories}</p>
        <p>{proteins}</p>
        <p>{fat}</p>
        <p>{carbohydrates}</p>
      </li>
    </ul>
  )
}
