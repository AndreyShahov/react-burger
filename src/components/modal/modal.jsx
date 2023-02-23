import { useEffect, createPortal } from 'react';
import modalStyles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { PropTypes } from 'prop-types';

export function Modal(props) {
  const closeModal = () => {
    props.setIsModal(false);
  }

  function handleEscape(evt) {
    if (evt.key === 'Escape') {
      closeModal();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  })

  return (
      <section>
        <ModalOverlay onClick={closeModal} />
        <ul className={modalStyles.modal}>
          <li className={`${modalStyles.box} mt-10`}>
            <h2 className={`${modalStyles.header} text text_type_main-large`}>{props.header}</h2>
            <CloseIcon onClick={closeModal} />
          </li>
          <li>{props.children}</li>
        </ul>
      </section>
  );
}

Modal.propTypes = {
  header: PropTypes.string,
  setIsModal: PropTypes.func
}
