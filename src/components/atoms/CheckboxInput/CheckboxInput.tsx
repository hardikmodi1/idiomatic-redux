import React from "react";
import "./checkboxInput.css";

interface Props {
  onChange: (id: string) => void;
  checked: boolean;
  id: string;
  className: string;
}

const CheckBoxInput = ({ onChange, checked, id, ...props }: Props) => {
  const handleChange = () => onChange(id);
  return (
    <input
      data-testid="checkbox-complete"
      onChange={handleChange}
      id={id}
      type="checkbox"
      className=""
      checked={checked}
      {...props}
    />
  );
};

export default CheckBoxInput;
