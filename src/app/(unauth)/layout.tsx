import React from "react";

import { type ChildrenProps } from "@/types/props";

const Layout: React.FC<ChildrenProps> = ({ children }) => (
  <div className="bg-gray-100 flex items-center justify-center h-screen">
    <div className="bg-white w-[360px] p-7 rounded-lg shadow-md">
      {children}
    </div>
  </div>
);

export default Layout;
