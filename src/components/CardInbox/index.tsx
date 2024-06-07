import React from "react";

import { Input, Card } from "@/components";

import InboxList from "./InboxList";
// import { dashboardFetchInboxList } from "@/request/dashboard";

const CardInbox: React.FC = async () => {
  // const inboxList = await dashboardFetchInboxList({ limit: 10, page: 1 });

  // console.log("wahhh", inboxList.data);

  return (
    <Card className="animate-slide-in-top flex" height="480px" width="525px">
      <div className="flex flex-1 flex-col gap-5 overflow-y-hidden">
        <Input icon="icon-search-black" placeholder="Search" />

        <div className="flex flex-col flex-1 gap-4 overflow-y-scroll pr-2">
          <InboxList />
          {/* <InboxList />
          <InboxList />
          <InboxList />
          <InboxList />
          <InboxList />
          <InboxList /> */}
          {/* {inboxList.data.map(() => (
          ))} */}
        </div>
      </div>
    </Card>
  );
};

export default CardInbox;
