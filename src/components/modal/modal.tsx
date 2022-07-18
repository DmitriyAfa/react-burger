import React, { useEffect } from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ReactDOM from "react-dom";
import { match, useRouteMatch } from "react-router";
const modalRoot: any = document.getElementById("react-modals");

const Modal = ({ children, header, onClose, isFeed }: {children: React.ReactNode, header: string | number | boolean | undefined, onClose: Function, isFeed: match | null}) => {
  // Использую данные в App
  // const isFeedPage = useRouteMatch('/feed');
  // const isProfileOrdersPage = useRouteMatch('/profile/orders');
  // const isFeed = isFeedPage || isProfileOrdersPage;

  const closeModal = () => {
    onClose();
  };
  useEffect(() => {
    const closeByEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  return ReactDOM.createPortal(
    <>
      <section className={`${styles.modal} ${styles.active}`}>
        <div className={styles.content}>
          <div className={`mt-10 mr-10 ml-10 ${styles.header}`}>
            <h2 className={`text ${isFeed ? 'text_type_digits-default' : 'text_type_main-large'}`}>
              {isFeed ? `#${header}` : header}
            </h2>
            <button onClick={closeModal}>
              <CloseIcon type="primary" />
            </button>
          </div>
          {children}
        </div>
      </section>
      <ModalOverlay onClose={onClose} />
    </>,
    modalRoot
  );
};


export default Modal;
