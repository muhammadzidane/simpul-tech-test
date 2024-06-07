import React from "react";

import { Divider, Button, Input, Card } from "@/components";

import InboxDetailChat from "./InboxDetailChat";
import InboxDetailHeader from "./InboxDetailHeader";

const CardInboxDetail: React.FC = () => {
  return (
    <Card
      className="!p-0 flex flex-col animate-slide-in-top"
      height="480px"
      width="708px"
    >
      <InboxDetailHeader />

      <div className="px-[19px] py-[14px] mr-1 overflow-y-scroll h-[calc(100%-58px)]">
        <InboxDetailChat message="No worries" type={2} />

        <Divider>Today June 09, 2021</Divider>

        <InboxDetailChat
          message="Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks."
          username="Mary Hilda"
          type={1}
        />

        <Divider>New Message</Divider>

        <InboxDetailChat message="No worries" type={2} />
        <InboxDetailChat
          message="Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks."
          username="Mary Hilda"
          type={1}
        />
      </div>

      <div className="flex flex-1 gap-[13px] px-[20px] py-[14px] mt-auto">
        <Input placeholder="Type a new message" />
        <Button>Send</Button>
      </div>
    </Card>
  );
};

export default CardInboxDetail;
