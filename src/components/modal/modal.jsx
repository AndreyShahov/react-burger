import modalStyles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';

export default function Modal(props) {
  return (
    <section>
      <ModalOverlay />
      <ul className={modalStyles.modal}>
        <li className={modalStyles.box}>
          <h2 className={`${modalStyles.header} mt-10`}></h2>
          <CloseIcon />
        </li>
        <li>{props.children}</li>
      </ul>


    </section>
  )
}
