import { InputProps } from "./inputPropsTypes";

function Input({ id, label, placeholder, error, type, disabled = false }: InputProps) {
  return (
    <>
      <div>
        <label htmlFor=""></label>
        <input />
      </div>
    </>
  );
}

export default Input;
