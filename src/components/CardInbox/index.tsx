import React from "react";

import { Input, Card } from "@/components";
import { dashboardFetchInboxList } from "@/request/dashboard";

import InboxList from "./InboxList";

const CardInbox: React.FC = async () => {
  const inboxList = await dashboardFetchInboxList({
    limit: "10",
    page: "1",
  });

  return (
    <Card className="animate-slide-in-top flex" height="480px" width="525px">
      <div className="flex flex-1 flex-col gap-5 overflow-y-hidden">
        <Input icon="icon-search-black" placeholder="Search" />

        <div className="flex flex-col flex-1 gap-4 overflow-y-scroll pr-2">
          {inboxList?.data.map(({ publishDate, message, owner, id }) => (
            <InboxList
              name={owner.firstName + " " + owner.firstName}
              date={publishDate}
              message={message}
              title={id}
              key={id}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default CardInbox;
