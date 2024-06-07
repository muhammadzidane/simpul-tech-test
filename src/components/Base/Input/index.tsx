import React from "react";

import classNames from "classnames";
import Image from "next/image";

const Input: React.FC<InputProps> = ({
  placeholder = "...",
  className,
  icon,
  ...rest
}) => {
  const inputClassName = classNames(
    className,
    "block w-full h-[40px] px-3 border border-gray-2 rounded-[6px]"
  );
  return (
    <div className="relative text-sm w-full">
      <input className={inputClassName} placeholder={placeholder} {...rest} />
      {icon && (
        <div className="flex items-center absolute bottom-[50%] top-[50%] right-3">
          <Image
            src={`/svg/${icon}.svg`}
            alt="Search Icon"
            height={16}
            width={16}
          />
        </div>
      )}
    </div>
  );
};

export default Input;
