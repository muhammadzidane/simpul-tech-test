"use client";

import React from "react";

import classNames from "classnames";
import { useFormStatus } from "react-dom";

import { type ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  type = "button",
  className,
  children,
  ...rest
}) => {
  const { pending } = useFormStatus();
  const buttonClassName = classNames(
    className,
    "py-2 px-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
  );

  return (
    <button
      className={buttonClassName}
      aria-disabled={pending}
      disabled={pending}
      type={type}
      {...rest}
    >
      {pending ? "Loading..." : children}
    </button>
  );
};

export default Button;
