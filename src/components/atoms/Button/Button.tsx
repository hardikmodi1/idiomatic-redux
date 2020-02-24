import React from "react";
import "./button.css";

interface Props {
  active?: boolean;
  label: string;
  onClick: (e: React.MouseEvent) => void;
}

const Button = ({ active = false, ...props }: Props) => {
  return (
    <button
      className={`success${active ? " active" : ""}`}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default Button;
