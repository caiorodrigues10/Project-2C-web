import { z } from "zod";

export const schemaLogin = z.object({
  password: z.string().min(1, "Senha é obrigatório"),
  email: z.string().email({ message: "E-mail inválido" }),
});

export type FormLoginProps = z.infer<typeof schemaLogin>;
