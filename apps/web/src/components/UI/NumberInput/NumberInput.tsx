import type { NumberInputProps } from "./NumberInputPropsTypes";
import styles from "./NumberInput.module.css";
import Icon from "../Icon/Icon";

function NumberInput({
  id,
  name,
  label,
  value,
  min,
  max,
  step = 1, // якщо step не передали, використовуємо 1
  disabled = false,
  error,
  onChange,
  onBlur,
}: NumberInputProps) {
  // Зменшуємо значення при натисканні "-"
  function handleMinus() {
    const nextValue = value - step;

    // Не даємо піти нижче мінімального значення
    if (min !== undefined && nextValue < min) {
      return;
    }

    onChange(nextValue);
  }

  // Збільшуємо значення при натисканні "+"
  function handlePlus() {
    const nextValue = value + step;

    // Не даємо перевищити максимальне значення
    if (max !== undefined && nextValue > max) {
      return;
    }

    onChange(nextValue);
  }

  // Обробка ручного вводу числа
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(Number(event.target.value));
  }

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
        ${disabled ? styles.stepperDisabled : ""}`}
      >
        {/* Кнопка мінус */}
        <button
          type="button"
          className={styles.stepperButton}
          onClick={handleMinus}
          disabled={disabled}
        >
          <Icon name="icon-minus" size={15} className={styles.stepperIcon} />
        </button>

        {/* Поле вводу числа */}
        <input
          id={id}
          name={name}
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          onChange={handleInputChange}
          onBlur={onBlur}
          className={styles.numberInput}
        />

        {/* Кнопка плюс */}
        <button
          type="button"
          className={styles.stepperButton}
          onClick={handlePlus}
          disabled={disabled}
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
