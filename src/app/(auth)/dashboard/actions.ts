"use server";

import { signOut } from "@/helpers/auth";

export const logoutAction = async () => {
  await signOut();
};
