import Icon from "../Icon/Icon";
import styles from "./Select.module.css";
import type { SelectOption, SelectProps } from "./SelectPropsTypes";
import { useState } from "react";

function Select({
  id,
  name,
  label,
  placeholder,
  value,
  options,
  onChange,
  disabled,
  error,
}: SelectProps) {
  //select closed
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //find an option in the list
  const selectedOption = options.find((option) => {
    return option.value === value;
  });

  //open/close select
  function handleToggle() {
    if (disabled) {
      return;
    }
    setIsOpen((prev) => !prev);
  }

  //select an option
  function handleOptionSelect(selectedOption: SelectOption) {
    if (selectedOption.disabled) {
      return;
    }
    onChange(selectedOption.value);
    setIsOpen(false);
  }

  return (
    <div className={styles.selectWrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <button
        type="button"
        className={`${styles.selectControl} 
        ${error ? styles.selectErrorState : ""} 
        ${disabled ? styles.selectDisabled : ""}`}
        onClick={handleToggle}
        disabled={disabled}
        id={id}
        name={name}
      >
        <span>{selectedOption?.label || placeholder}</span>
        <Icon
          name="icon-chevron-vert"
          size={15}
          className={`${styles.dropdownIcon} 
          ${isOpen ? styles.iconRotated : ""} 
          ${error ? styles.dropdownIconErrState : ""}
          ${disabled ? styles.dropdownIconDisabledState : ""}`}
        />
      </button>
      {isOpen && (
        <div className={styles.optionsList}>
          {options.map((option) => (
            <div key={option.value} className={styles.optionWrapper}>
              <button
                onClick={() => handleOptionSelect(option)}
                type="button"
                disabled={option.disabled}
                className={`${styles.option} 
                ${option.disabled ? styles.optionDisabled : ""}`}
              >
                {option.label}
              </button>
            </div>
          ))}
        </div>
      )}
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
}

export default Select;
