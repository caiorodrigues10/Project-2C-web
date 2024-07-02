"use client";
import { Button } from "@/components/Button";
import { ClientOnly } from "@/components/ClientOnly";
import { ModalSendEmail } from "@/components/page/forgotPassword/ModalSendEmail";
import { TextInput } from "@/components/TextInput";
import { TimerProvider } from "@/context/TimerContext";
import { LockKeyhole, Mail } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <p className="text-sm justify-end absolute top-10 right-10 flex gap-1 items-center">
        Não possuí uma conta?{" "}
        <Link href="/signIn" className="link">
          Cadastre-se
        </Link>
      </p>

      <form className="flex justify-center items-center w-1/2">
        <div className="flex flex-col gap-6 w-1/2 max-w-[400px]">
          <h1 className="font-semibold text-3xl mb-2">Login</h1>
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
    </>
  );
}
