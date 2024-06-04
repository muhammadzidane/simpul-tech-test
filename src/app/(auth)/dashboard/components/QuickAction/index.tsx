"use client";

import React, { useState } from "react";

import { QuickIcon } from "@/components";
import useToggle from "@/hooks/toggle";

import { Inbox } from "./components";

const QuickAction = () => {
  const { isToggle, onToggle } = useToggle();
  const [actionType, setActionType] = useState<number>(0);

  const onClickChangeTaskType = () => {
    setActionType(2);
  };

  const onClickChangeInboxType = () => {
    setActionType(2);
  };

  return (
    <div className="absolute bottom-6 right-6">
      <Inbox />
      <div className="flex justify-end items-end gap-4">
        {isToggle && (
          <div className="flex gap-4 animate-slide-in-left">
            <QuickIcon
              onClick={onClickChangeTaskType}
              backgroundColor="bg-white-2"
              backgroundSize="50px"
              icon="icon-task"
              iconSize={24}
              title="Task"
            />
            <QuickIcon
              onClick={onClickChangeInboxType}
              backgroundColor="bg-white-2"
              backgroundSize="50px"
              icon="icon-inbox"
              iconSize={24}
              title="Inbox"
            />
          </div>
        )}
        {actionType === 0 && (
          <QuickIcon
            onClick={onToggle}
            backgroundColor="bg-primary"
            icon="icon-shape-stroke"
            backgroundSize="50px"
            iconSize={16}
          />
        )}
      </div>
    </div>
  );
};

export default QuickAction;
