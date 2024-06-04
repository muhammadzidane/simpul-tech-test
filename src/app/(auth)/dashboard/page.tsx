/* eslint-disable @typescript-eslint/no-misused-promises */
import React from "react";

import { type Metadata } from "next";

import { Button } from "@/components";
// import { usePosts } from "@/hooks/post";

import { logoutAction } from "./actions";
import { Page } from "./components";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "...",
};

const Dashboard = async () => {
  // const { isPending, data } = usePosts(10);

  // if (isPending) return <div>Loading</div>;

  return (
    <div>
      <h1>Dashboad</h1>
      <form action={logoutAction}>
        <Button type="submit">Logout</Button>
      </form>
      <Page />
    </div>
  );
};

export default Dashboard;
