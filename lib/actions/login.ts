"use server";

import prisma from "@/prisma/client";
import { schema } from "../schema/login";

export type State = {
  status?: "error" | "success";
  message: string;
  fields?: Record<string, string>;
};

export async function login(prevState: State, formData: FormData): Promise<State> {
  const fields = Object.fromEntries(formData);
  const parsed = schema.safeParse(fields);

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
      fields: { username: parsed.data.username },
    };
  }

  return {
    status: "success",
    message: "Berhasil Login",
  };
}
