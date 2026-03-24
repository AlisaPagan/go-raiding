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
        className={styles.selectControl}
        onClick={handleToggle}
        disabled={disabled}
        id={id}
        name={name}
      >
        <span>{selectedOption?.label || placeholder}</span>
        <Icon name="icon-chevron-vert" size={15} className={styles.dropdownIcon} />
      </button>
      {isOpen && (
        <div className={styles.optionsList}>
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionSelect(option)}
              type="button"
              disabled={option.disabled}
              className={styles.option}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
}

export default Select;
