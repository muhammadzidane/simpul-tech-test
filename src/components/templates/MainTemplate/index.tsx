import React from "react";

import { type ChildrenProps } from "@/types/props";

import { SidebarItem } from "./components";

const MainTemplate: React.FC<ChildrenProps> = ({ children }) => (
  <div className="flex h-screen">
    <div className="bg-white w-[281px] shadow-md">
      <div className="p-4">
        <div className="text-[18px] font-bold mb-4">Sidebar</div>
        <SidebarItem icon="dashboard">Dashboard</SidebarItem>
        <SidebarItem icon="overview">Overview</SidebarItem>
      </div>
    </div>
    <div className="flex flex-col flex-1">
      <div className="bg-white p-4 shadow-md sha">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-[18px]">Navbar</h1>
        </div>
      </div>
      <div className="bg-gray-1 p-8">{children}</div>
    </div>
  </div>
);

export default MainTemplate;
