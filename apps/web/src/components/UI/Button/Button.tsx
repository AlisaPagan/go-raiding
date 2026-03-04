import styles from "./Button.module.css";
import type { ButtonProps } from "./buttonPropsType";
function Button({
  children,
  variant = "primary",
  disabled = false,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;
