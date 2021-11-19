import React from "react";

interface Props {
  onClick?: () => void;
  className?: string;
  theme?: "primary" | "secondary";
  icon: any;
}

const ButtonIcon = ({ className, onClick, theme = "primary", icon }: Props) => {
  return (
    <button onClick={onClick} className={`btn btn-icon ${theme} ${className}`}>
      {icon}
    </button>
  );
};

export default ButtonIcon;
