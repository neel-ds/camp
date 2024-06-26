import React from "react";

interface IInput {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  onChange: (e: any) => void;
  value?: string;
  helper?: string;
}

const Input = ({
  id,
  name,
  label,
  placeholder,
  type,
  onChange,
  value,
  helper,
}: IInput) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-gray-300 text-sm md:text-[1.2rem]"
        style={{ marginRight: 0 }}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        onChange={onChange}
        className="mt-2 bg-[#141414]/20 border border-neutral-500 text-secondary text-sm placeholder:text-gray-300 rounded-lg focus:border-secondary focus:ring-secondary active:border-secondary active:ring-secondary block w-full p-2.5"
        placeholder={placeholder}
        type={type}
        value={value}
      />
      <div className="text-sm mt-1 text-gray-400">{helper}</div>
    </div>
  );
};

export default Input;
