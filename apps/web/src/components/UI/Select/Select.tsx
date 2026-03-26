import Icon from "../Icon/Icon";
import styles from "./Select.module.css";
import type { SelectOption, SelectProps } from "./SelectPropsTypes";
import { useEffect, useState } from "react";

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
  const [isListVisible, setIsListVisible] = useState<boolean>(false);
  const [shouldListRender, setShouldListRender] = useState<boolean>(false);

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

    if (!isOpen) {
      setIsOpen(true);
      setShouldListRender(true);
    } else {
      setIsOpen(false);
      setIsListVisible(false);
    }
  }

  //select an option
  function handleOptionSelect(selectedOption: SelectOption) {
    if (selectedOption.disabled) {
      return;
    } else {
      onChange(selectedOption.value);
      setIsOpen(false);
      setIsListVisible(false);
    }
  }

  //option list animation
  useEffect(() => {
    let animationFrameId: number | undefined;

    if (!shouldListRender) {
      return;
    } else {
      animationFrameId = requestAnimationFrame(() => setIsListVisible(true));
    }

    return () => {
      if (animationFrameId !== undefined) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [shouldListRender]);

  function handleTransitionEnd(event: React.TransitionEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (!isListVisible) {
      setShouldListRender(false);
    }
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
        aria-expanded={isOpen}
        aria-haspopup="listbox"
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

      {shouldListRender && (
        <div
          className={`${styles.optionsList} 
        ${isListVisible ? styles.optionsListOpen : styles.optionsListClosed}`}
          onTransitionEnd={handleTransitionEnd}
          role="listbox"
        >
          {options.map((option) => (
            <div key={option.value} className={styles.optionWrapper}>
              <button
                onClick={() => handleOptionSelect(option)}
                type="button"
                disabled={option.disabled}
                className={`${styles.option} 
                ${option.disabled ? styles.optionDisabled : ""}`}
                role="option"
                aria-selected={option.value === value}
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
