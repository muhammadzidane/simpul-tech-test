"use client";

import React from "react";

import classNames from "classnames";

import { InboxDetail, QuickIcon } from "@/components";
import { useQuickActionContext } from "@/contexts";

const QuickAction: React.FC<QuickActionProps> = ({ CardTask, Inbox }) => {
  const {
    onClickChangeInboxType,
    onClickChangeTaskType,
    isToggleQuickAction,
    onToggleQuickAction,
    onCloseQuickAction,
    actionType,
  } = useQuickActionContext();

  const quickActionClassName = classNames("flex gap-4 animate-slide-in-left", {
    "flex-row-reverse": actionType === "task",
  });

  return (
    <div className="absolute bottom-6 right-6">
      {actionType === "task" && CardTask}
      {actionType === "inbox" && Inbox}
      {actionType === "inboxDetail" && (
        <InboxDetail
          onClickBack={onClickChangeInboxType}
          onClickClose={onCloseQuickAction}
        />
      )}

      {/* <Image src="/gif/icon-loading.gif" height={24} width={24} alt="ok" /> */}
      <div className="flex justify-end items-end gap-4">
        {isToggleQuickAction && (
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
            onClick={onToggleQuickAction}
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
