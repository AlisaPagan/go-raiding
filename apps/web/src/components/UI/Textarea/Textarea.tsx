import styles from "./Textarea.module.css";
import type { TextareaProps } from "./TextareaPropsTypes";

function Textarea({
  id,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  label,
  disabled = false,
  error,
  rows,
}: TextareaProps) {
  return (
    <div className={styles.textareaWrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <textarea
        className={`${styles.textarea} 
        ${disabled ? styles.textareaDisabled : ""} 
        ${error ? styles.textareaError : ""}`}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        rows={rows}
        disabled={disabled}
      />
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
}

export default Textarea;
