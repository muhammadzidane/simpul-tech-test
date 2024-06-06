"use client";

import React from "react";

import Image from "next/image";

const Input: React.FC<InputProps> = ({
  placeholder = "...",
  iconHeight = 16,
  iconWidth = 16,
  errorMessage,
  className,
  label,
  icon,
  ...rest
}) => (
  <div className="w-full">
    {label && (
      <span className="mb-1 block font-medium text-sm text-gray-700">
        {label}
      </span>
    )}
    <div className="relative flex">
      <input
        className="w-full block h-[40px] px-3 border border-gray-2 rounded-[6px] text-sm"
        placeholder={placeholder}
        {...rest}
      />
      {icon && (
        <div className="flex items-center absolute right-4 top-1/4 bottom-1/4">
          <Image
            src={`/svg/${icon}.svg`}
            height={iconHeight}
            alt="Search Icon"
            width={iconWidth}
          />
        </div>
      )}
    </div>
    {errorMessage && (
      <div className="mt-1 text-red-400 text-[12px]">{errorMessage}</div>
    )}
  </div>
);

export default Input;
