import {useEffect } from 'react';
import PropTypes from 'prop-types'
import { createPortal } from "react-dom";
import styles from "./modal.module.css";
const modalRoot = document.querySelector('#modal-root');



const Modal = ({ onToggleModal, largeImageURL }) => {
    const closeModal = ({ target, currentTarget, code }) => {
        if (target === currentTarget || code === "Escape") {
            onToggleModal();
        }
    };
    useEffect(() => {
        document.addEventListener("keydown", closeModal);

        return () => {
            document.removeEventListener("keydown", closeModal);
        }
    });

  
    return (
        createPortal(
            <div className={styles.Overlay} onClick={closeModal}>
                <div className={styles.Modal}>
                    <span className={styles.close} onClick={closeModal}>X</span>
                           <img src={largeImageURL} alt="" />
                </div>
            </div>,
            modalRoot
        )
    );
}
Modal.propTypes = {
   onToggleModal: PropTypes.func.isRequired,
};

export default Modal;
