import { validatePassword } from "@/utils/validatePassword";
import { z } from "zod";

export const schemaCreateUser = z
  .object({
    name: z.string().min(1, "Nome é obrigatório"),
    email: z.string().email({ message: "E-mail inválido" }),
    password: z
      .string({
        required_error: "Senha é obrigatório",
      })
      .refine(validatePassword, () => ({
        message:
          "A senha deve conter pelo menos 8 caracteres, uma maiúscula, um número e um caractere especial",
      })),
    confirmPassword: z.string().min(1, "Confirmar senha é obrigatório"),
    telephone: z.string().min(1, "Telefone é obrigatório"),
    cpf: z.string().min(1, "CPF é obrigatório"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export type FormSignInProps = z.infer<typeof schemaCreateUser>;
