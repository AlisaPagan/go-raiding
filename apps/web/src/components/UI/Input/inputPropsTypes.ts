export type InputProps = {
  id: string;
  label: string;
  placeholder?: string;
  error?: string;
  type: "text" | "password" | "email";
  disabled?: boolean;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
};
