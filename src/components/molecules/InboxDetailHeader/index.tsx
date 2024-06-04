import React from "react";

import Image from "next/image";

const InboxDetailHeader = () => {
  return (
    <div className="flex justify-between items-center h-[58px] border-b border-gray-3 px-6">
      <div className="flex gap-3">
        <Image
          src={`/svg/icon-arrow-left.svg`}
          alt="Arrow Left"
          height={24}
          width={24}
        />
        <div>
          <div className="text-primary text-[16px] font-semibold">
            I-423 - AMARKHIL, Obaidullah [Affirmative Filling with ZHN]
          </div>
        </div>
      </div>
      <Image
        src="/svg/icon-close.svg"
        alt="Icon Close"
        // className="text-primary cursor-pointer"
        color="red"
        height={14}
        width={14}
      />
    </div>
  );
};

export default InboxDetailHeader;
