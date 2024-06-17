"use server";

import { redirect } from "next/navigation";
import prisma from "@/prisma/client";
import { schema } from "../schema/login";

export type State = {
  status?: "error" | "success";
  message: string;
} | null;

export async function login(prevState: State, formData: FormData): Promise<State> {
  const username = formData.get("username");
  const password = formData.get("password");

  const parsed = schema.safeParse({ username, password });
  if (!parsed.success) {
    return {
      status: "error",
      message: "Invalid Form Data",
    };
  }

  const user = await prisma.user.findUnique({
    where: {
      username: parsed.data.username,
    },
  });

  if (!user) {
    return {
      status: "error",
      message: "Username / Password Salah",
    };
  }

  redirect("/");
}
