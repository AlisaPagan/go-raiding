type IconProps = {
  name: string;
  size?: number;
  className?: string;
};

function Icon({ name, size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} aria-hidden="true" focusable="false">
      <use href={`/icons/icons.svg#${name}`}></use>
    </svg>
  );
}

export default Icon;
