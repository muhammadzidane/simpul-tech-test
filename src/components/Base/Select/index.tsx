import React from "react";

import classNames from "classnames";

const Select: React.FC<SelectProps> = ({
  selectClassName,
  placeholder,
  options,
}) => {
  const selectClassNames = classNames(
    selectClassName,
    "block appearance-none w-full h-[40px]",
    "text-sm pl-3 pr-6 border border-gray-2 rounded-[6px]"
  );

  return (
    <div className="flex cursor-pointer">
      <select className={selectClassNames}>
        {placeholder && (
          <option value="" disabled selected hidden>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="relative right-6 text-gray-700 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current h-4 w-4"
          viewBox="0 0 20 20"
        >
          <path d="M7 10l5 5 5-5H7z" />
        </svg>
      </div>
    </div>
  );
};

export default Select;
