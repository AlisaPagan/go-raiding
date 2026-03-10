"use client";

import Button from "../Button/Button";
import Divider from "../Divider/Divider";
import Icon from "../Icon/Icon";
import styles from "./Modal.module.css";
import type { ModalProps } from "./modalTypes";
function Modal({ isOpen, onClose, children, title, footer }: ModalProps) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className={styles.backdrop}>
      <div className={styles.overlay}>
        <header className={styles.top}>
          <h2 className={styles.title}>{title}</h2>
          <Button className={styles.closeButton} onClick={onClose} type="button" variant="reset">
            <Icon className={styles.closeIcon} name="icon-cross" size={20} />
          </Button>
        </header>

        <Divider />
        <div className={styles.content}>{children}</div>
        <footer className={styles.bottomPanel}>{footer}</footer>
      </div>
    </div>
  );
}

export default Modal;
