"use client";

import React from "react";

import Image from "next/image";

import { type InputProps } from "./input";

const Input: React.FC<InputProps> = ({
  placeholder = "...",
  errorMessage,
  label,
  icon,
  ...rest
}) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">
      {label && <span className="mb-1">{label}</span>}
      <div className="relative flex">
        <input
          className="block w-full h-[30px] px-3 border border-gray-2 rounded-sm"
          placeholder={placeholder}
          {...rest}
        />
        {icon && (
          <div className="absolute right-4 top-1/4 bottom-1/4">
            <Image
              src={`/svg/${icon}.svg`}
              alt="Search Icon"
              height={12}
              width={12}
            />
          </div>
        )}
      </div>
      {errorMessage && (
        <div className="mt-1 text-red-400 text-[12px]">{errorMessage}</div>
      )}
    </label>
  </div>
);

export default Input;
