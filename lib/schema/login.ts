import { z } from "zod";

export const schema = z.object({
  username: z.string().trim().min(1, { message: "Wajib Diisi" }),
  password: z.string().trim().min(6, { message: "6 Karakter" }),
});

export type Schema = z.infer<typeof schema>;
