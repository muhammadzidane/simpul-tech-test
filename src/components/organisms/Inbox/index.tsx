import React from "react";

import { Input, Card } from "@/components";

import { InboxList } from "./components";

const Inbox: React.FC<InboxProps> = ({ onClick }) => {
  // const response = await new Promise((resolve) => setTimeout(resolve, 1000));

  // console.log(response);

  return (
    <Card className="animate-slide-in-top" height="480px" width="525px">
      <div className="mb-5">
        <Input placeholder="Search" icon="icon-search" />
      </div>

      <div className="flex flex-col gap-4">
        <InboxList
          onClick={() => {
            onClick("1");
          }}
        />
        {/* <InboxList
          onClick={() => {
            onClick("2");
          }}
        /> */}
      </div>
    </Card>
  );
};

export default Inbox;
