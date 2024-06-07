/* eslint-disable @typescript-eslint/no-misused-promises */
import React from "react";

import { type Metadata } from "next";

import {
  CardInboxDetail,
  QuickAction,
  CardInbox,
  CardTask,
} from "@/components";
import { QuickActionProvider } from "@/contexts";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "...",
};

const Dashboard = () => {
  return (
    <>
      <div className="absolute bottom-6 right-6">
        <QuickActionProvider>
          <QuickAction
            CardInboxDetail={<CardInboxDetail />}
            CardInbox={<CardInbox />}
            CardTask={<CardTask />}
          />
        </QuickActionProvider>
      </div>
    </>
  );
};

export default Dashboard;
