"use client";

import React from "react";

import dayjs from "dayjs";

import { QuickIcon } from "@/components";
import { useQuickActionContext } from "@/contexts";

const InboxList: React.FC<InboxListProps> = ({
  message,
  title,
  date,
  name,
  id,
}) => {
  const { onClickToInboxDetail, setInboxDetailId } = useQuickActionContext();

  const onClickToInboxDetailWithId = () => {
    onClickToInboxDetail();
    setInboxDetailId(id);
  };

  return (
    <div
      onClick={onClickToInboxDetailWithId}
      className="flex gap-3 border-b border-gray-1 pl-4 pb-5 cursor-pointer"
    >
      <div className="relative">
        <div className="absolute -left-4">
          <QuickIcon
            backgroundColor="bg-gray-1"
            icon="icon-person-gray"
            backgroundSize="34px"
            iconSize={13}
          />
        </div>
        <div>
          <QuickIcon
            backgroundColor="bg-primary"
            icon="icon-person-white"
            backgroundSize="34px"
            iconSize={18}
          />
        </div>
      </div>

      <div className="flex-1 text-sm">
        <div className="flex gap-3 flex-1">
          <div>
            <div className="text-primary font-semibold">{title}</div>
          </div>
          <div>{dayjs(date).format("MMMM D, YYYY HH:mm")}</div>
        </div>

        <div>
          <div className="font-semibold ">{name}:</div>
          <div className="flex justify-between">
            <div className="">{message}</div>
            {message.length <= 15 && (
              <div className="bg-danger w-[10px] h-[10px] rounded-full"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboxList;
