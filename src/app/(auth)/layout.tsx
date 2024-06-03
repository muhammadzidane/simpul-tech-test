import React from "react";

import { MainTemplate } from "@/components";
import { type ChildrenProps } from "@/types/props";

const Layout: React.FC<ChildrenProps> = ({ children }) => (
  <MainTemplate>{children}</MainTemplate>
);

export default Layout;
