export type InputProps = {
  id: string;
  label: string;
  placeholder?: string;
  error?: string;
  type: "text" | "password" | "email";
  disabled?: boolean;
};
