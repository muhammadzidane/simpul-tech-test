"use client";

import React from "react";

import { Divider, Loading, Button, Input, Card } from "@/components";
import { useQuickActionContext } from "@/contexts";
import { isOdd } from "@/helpers";

import { useDashboardInboxDetail } from "../../hooks/dashboard";
import InboxDetailChat from "./InboxDetailChat";
import InboxDetailHeader from "./InboxDetailHeader";

const CardInboxDetail: React.FC = () => {
  const { inboxDetailId } = useQuickActionContext();
  const { isLoadingInboxDetail, dataInboxDetail } =
    useDashboardInboxDetail(inboxDetailId);

  const renderChat = (
    { publishDate, message, owner, id }: DashboardInboxDetailData,
    messageIndex: number,
    messageArray: DashboardInboxDetailData[]
  ) => {
    const isLastMessage = messageIndex + 1 === messageArray.length;
    const username = isOdd(messageIndex)
      ? `${owner.firstName} ${owner.lastName}`
      : undefined;
    const type = isOdd(messageIndex) ? 1 : 2;

    return (
      <div key={id}>
        {isLastMessage && <Divider>New Message</Divider>}
        <InboxDetailChat
          username={username}
          date={publishDate}
          message={message}
          type={type}
        />
      </div>
    );
  };

  return (
    <Card
      className="!p-0 flex flex-col animate-slide-in-top"
      height="480px"
      width="708px"
    >
      {isLoadingInboxDetail ? (
        <Loading title="Loading Chats..." />
      ) : (
        <>
          <InboxDetailHeader
            title={dataInboxDetail?.data[0].owner.title}
            id={dataInboxDetail?.data[0].owner.id}
          />
          <div className="px-[19px] py-[14px] mr-1 overflow-y-scroll h-[calc(100%-58px)]">
            {dataInboxDetail?.data.map(renderChat)}
          </div>
          <div className="flex flex-1 gap-[13px] px-[20px] py-[14px] mt-auto">
            <Input placeholder="Type a new message" />
            <Button>Send</Button>
          </div>
        </>
      )}
    </Card>
  );
};

export default CardInboxDetail;
