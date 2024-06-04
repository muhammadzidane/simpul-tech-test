import React from "react";

import classNames from "classnames";
import Image from "next/image";

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
    <div>
      <div className={userClassName}>{username ?? "You"}</div>
      <div className="flex gap-2">
        <Image
          className={horizClassName}
          src="/svg/icon-horiz.svg"
          alt="Icon Horiz"
          height={16}
          width={16}
        />
        <div className={chatClassName}>
          <div>{message}</div>
          <div className="mt-2">19:32</div>
        </div>
      </div>
    </div>
  );
};

export default InboxDetailChat;
