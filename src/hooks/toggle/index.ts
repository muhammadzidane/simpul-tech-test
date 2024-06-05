"use client";

import { useState } from "react";

function useToggle(initialValue: boolean = false): UseToggleReturn {
  const [isToggle, setToggleValue] = useState<boolean>(initialValue);

  const onToggle = () => {
    setToggleValue((prevValue) => !prevValue);
  };

  return { isToggle, onToggle };
}

export default useToggle;
