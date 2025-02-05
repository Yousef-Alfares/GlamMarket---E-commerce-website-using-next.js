"use client";
import CheckIcon from "@/public/icons/CheckIcon";
import { useState } from "react";

const Input = ({
  type,
  className = "",
  onChange,
  label,
  isValidInput = false,
  ClassNameOfParent = "",
  ariaLable,
  defaultValue = "",
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`input relative ${ClassNameOfParent}`}>
      <input
        type={type}
        required
        aria-label={ariaLable}
        value={value}
        spellCheck={false}
        className={`w-full h-11 px-4 rounded-lg bg-light-background shadow-3xl outline-amber-500 
          ${className}`}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <label
        className={`absolute left-4 text-gray-text bg-light-background px-1 transition-all duration-200
          ${isFocused || value ? "-top-2 text-xs" : "top-1/2 -translate-y-1/2"}
        `}
      >
        {label}
      </label>
      <div className="absolute top-1/2 right-3 -translate-y-1/2 transition-all w-4">
        {value.length > 0 && <CheckIcon checked={isValidInput} />}
      </div>
    </div>
  );
};

export default Input;
