// "use client";

import React from "react";

import { QuickIcon } from "@/components";

const InboxList: React.FC<InboxTitleProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
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

      <div className="flex-1">
        <div className="flex gap-3 flex-1">
          <div>
            <div className="text-primary font-semibold text-sm">
              109220-Naturalization
            </div>
          </div>
          <div className="text-sm">Januari 1, 2021 19:10</div>
        </div>

        <div>
          <div className="font-semibold text-sm">Cameron Philip:</div>
          <div className="flex justify-between">
            <div className="text-sm">Please check this out!</div>
            <div className="bg-danger w-[10px] h-[10px] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboxList;
