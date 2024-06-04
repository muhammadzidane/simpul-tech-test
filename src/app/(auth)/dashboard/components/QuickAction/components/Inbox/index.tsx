import React from "react";

import { Input } from "@/components";

import { InboxList } from "./components";

const Inbox = () => {
  return (
    <div className="w-[520px] h-[480px] bg-white-1 mb-4 py-4 px-6 rounded-sm">
      <div className="mb-5">
        <Input placeholder="Search" icon="icon-search" />
      </div>

      <div className="flex flex-col gap-4">
        <InboxList />
        <InboxList />
      </div>
    </div>
  );
};

export default Inbox;
