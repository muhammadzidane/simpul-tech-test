import React from "react";

import {
  InboxDetailHeader,
  InboxDetailChat,
  Divider,
  Button,
  Input,
  Card,
} from "@/components";

const InboxDetail: React.FC<InboxDetailProps> = ({
  onClickClose,
  onClickBack,
}) => {
  return (
    <Card
      className="!p-0 flex flex-col animate-slide-in-top"
      height="480px"
      width="708px"
    >
      <InboxDetailHeader
        onClickClose={onClickClose}
        onClickBack={onClickBack}
      />

      <div className="px-[20px] py-[14px] overflow-y-scroll h-[calc(100%-58px)]">
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

      <div className="flex gap-[13px] px-[20px] py-[14px] mt-auto">
        <Input placeholder="Type a new message" />
        <Button>Send</Button>
      </div>
    </Card>
  );
};

export default InboxDetail;
