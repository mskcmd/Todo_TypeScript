import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Button = ({ onClick, children, className }: ButtonProps) => {
  return (
    <button
      type="submit"
      className={`${className} transition duration-300 ease-in-out transform hover:scale-105`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};