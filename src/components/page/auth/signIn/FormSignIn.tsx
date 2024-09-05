"use client";
import { Button } from "@/components/Button";
import { CheckBox } from "@/components/CheckBox";
import { TextInput } from "@/components/TextInput";
import { useToast } from "@/context/ToastContext";
import { createUser } from "@/services/users/client";
import { cpfMask, phoneMask, removedMask } from "@/utils/MaskProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { LockKeyhole, Mail, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { FormSignInProps, schemaCreateUser } from "./types";

export function FormSignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormSignInProps>({
    resolver: zodResolver(schemaCreateUser),
  });
  const { addToast, removeToast } = useToast();
  const { push } = useRouter();
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = useCallback(
    async (data: FormSignInProps) => {
      
      if (!termsAndConditions) {
        addToast({
          type: "error",
          message: "Termos e condições é obrigatório",
          onClose: removeToast,
        });
        return;
      }
      setIsLoading(true)
      const response = await createUser(data);

      if (response.result === "success") {
        addToast({
          type: "success",
          message: response.message,
          onClose: removeToast,
        });

        push("/login");
      } else {
        addToast({
          type: "error",
          message: response.message,
          onClose: removeToast,
        });
      }
      setIsLoading(false)
    },
    [termsAndConditions, addToast, push, removeToast]
  );

  return (
    <form
      className="flex justify-center items-center w-full flex-col gap-6 max-lg:pt-32 max-lg:pb-16"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Image
        src={"/logo-with-bg.svg"}
        alt="Logo Project 2C"
        width={100}
        height={300}
        className="max-lg:block hidden"
      />
      <div className="flex flex-col gap-2 w-full max-w-[400px]">
        <h1 className="font-semibold text-3xl mb-2 max-lg:mb-0 max-lg:text-center">
          Cadastrar-se
        </h1>
        <p className="text-[#61677D] max-lg:block hidden text-center mb-2">
          Bem-vindo! Comece sua jornada agora com nosso motor biométrico!
        </p>
        <TextInput.Root>
          <TextInput.Content>
            <TextInput.Icon>
              <User size={16} />
            </TextInput.Icon>
            <TextInput.Input
              {...register("name")}
              placeholder="Nome completo"
            />
          </TextInput.Content>
          <TextInput.Error
            description={errors?.name?.message}
            isInvalid={!!errors?.name?.message}
          />
        </TextInput.Root>

        <TextInput.Root>
          <TextInput.Content>
            <TextInput.Icon>
              <User size={16} />
            </TextInput.Icon>
            <TextInput.Input
              {...register("cpf")}
              placeholder="CPF"
              type={"text"}
              onChange={(e) => setValue("cpf", cpfMask(e.target.value))}
            />
          </TextInput.Content>
          <TextInput.Error
            description={errors?.cpf?.message}
            isInvalid={!!errors?.cpf?.message}
          />
        </TextInput.Root>

        <TextInput.Root>
          <TextInput.Content>
            <TextInput.Icon>
              <Mail size={16} />
            </TextInput.Icon>
            <TextInput.Input
              {...register("email")}
              placeholder="E-mail"
              type={"email"}
            />
          </TextInput.Content>
          <TextInput.Error
            description={errors?.email?.message}
            isInvalid={!!errors?.email?.message}
          />
        </TextInput.Root>

        <TextInput.Root>
          <TextInput.Content>
            <TextInput.Icon>
              <Mail size={16} />
            </TextInput.Icon>
            <TextInput.Input
              {...register("telephone")}
              placeholder="Telefone"
              onChange={(e) => setValue("telephone", phoneMask(e.target.value))}
              type={"tel"}
            />
          </TextInput.Content>
          <TextInput.Error
            description={errors?.telephone?.message}
            isInvalid={!!errors?.telephone?.message}
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
              autoComplete={"new-password"}
              {...register("password")}
            />
          </TextInput.Content>
          <TextInput.Error
            description={errors?.password?.message}
            isInvalid={!!errors?.password?.message}
          />
        </TextInput.Root>
        <TextInput.Root>
          <TextInput.Content>
            <TextInput.Icon>
              <LockKeyhole size={16} />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              placeholder="Confirmar senha"
              autoComplete={"new-password"}
              {...register("confirmPassword")}
            />
          </TextInput.Content>
          <TextInput.Error
            description={errors?.confirmPassword?.message}
            isInvalid={!!errors?.confirmPassword?.message}
          />
        </TextInput.Root>

        <CheckBox.Root>
          <CheckBox.CheckBox
            onChange={(e) => setTermsAndConditions(e.target.checked)}
          />
          <CheckBox.Label className="text-xs">
            Li e aceitos os{" "}
            <Link href={""} className="link !text-xs">
              Termos e condições
            </Link>{" "}
            e{" "}
            <Link href={""} className="link !text-xs">
              Política de privacidade
            </Link>
          </CheckBox.Label>
        </CheckBox.Root>
        <Button className="mt-4" type="submit" isLoading={isLoading}>Cadastrar-se</Button>
      </div>
    </form>
  );
}
