"use client";
import { Button } from "@/components/Button";
import { ClientOnly } from "@/components/ClientOnly";
import { TextInput } from "@/components/TextInput";
import { TimerProvider } from "@/context/TimerContext";
import { useToast } from "@/context/ToastContext";
import { login } from "@/services/auth/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { LockKeyhole, Mail } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { ModalSendEmail } from "../../forgotPassword/ModalSendEmail";
import { FormLoginProps, schemaLogin } from "./types";
import { nookiesProvider } from "@/providers/cookiesProviders";

export function FormLogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginProps>({
    resolver: zodResolver(schemaLogin),
  });
  const { addToast, removeToast } = useToast();
  const { push } = useRouter();
  const { setCookies } = nookiesProvider();
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = useCallback(
    async (data: FormLoginProps) => {
      setIsLoading(true)
      const response = await login(data);

      if (response.result === "success") {
        addToast({
          type: "success",
          message: response.message,
          onClose: removeToast,
        });

        setCookies({
          userCookies: {
            token: response.data?.token,
            email: response.data?.user.email,
            name: response.data?.user.name,
          },
        });
        push("/services");
      } else {
        addToast({
          type: "error",
          message: response.message,
          onClose: removeToast,
        });
      }
      setIsLoading(false)
    },
    [addToast, push, removeToast, setCookies]
  );

  return (
    <div className="flex justify-center items-center w-full flex-col gap-6">
      <Image
        src={"/logo-with-bg.svg"}
        alt="Logo Project 2C"
        width={100}
        height={300}
        className="max-lg:block hidden"
      />
      <div className="flex flex-col gap-2 w-full max-w-[400px]">
        <h1 className="font-semibold text-3xl mb-2 max-lg:mb-0 max-lg:text-center">
          Login
        </h1>
        <p className="text-[#61677D] max-lg:block hidden text-center mb-2">
          Bem-vindo! Comece sua jornada agora com nosso motor biométrico!
        </p>
        <form
          className="flex w-full flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextInput.Root>
            <TextInput.Content>
              <TextInput.Icon>
                <Mail size={16} />
              </TextInput.Icon>
              <TextInput.Input
                placeholder="E-mail"
                type={"email"}
                {...register("email")}
              />
            </TextInput.Content>
            <TextInput.Error
              isInvalid={!!errors.email?.message}
              description={errors.email?.message}
            />
          </TextInput.Root>
          <TextInput.Root>
            <TextInput.Content>
              <TextInput.Icon>
                <LockKeyhole size={16} />
              </TextInput.Icon>
              <TextInput.Input
                type="password"
                placeholder="Senha"
                {...register("password")}
              />
            </TextInput.Content>
            <TextInput.Error
              isInvalid={!!errors.password?.message}
              description={errors.password?.message}
            />
          </TextInput.Root>
          <Button type="submit" isLoading={isLoading}>Entrar</Button>
        </form>
        <ClientOnly
          fallback={
            <div className="h-4 w-40 rounded-md -mt-2 animate-pulse bg-slate-300" />
          }
        >
          <TimerProvider>
            <ModalSendEmail />
          </TimerProvider>
        </ClientOnly>
      </div>
    </div>
  );
}
