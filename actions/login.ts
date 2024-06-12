"use server";

import prisma from "@/prisma/client";

export async function login(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const user = await prisma.user.findUnique({
    where: {
      username: username as string,
    },
  });

  if (!user) {
    return console.log({ error: "User Tidak Ditemukan" });
  }

  console.log({ username, password, user });
}
