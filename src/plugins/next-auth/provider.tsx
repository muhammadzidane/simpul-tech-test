"use client";

import React from "react";

import { SessionProvider } from "next-auth/react";

import { type ChildrenProps } from "@/types/props";

const NextAuthProvider: React.FC<ChildrenProps> = ({ children }) => (
  <SessionProvider>{children}</SessionProvider>
);

export default NextAuthProvider;
