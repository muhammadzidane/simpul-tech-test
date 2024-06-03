"use client";

import React from "react";

import { type InputProps } from "./types";

const Input: React.FC<InputProps> = ({
  placeholder = "...",
  errorMessage,
  label,
  ...rest
}) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">
      <span>{label}</span>
      <input
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        placeholder={placeholder}
        {...rest}
      />
      {errorMessage && (
        <div className="mt-1 text-red-400 text-[12px]">{errorMessage}</div>
      )}
    </label>
  </div>
);

export default Input;
