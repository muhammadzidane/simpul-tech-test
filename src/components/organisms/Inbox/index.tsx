import React from "react";

import { Input, Card } from "@/components";

import { InboxList } from "./components";

const Inbox = () => {
  return (
    <Card height="480px" width="525px">
      <div className="mb-5">
        <Input placeholder="Search" icon="icon-search" />
      </div>

      <div className="flex flex-col gap-4">
        <InboxList />
        <InboxList />
      </div>
    </Card>
  );
};

export default Inbox;
