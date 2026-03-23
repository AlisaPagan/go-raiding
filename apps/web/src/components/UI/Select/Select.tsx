import styles from "./Select.module.css";
import type { SelectProps } from "./SelectPropsTypes";

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
}: SelectProps) {}

export default Select;
