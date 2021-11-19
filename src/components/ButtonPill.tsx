import React from "react";

interface Props {
  onClick?: () => void;
  className?: string;
  theme?: "primary" | "secondary";
  text: string;
  icon?: any;
}

const ButtonPill = ({
  className,
  onClick,
  theme = "primary",
  icon,
  text,
}: Props) => {
  return (
    <button onClick={onClick} className={`btn btn-pill ${theme} ${className}`}>
      {icon}
      <span>{text}</span>
    </button>
  );
};

export default ButtonPill;
