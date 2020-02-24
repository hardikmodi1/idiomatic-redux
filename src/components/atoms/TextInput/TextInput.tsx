import React from "react";
import "./textInput.css";

interface Props {
  value?: string | number | string[];
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ value, onChange }: Props) => {
  return (
    <input
      type="text"
      value={value}
      placeholder="Add Todo"
      onChange={onChange}
    />
  );
};

export default TextInput;
