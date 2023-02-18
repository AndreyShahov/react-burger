import modalStyles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';

export default function Modal(props) {
  const handleClick = () => {
    props.setIsModal(false);
  }

  return (
    <section>
      <ModalOverlay />
      <ul className={modalStyles.modal}>
        <li className={`${modalStyles.box} mt-10`}>
          <h2 className={`${modalStyles.header} text text_type_main-large`}>{props.header}</h2>
          <CloseIcon onClick={handleClick}/>
        </li>
        <li>{props.children}</li>
      </ul>


    </section>
  )
}
