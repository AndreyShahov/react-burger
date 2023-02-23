import overlayStyles from "./modal-overlay.module.css";
import PropTypes from 'prop-types';

export default function ModalOverlay({onClick}) {
 return (
  <div className={overlayStyles.overlay} onClick={onClick}></div>
 )
}

ModalOverlay.propTypes = {
  onClick: PropTypes.func,
}
