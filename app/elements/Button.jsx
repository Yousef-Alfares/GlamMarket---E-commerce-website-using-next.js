"use client";

const Button = ({
  children,
  className,
  onClick,
  disabled = false,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <button
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
      onClick={onClick}
      className={`text-white border border-light-background rounded-[10px] transition bg-amber-500 ${className} ${
        disabled
          ? "opacity-50 hover:bg-amber-500 hover:text-white "
          : "hover:bg-light-background hover:text-amber-500 hover:border-amber-500 cursor-pointer"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
