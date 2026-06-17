import type { NumberInputProps } from "./NumberInputPropsTypes";
import styles from "./NumberInput.module.css";
import Icon from "../Icon/Icon";

function NumberInput({
  id,
  name,
  label,
  value,
  min = 0,
  max = 999,
  step = 1, // якщо step не передали, використовуємо 1
  disabled = false,
  error,
  onChange,
  onBlur,
}: NumberInputProps) {
  const isMinusDisabled = disabled || value <= min;
  const isPlusDisabled = disabled || value >= max;

  // Зменшуємо значення при натисканні "-"
  function handleMinus() {
    const nextValue = value - step;

    // Не даємо піти нижче мінімального значення
    if (nextValue < min) {
      return;
    }

    onChange(nextValue);
  }

  // Збільшуємо значення при натисканні "+"
  function handlePlus() {
    const nextValue = value + step;

    // Не даємо перевищити максимальне значення
    if (nextValue > max) {
      return;
    }

    onChange(nextValue);
  }

  // Обробка ручного вводу числа
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const userInputValue = event.target.value;
    if (userInputValue === "") {
      onChange(0);
      return;
    }

    if (!/^\d+$/.test(userInputValue)) {
      return;
    }

    const numericUserInputValue = Number(userInputValue);

    if (numericUserInputValue > max) {
      onChange(max);
      return;
    }
    onChange(numericUserInputValue);
  }

  // format value for input

  const displayValue = value === 0 ? "" : String(value);

  return (
    <div className={styles.numberInputWrapper}>
      {/* Відображаємо label тільки якщо його передали */}
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}

      {/* Контейнер степпера */}
      <div
        className={`${styles.stepper}
        ${error ? styles.stepperErrorState : ""}
        ${disabled ? styles.stepperDisabled : ""}
        `}
      >
        {/* Кнопка мінус */}
        <button
          type="button"
          className={`${styles.stepperButton} ${isMinusDisabled ? styles.stepperButtonDisabled : ""}`}
          onClick={handleMinus}
          disabled={isMinusDisabled}
        >
          <Icon name="icon-minus" size={15} className={styles.stepperIcon} />
        </button>

        {/* Поле вводу числа */}
        <input
          id={id}
          name={name}
          type="text"
          inputMode="numeric"
          value={displayValue}
          disabled={disabled}
          onChange={handleInputChange}
          onBlur={onBlur}
          className={styles.numberInput}
        />

        {/* Кнопка плюс */}
        <button
          type="button"
          className={`${styles.stepperButton} ${isPlusDisabled ? styles.stepperButtonDisabled : ""}`}
          onClick={handlePlus}
          disabled={isPlusDisabled}
        >
          <Icon name="icon-plus" size={15} className={styles.stepperIcon} />
        </button>
      </div>

      {/* Відображаємо текст помилки якщо він є */}
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
}

export default NumberInput;
