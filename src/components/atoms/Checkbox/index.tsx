import React from "react";

import classNames from "classnames";

const Checkbox: React.FC<CheckboxProps> = ({ onChange, checked, label }) => {
  const handleChange = () => {
    onChange(!checked);
  };

  const checkboxClassName = classNames(
    "w-5 h-5 border-2 rounded flex items-center justify-center",
    {
      "bg-blue-500 border-blue-500": checked,
      "bg-white border-gray-300": !checked,
    }
  );

  return (
    <div>
      {label && <span>{label}</span>}
      <input onChange={handleChange} className="hidden" type="checkbox" />
      <div className={checkboxClassName}>
        {checked && (
          <svg
            className="w-4 h-4 text-white"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            fill="none"
          >
            <path d="M5 13l4 4L19 7"></path>
          </svg>
        )}
      </div>
    </div>
  );
};

export default Checkbox;
