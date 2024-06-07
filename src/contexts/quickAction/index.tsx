"use client";

import { createContext, useContext, useState } from "react";

import useToggle from "@/hooks/toggle";

export const QuickActionContext = createContext<QuickActionContextProps>({
  onClickChangeInboxType: () => {},
  onClickChangeTaskType: () => {},
  onToggleQuickAction: () => {},
  onCloseQuickAction: () => {},
  onClickInboxList: () => {},
  isToggleQuickAction: false,
  actionType: undefined,
});

export const QuickActionProvider: React.FC<ChildrenProps> = ({ children }) => {
  const { isToggle: isToggleQuickAction, onToggle: onToggleQuickAction } =
    useToggle();
  const [actionType, setActionType] = useState<
    "inboxDetail" | undefined | "inbox" | "task"
  >(undefined);

  const onClickChangeTaskType = () => {
    setActionType("task");
  };
  const onClickChangeInboxType = () => {
    setActionType("inbox");
  };
  const onClickInboxList = (id: string) => {
    setActionType("inboxDetail");
  };
  const onCloseQuickAction = () => {
    setActionType(undefined);
    onToggleQuickAction();
  };

  return (
    <QuickActionContext.Provider
      value={{
        onClickChangeInboxType,
        onClickChangeTaskType,
        isToggleQuickAction,
        onToggleQuickAction,
        onCloseQuickAction,
        onClickInboxList,
        actionType,
      }}
    >
      {children}
    </QuickActionContext.Provider>
  );
};

export const useQuickActionContext = () => useContext(QuickActionContext);
