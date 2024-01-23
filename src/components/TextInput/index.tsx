"use client"

import { FocusEventHandler, useState } from "react";
import { UseFormRegister } from "react-hook-form"

interface TextInputProps {
  register: UseFormRegister<any>;
  name: string;
  prefix?: string;
  placeholder?: string;
  type?: string;
  step?:number | undefined;
  disabled?: boolean;
}

export function TextInput({register, name, prefix, placeholder, type='text', step=undefined, disabled=false}: TextInputProps) {
  const [isClicked, setIsClicked] = useState(false);
  
  const handleFocus: FocusEventHandler<HTMLInputElement> = () => {
    setIsClicked(true);
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = () => {
    setIsClicked(false);
  };
  return (
    <input
      className={`
        bg-gray900 text-sm rounded-md text-white px-4 py-2
        ${ isClicked ? "outline-none outline-ignite500" : "outline-none"}
      `}
      type={type}
      step={step}  
      prefix={prefix}
      placeholder={placeholder}
      disabled={disabled}
      {...register(name)}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  )
}