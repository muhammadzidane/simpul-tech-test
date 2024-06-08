/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";

import { Divider, Button, Input, Card } from "@/components";
import { useQuickActionContext } from "@/contexts";
import { isOdd } from "@/helpers";

import { useDashboardInboxDetail } from "../../hooks/dashboard";
import InboxDetailChat from "./InboxDetailChat";
import InboxDetailHeader from "./InboxDetailHeader";

const CardInboxDetail: React.FC = () => {
  const { inboxDetailId } = useQuickActionContext();
  const { isLoadingInboxDetail, dataInboxDetail } =
    useDashboardInboxDetail(inboxDetailId);

  return (
    <Card
      className="!p-0 flex flex-col animate-slide-in-top"
      height="480px"
      width="708px"
    >
      <InboxDetailHeader title="oe" />

      <div className="px-[19px] py-[14px] mr-1 overflow-y-scroll h-[calc(100%-58px)]">
        {dataInboxDetail?.data.map(
          ({ message, owner, id }, messageIndex: number) => (
            <InboxDetailChat
              username={
                isOdd(messageIndex)
                  ? owner.firstName + " " + owner.lastName
                  : undefined
              }
              type={isOdd(messageIndex) ? 1 : 2}
              message={message}
              key={id}
            />
          )
        )}

        {/* <Divider>Today June 09, 2021</Divider>

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
        /> */}
      </div>

      <div className="flex flex-1 gap-[13px] px-[20px] py-[14px] mt-auto">
        <Input placeholder="Type a new message" />
        <Button>Send</Button>
      </div>
    </Card>
  );
};

export default CardInboxDetail;
