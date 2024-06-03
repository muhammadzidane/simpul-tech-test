"use client";

import React, { useRef } from "react";

import { useFormState } from "react-dom";

import { Button, Input } from "@/components";

import { loginAction } from "./actions";

const LoginForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const initialForm = { password: "", user: "" };
  const [error, formAction] = useFormState(loginAction, initialForm);

  return (
    <>
      {error?.serverError && (
        <div className="text-red-400 text-[12px] mb-3">
          {error?.serverError}
        </div>
      )}
      <form action={formAction} ref={formRef}>
        <Input
          placeholder="Enter your username"
          errorMessage={error?.user}
          label="Username"
          name="user"
        />
        <Input
          placeholder="Enter your password"
          errorMessage={error?.password}
          label="Password"
          name="password"
          type="password"
        />
        <Button className="w-full" type="submit">
          Login
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
