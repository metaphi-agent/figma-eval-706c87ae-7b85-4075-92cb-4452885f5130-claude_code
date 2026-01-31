interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export function Icon({ name, className = '', size = 20 }: IconProps) {
  return (
    <img
      src={`./assets/icons/${name}.svg`}
      alt=""
      width={size}
      height={size}
      className={className}
    />
  );
}
