import React from "react";

interface ButtonProps {
  title: string;
  toUpper?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  fill?: boolean;
  disabled?: boolean;
  styles?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  toUpper,
  fill,
  disabled,
  styles,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles} hover:text-white hover:border-white hover:bg-black transition-all duration-300 ease-in-out  px-[15px] py-[10px] lg:px-[30px] lg:py-[15px] text-black text-center font-normal ${
        toUpper ? "uppercase" : ""
      } text-base border-[1px] border-black cursor-pointer ${
        fill ? "text-white bg-black" : "text-black bg-white"
      } `}
    >
      {title}
    </button>
  );
};

export default Button;
