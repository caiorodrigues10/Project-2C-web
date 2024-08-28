import { validatePassword } from "@/utils/validatePassword";
import { z } from "zod";

export const schemaRecoveryPassword = z.object({
  email: z.string().email({ message: "E-mail inválido" }),
});

export type FormRecoveryPasswordProps = z.infer<typeof schemaRecoveryPassword>;

export const schemaChangePassword = z
  .object({
    password: z.string().refine(validatePassword, () => ({
      message:
        "A senha deve conter pelo menos 8 caracteres, uma maiúscula, um número e um caractere especial",
    })),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  });

export type FormChangePasswordProps = z.infer<typeof schemaChangePassword>;
