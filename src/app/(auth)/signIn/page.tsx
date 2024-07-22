"use client";
import { Button } from "@/components/Button";
import { CheckBox } from "@/components/CheckBox";
import { TextInput } from "@/components/TextInput";
import { LockKeyhole, Mail, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="w-1/2 max-lg:w-full flex px-20 max-lg:px-6">
      <p className="text-sm justify-end absolute top-10 right-10 flex gap-1 items-center ">
        Já possuí uma conta?{" "}
        <Link href="/login" className="link">
          Entrar
        </Link>
      </p>

      <form className="flex justify-center items-center w-full flex-col gap-6 max-lg:pt-32 max-lg:pb-16">
        <Image
          src={"/logo-with-bg.svg"}
          alt="Logo Project 2C"
          width={100}
          height={300}
          className="max-lg:block hidden"
        />
        <div className="flex flex-col gap-6 w-full max-w-[400px]">
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
              <TextInput.Input placeholder="Nome completo" />
            </TextInput.Content>
            <TextInput.Error description="Nome é obrigatório" />
          </TextInput.Root>

          <TextInput.Root>
            <TextInput.Content>
              <TextInput.Icon>
                <User size={16} />
              </TextInput.Icon>
              <TextInput.Input placeholder="CPF" type={"text"} />
            </TextInput.Content>
            <TextInput.Error description="CPF é obrigatório" />
          </TextInput.Root>

          <TextInput.Root>
            <TextInput.Content>
              <TextInput.Icon>
                <Mail size={16} />
              </TextInput.Icon>
              <TextInput.Input placeholder="E-mail" type={"email"} />
            </TextInput.Content>
            <TextInput.Error description="E-mail é obrigatório" />
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
              />
            </TextInput.Content>
            <TextInput.Error description="Senha é obrigatória" />
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
              />
            </TextInput.Content>
            <TextInput.Error description="Confirmar senha é obrigatório" />
          </TextInput.Root>

          <CheckBox.Root>
            <CheckBox.CheckBox />
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
          <Button>Cadastrar-se</Button>
        </div>
      </form>
    </div>
  );
}
