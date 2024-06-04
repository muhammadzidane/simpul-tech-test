"use client";

import React from "react";

import classNames from "classnames";
import Image from "next/image";

const QuickIcon: React.FC<QuickIconProps> = ({
  backgroundSize = "50px",
  backgroundColor,
  iconSize,
  onClick,
  active,
  title,
  icon,
}) => {
  const backgroundSizeClassName = classNames(
    "rounded-full flex items-center justify-center cursor-pointer relative z-20",
    backgroundColor
  );

  return (
    <div className="relative">
      {title && (
        <div className="text-center text-white-2 text-[12px] mb-2">{title}</div>
      )}
      {active && (
        <div
          className="absolute right-2 z-10 bg-black-2 rounded-full"
          style={{ height: backgroundSize, width: backgroundSize }}
        ></div>
      )}
      <div
        onClick={onClick}
        style={{ height: backgroundSize, width: backgroundSize }}
        className={backgroundSizeClassName}
      >
        <Image
          src={`/svg/${icon}.svg`}
          height={iconSize}
          alt="Quick Icon"
          width={iconSize}
        />
      </div>
    </div>
  );
};

export default QuickIcon;
