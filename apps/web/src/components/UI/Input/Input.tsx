import { InputProps } from "./inputPropsTypes";
import styles from "./Input.module.css";

function Input({
  id,
  label,
  placeholder,
  error,
  type,
  disabled = false,
  name,
  value,
  onChange,
  onBlur,
}: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        className={`${styles.input} ${disabled ? styles.inputDisabled : ""} ${error ? styles.inputErrorState : ""} `}
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
}

export default Input;
