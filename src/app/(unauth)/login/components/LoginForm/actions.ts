"use server";

import { AuthError } from "next-auth";
import { z } from "zod";

import { extractInitialData } from "@/helpers";
import { signIn } from "@/helpers/auth";

import { type LoginActionResult } from "./types";

export const loginAction = async (
  _: unknown,
  formData: FormData
): Promise<Record<string, string> | LoginActionResult | undefined> => {
  const schema = z.object({
    password: z.string().min(1, {
      message: "Password content must be at least 1 character long.",
    }),
    user: z.string().min(1, {
      message: "Username content must be at least 1 character long.",
    }),
  });

  const validatedFields = schema.safeParse({
    password: formData.get("password"),
    user: formData.get("user"),
  });

  // Failed
  if (!validatedFields.success) {
    return extractInitialData(validatedFields.error.flatten().fieldErrors);
  }

  try {
    await signIn("credentials", validatedFields.data);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { serverError: "Invalid credentials." };
        case "CallbackRouteError":
          return { serverError: error.cause?.err?.message };
        default:
          return { serverError: "Something went wrong." };
      }
    }
    throw error;
  }
};
