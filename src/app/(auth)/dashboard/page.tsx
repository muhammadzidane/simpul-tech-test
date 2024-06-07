/* eslint-disable @typescript-eslint/no-misused-promises */
import React from "react";

import { type Metadata } from "next";

import { CardTask, Inbox } from "@/components";
import { QuickActionProvider } from "@/contexts";

import { QuickAction } from "./components";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "...",
};

const Dashboard = () => {
  return (
    <>
      <div className="absolute bottom-6 right-6">
        <QuickActionProvider>
          <QuickAction CardTask={<CardTask />} Inbox={<Inbox />} />
        </QuickActionProvider>
      </div>
    </>
  );
};

export default Dashboard;
