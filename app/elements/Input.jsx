"use client";
import CheckIcon from "@/public/icons/CheckIcon";
import { useState } from "react";

const Input = ({
  type,
  className,
  onChange,
  label,
  isValidInput,
  ClassNameOfParent,
  ariaLable,
  defaultValue,
}) => {
  const [validInput, setValidInput] = useState(false);

  return (
    <div className={`input relative ${ClassNameOfParent}`}>
      <input
        type={type}
        required
        aria-label={ariaLable}
        defaultValue={defaultValue}
        spellCheck={false}
        className={`w-full h-11 p-2 rounded-lg bg-light-background shadow-3xl outline-amber-500 ${className}`}
        onChange={(e) => {
          setValidInput(e.target.value.length > 0);
          onChange(e)
        }}
      />
      <label className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-text bg-light-background transition-all">
        {label}
      </label>
      <div className="absolute top-1/2 right-3 -translate-y-1/2 transition-all w-4">
        {validInput ? <CheckIcon checked={isValidInput} /> : null}
      </div>
    </div>
  );
};

export default Input;
