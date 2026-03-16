"use client";

import Button from "../Button/Button";
import Divider from "../Divider/Divider";
import Icon from "../Icon/Icon";
import styles from "./ModalBottomSheet.module.css";
import type { ModalBottomSheetProps } from "./modalBottomSheetTypes";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

function ModalBottomSheet({
  isOpen,
  onClose,
  children,
  title,
  bottomPanel,
}: ModalBottomSheetProps) {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [shouldRender, setShouldRender] = useState<boolean>(isOpen);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  if (!shouldRender || !mounted) {
    return null;
  }

  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.overlay}>
        <header className={styles.top}>
          <h2 className={styles.title}>{title}</h2>
          <Button className={styles.closeButton} onClick={onClose} type="button" variant="reset">
            <Icon className={styles.closeIcon} name="icon-cross" size={18} />
          </Button>
        </header>
        <Divider />
        <div className={styles.scrollable}>
          <div className={styles.content}>{children}</div>
        </div>
        {bottomPanel && <footer className={styles.bottomPanel}>{bottomPanel}</footer>}
      </div>
    </div>,
    document.body,
  );
}

export default ModalBottomSheet;
