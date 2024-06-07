import React from "react";

import classNames from "classnames";
import Image from "next/image";

import { Popover } from "@/components";

const InboxDetailChat: React.FC<InboxDetailChatProps> = ({
  username,
  message,
  type,
}) => {
  const userClassName = classNames("font-semibold mb-1", {
    "text-right text-purple-1": type === 2,
    "text-warning": type === 1,
  });
  const chatClassName = classNames("rounded-lg p-[10px] w-[550px] max-w-fit", {
    "bg-light-blue-1": type === 2,
    "bg-secondary": type === 1,
  });
  const horizClassName = classNames("mb-auto cursor-pointer", {
    "order-2": type === 1,
    "ml-auto": type === 2,
  });

  return (
    <div className="text-sm">
      <div className={userClassName}>{username ?? "You"}</div>
      <div className="flex gap-2">
        <div className={horizClassName}>
          <Popover
            button={
              <Image
                src="/svg/icon-horiz.svg"
                alt="Icon Horiz"
                height={16}
                width={16}
              />
            }
            position={
              (type === 1 && message.length >= 79) ||
              (type === 2 && message.length <= 79)
                ? "left"
                : "right"
            }
          >
            <div className="w-[126px] cursor-pointer">
              <div className="p-2 border-b border-gray-2 text-primary">
                Edit
              </div>
              <div className="p-2 text-danger">Delete</div>
            </div>
          </Popover>
        </div>
        <div className={chatClassName}>
          <div>{message}</div>
          <div className="mt-2">19:32</div>
        </div>
      </div>
    </div>
  );
};

export default InboxDetailChat;
