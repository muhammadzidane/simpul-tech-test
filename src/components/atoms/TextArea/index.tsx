import React from "react";

const TextArea: React.FC<TextAreaProps> = ({
  placeholder = "...",
  errorMessage,
  className,
  label,
  ...rest
}) => (
  <div className="w-full">
    {label && (
      <span className="mb-1 block font-medium text-sm text-gray-700">
        {label}
      </span>
    )}
    <div className="relative flex">
      <textarea
        className="w-full block h-[40px] px-3 border border-gray-2 rounded-[6px] text-sm"
        placeholder={placeholder}
        {...rest}
      />
    </div>
    {errorMessage && (
      <div className="mt-1 text-red-400 text-[12px]">{errorMessage}</div>
    )}
  </div>
);

export default TextArea;
