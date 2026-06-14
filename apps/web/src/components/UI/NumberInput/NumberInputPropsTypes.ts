export type NumberInputProps = {
    id: string;
    name: string;
    label?: string;
    value: number;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    error?: string;
    onChange: (value: number) => void;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
};
