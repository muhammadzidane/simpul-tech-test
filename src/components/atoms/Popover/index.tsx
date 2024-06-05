"use client";

import React, { useEffect, useState, useRef } from "react";

import classNames from "classnames";

const Popover: React.FC<PopoverProps> = ({ position, children, button }) => {
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const togglePopover = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node)
    ) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  const contentClassName = classNames(
    "absolute z-10 bg-white border border-gray-300 rounded shadow-lg",
    `animate-slide-in-${position}`,
    {
      "bottom-full mb-2": position === "top",
      "right-full mr-2": position === "left",
      "left-full mr-2": position === "right",
      "top-full mt-2": position === "bottom",
    }
  );

  return (
    <div className="relative inline-block" ref={popoverRef}>
      <div onClick={togglePopover} className="cursor-pointer">
        {button}
      </div>
      {isVisible && <div className={contentClassName}>{children}</div>}
    </div>
  );
};

export default Popover;
