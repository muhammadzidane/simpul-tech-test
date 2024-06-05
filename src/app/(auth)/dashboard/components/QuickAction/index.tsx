"use client";

import React, { useState } from "react";

import classNames from "classnames";

import { InboxDetail, QuickIcon, CardTask, Inbox } from "@/components";
import useToggle from "@/hooks/toggle";

const QuickAction = () => {
  const { isToggle, onToggle } = useToggle();
  const [actionType, setActionType] = useState<
    "inboxDetail" | undefined | "inbox" | "task"
  >();

  const onClickChangeTaskType = (): void => {
    setActionType("task");
  };

  const onClickChangeInboxType = (): void => {
    setActionType("inbox");
  };

  const onClickInboxList = (id: string): void => {
    setActionType("inboxDetail");
  };

  const onCloseQuickAction = (): void => {
    setActionType(undefined);
    onToggle();
  };

  const quickActionClassName = classNames("flex gap-4 animate-slide-in-left", {
    "flex-row-reverse": actionType === "task",
  });

  return (
    <div className="absolute bottom-6 right-6">
      {actionType === "task" && <CardTask />}
      {actionType === "inbox" && <Inbox onClick={onClickInboxList} />}
      {actionType === "inboxDetail" && (
        <InboxDetail
          onClickBack={onClickChangeInboxType}
          onClickClose={onCloseQuickAction}
        />
      )}

      {/* <Image src="/gif/icon-loading.gif" height={24} width={24} alt="ok" /> */}

      <div className="flex justify-end items-end gap-4">
        {isToggle && (
          <div className={quickActionClassName}>
            <QuickIcon
              onClick={onClickChangeTaskType}
              icon={
                actionType === "task"
                  ? "icon-task-white"
                  : "icon-task-secondary"
              }
              backgroundColor={
                actionType === "task" ? "bg-yellow-1" : "bg-white-2"
              }
              title={actionType === undefined ? "Task" : ""}
              active={actionType === "task"}
              backgroundSize="50px"
              iconSize={24}
            />
            <QuickIcon
              onClick={onClickChangeInboxType}
              icon={
                actionType === "inbox" || actionType === "inboxDetail"
                  ? "icon-inbox-white"
                  : "icon-inbox-blue"
              }
              backgroundColor={
                actionType === "inbox" || actionType === "inboxDetail"
                  ? "bg-primary"
                  : "bg-white-2"
              }
              active={actionType === "inbox" || actionType === "inboxDetail"}
              title={actionType === undefined ? "Inbox" : ""}
              backgroundSize="50px"
              iconSize={24}
            />
          </div>
        )}
        {actionType === undefined && (
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
