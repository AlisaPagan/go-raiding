import styles from "./Button.module.css";
import type { ButtonProps } from "./buttonPropsType";

function Button({
  children,
  variant = "primary",
  disabled = false,
  onClick,
  type = "button",
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${className} ?? ""`}
    >
      {children}
    </button>
  );
}

export default Button;
