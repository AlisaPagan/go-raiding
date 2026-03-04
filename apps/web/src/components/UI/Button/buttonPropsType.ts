export type ButtonVariant = "primary" | "secondary" | "text" | "success" | "danger";

export type ButtonProps = {
    children: React.ReactNode,
    variant?: ButtonVariant,
    disabled?: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    type?: "button" | "submit" | "reset",

}