"use client";
import { Button } from "@/components/Button";
import { TextInput } from "@/components/TextInput";
import Image from "next/image";
import Link from "next/link";

export default function AuthPage() {
  return (
    <section className="flex w-full h-full min-h-screen min-w-screen">
      <div className="bg-[url('/bg.svg')] bg-cover bg-fixed bg-center bg-no-repeat w-1/2 items-end flex">
        <Image
          src={"/logo.svg"}
          alt="Logo Project 2C"
          width={100}
          height={300}
          className="absolute top-8 left-20"
        />
        <p className="text-5xl font-light bg-gradient-to-b from-white to-white/30 inline-block text-transparent bg-clip-text p-20 italic">
          Bem-vindo! <br /> Comece sua jornada agora com nosso <br /> motor
          biométrico!
        </p>
      </div>
      <form className="flex justify-center items-center w-1/2">
        <div className="flex flex-col gap-6 w-1/2">
          <h1 className="font-semibold text-3xl mb-2">Login</h1>
          <TextInput.Root>
            <TextInput.Content>
              <TextInput.Input placeholder="E-mail" type={"email"} />
            </TextInput.Content>
            <TextInput.Error description="Email é obrigatório" />
          </TextInput.Root>
          <TextInput.Root>
            <TextInput.Content>
              <TextInput.Input type="password" placeholder="Senha" />
            </TextInput.Content>
            <TextInput.Error description="Senha é obrigatória" />
          </TextInput.Root>
          <Button>Entrar</Button>

          <Link className="link -mt-3" href={""}>
            Esqueceu sua senha?
          </Link>
        </div>
      </form>
    </section>
  );
}
