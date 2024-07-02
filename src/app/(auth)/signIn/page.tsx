"use client";
import { Button } from "@/components/Button";
import { TextInput } from "@/components/TextInput";
import { LockKeyhole, Mail, User } from "lucide-react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <>
      <p className="text-sm justify-end absolute top-10 right-10 flex gap-1 items-center">
        Já possuí uma conta?{" "}
        <Link href="/login" className="link">
          Entrar
        </Link>
      </p>

      <form className="flex justify-center items-center w-1/2">
        <div className="flex flex-col gap-6 w-1/2 max-w-[400px]">
          <h1 className="font-semibold text-3xl mb-2">Cadastrar-se</h1>
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
          <Button>Cadastrar-se</Button>
        </div>
      </form>
    </>
  );
}
