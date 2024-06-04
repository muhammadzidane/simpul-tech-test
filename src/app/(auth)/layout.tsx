import React from "react";

import { MainTemplate } from "@/components";

const Layout: React.FC<ChildrenProps> = ({ children }) => (
  <MainTemplate>{children}</MainTemplate>
);

export default Layout;
