import Input from "../Input/Input";
import Icon from "../Icon/Icon";
import type { SearchInputProps } from "./searchInputPropsTypes";
import styles from "./SearchInput.module.css";

function SearchInput({
  id,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  disabled,
}: SearchInputProps) {
  return (
    <div className={styles.searchInputWrapper}>
      <Icon name="icon-browse" size={20} className={styles.searchIcon} />
      <Input
        id={id}
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        placeholder={placeholder}
        inputClassName={styles.searchInput}
      />
    </div>
  );
}

export default SearchInput;
