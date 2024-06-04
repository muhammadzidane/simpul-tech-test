/* eslint-disable @typescript-eslint/no-misused-promises */
import React from "react";

import { type Metadata } from "next";

import { QuickAction } from "./components";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "...",
};

const Dashboard = async () => {
  return (
    <>
      <div>wkwk</div>
      <QuickAction />
    </>
  );
};

export default Dashboard;
