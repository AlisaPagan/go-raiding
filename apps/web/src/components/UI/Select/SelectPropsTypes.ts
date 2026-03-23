export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};
export type SelectProps = {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  disabled?: boolean;
  error?: string;
};
