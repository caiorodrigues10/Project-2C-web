"use client";
import { Button } from "@/components/Button";
import { ClientOnly } from "@/components/ClientOnly";
import { ModalSendEmail } from "@/components/page/forgotPassword/ModalSendEmail";
import { TextInput } from "@/components/TextInput";
import { TimerProvider } from "@/context/TimerContext";
import { LockKeyhole, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-1/2 max-lg:w-full flex px-20 max-lg:px-6">
      <p className="text-sm justify-end absolute top-10 right-10 flex gap-1 items-center">
        Não possuí uma conta?{" "}
        <Link href="/signIn" className="link">
          Cadastre-se
        </Link>
      </p>

      <form className="flex justify-center items-center w-full flex-col gap-6">
        <Image
          src={"/logo-with-bg.svg"}
          alt="Logo Project 2C"
          width={100}
          height={300}
          className="max-lg:block hidden"
        />
        <div className="flex flex-col gap-6 w-full max-w-[400px]">
          <h1 className="font-semibold text-3xl mb-2 max-lg:mb-0 max-lg:text-center">
            Login
          </h1>
          <p className="text-[#61677D] max-lg:block hidden text-center mb-2">
            Bem-vindo! Comece sua jornada agora com nosso motor biométrico!
          </p>
          <TextInput.Root>
            <TextInput.Content>
              <TextInput.Icon>
                <Mail size={16} />
              </TextInput.Icon>
              <TextInput.Input placeholder="E-mail" type={"email"} />
            </TextInput.Content>
            <TextInput.Error description="Email é obrigatório" />
          </TextInput.Root>
          <TextInput.Root>
            <TextInput.Content>
              <TextInput.Icon>
                <LockKeyhole size={16} />
              </TextInput.Icon>
              <TextInput.Input type="password" placeholder="Senha" />
            </TextInput.Content>
            <TextInput.Error description="Senha é obrigatória" />
          </TextInput.Root>
          <Button>Entrar</Button>

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
      </form>
    </div>
  );
}
