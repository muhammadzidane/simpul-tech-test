"use client";

import React from "react";

import Image from "next/image";

import { useQuickActionContext } from "@/contexts";

const InboxDetailHeader: React.FC<InboxDetailHeaderProps> = ({ title }) => {
  const { onCloseQuickAction } = useQuickActionContext();

  return (
    <div className="flex justify-between items-center h-[58px] border-b border-gray-3 px-6">
      <div className="flex gap-3">
        <Image
          onClick={onCloseQuickAction}
          src={`/svg/icon-arrow-left.svg`}
          className="cursor-pointer"
          alt="Arrow Left"
          height={24}
          width={24}
        />
        <div>
          <div className="text-primary text-base font-semibold">
            I-423 - {title}
          </div>
        </div>
      </div>
      <Image
        onClick={onCloseQuickAction}
        className="cursor-pointer"
        src="/svg/icon-close.svg"
        alt="Icon Close"
        color="red"
        height={14}
        width={14}
      />
    </div>
  );
};

export default InboxDetailHeader;
