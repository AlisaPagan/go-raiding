export type TextareaProps = {
  id: string;
  label?: string;
  name: string;
  placeholder?: string;
  value: string;
  rows?: number;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur: React.FocusEventHandler<HTMLTextAreaElement>;
  error?: string;
};
