import React from "react";

type InputProps = {
  type: "text" | "color" | "checkbox";
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

export const Input = ({ type, input, setInput }: InputProps) => {
  return (
    <input
      type={type}
      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-100 bg-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      value={input}
      onChange={(event) => setInput(event.target.value)}
      placeholder="Enter a new task..."
    />
  );
};