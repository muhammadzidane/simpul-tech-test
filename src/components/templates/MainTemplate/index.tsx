import React from "react";

import Image from "next/image";

const MainTemplate: React.FC<ChildrenProps> = ({ children }) => (
  <div className="flex h-screen">
    <div className="bg-black-1 w-[281px] shadow-md border-r border-white-1">
      <div className="p-4">
        {/* <div className="text-[18px] font-bold mb-4">Sidebar</div>
        <SidebarItem icon="dashboard">Dashboard</SidebarItem>
        <SidebarItem icon="overview">Overview</SidebarItem> */}
      </div>
    </div>
    <div className="flex flex-col flex-1">
      <div className="bg-black-2 h-[58px] flex items-center px-4">
        <div className="flex justify-between items-center">
          <Image
            src={`/svg/icon-search.svg`}
            alt="Dashboard"
            height={16}
            width={16}
          />
        </div>
      </div>
      <div className="bg-black-1 h-full p-8">{children}</div>
    </div>
  </div>
);

export default MainTemplate;
