"use client";
import { Button } from "@/components/Button";
import { TextInput } from "@/components/TextInput";
import { useToast } from "@/context/ToastContext";
import { changePassword } from "@/services/users/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { FormChangePasswordProps, schemaChangePassword } from "./types";

export function FormChangePassword({ token }: { token: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const { addToast, removeToast } = useToast();
  const { push } = useRouter();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<FormChangePasswordProps>({
    resolver: zodResolver(schemaChangePassword),
  });

  const onSubmit = useCallback(
    async (data: FormChangePasswordProps) => {
      setIsLoading(true);
      const response = await changePassword(data, token);

      if (response?.result === "success") {
        addToast({
          type: "success",
          onClose: removeToast,
          message:
            response?.message ||
            "Serviço indisponível tente novamente mais tarde",
        });
        push("/login");
      } else {
        addToast({
          type: "error",
          onClose: removeToast,
          message:
            response?.message ||
            "Serviço indisponível tente novamente mais tarde" ||
            "Ocorreu um problema, tente novamente mais tarde",
        });
      }
      setIsLoading(false);
    },
    [addToast, push, token, removeToast]
  );

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <TextInput.Root>
        <TextInput.Content>
          <TextInput.Input
            {...register("password")}
            type="password"
            placeholder="Nova senha"
          />
        </TextInput.Content>
        <TextInput.Error
          isInvalid={!!errors.password?.message}
          description={errors.password?.message}
        />
      </TextInput.Root>
      <TextInput.Root>
        <TextInput.Content>
          <TextInput.Input
            {...register("confirmPassword")}
            type="password"
            placeholder="Confirmar senha"
          />
        </TextInput.Content>
        <TextInput.Error
          isInvalid={!!errors.confirmPassword?.message}
          description={errors.confirmPassword?.message}
        />
      </TextInput.Root>
      <Button
        type="submit"
        isLoading={isLoading}
        loadingText="Alterando senha..."
      >
        Alterar senha
      </Button>
    </form>
  );
}
