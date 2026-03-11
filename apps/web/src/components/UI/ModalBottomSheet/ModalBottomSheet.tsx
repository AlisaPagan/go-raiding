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
  if (!isOpen) {
    return null;
  }

  const [mounted, setMounted] = useState(false);
  return createPortal(
    <div className={styles.backdrop}>
      <div className={styles.overlay}>
        <div className={styles.scrollable}>
          <header className={styles.top}>
            <h2 className={styles.title}>{title}</h2>
            <Button className={styles.closeButton} onClick={onClose} type="button" variant="reset">
              <Icon className={styles.closeIcon} name="icon-cross" size={18} />
            </Button>
          </header>

          <Divider />
          <div className={styles.content}>{children}</div>
        </div>
        <footer className={styles.bottomPanel}>{bottomPanel}</footer>
      </div>
    </div>,
    document.body,
  );
}

export default ModalBottomSheet;
