"use client";
import { Button } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { PROVIDERS } from "@/providers";
import { useRouter } from "next/navigation";

export default function Continue({ name }: { name: string }) {
  const { resetCookies } = PROVIDERS.cookies();
  const { push, refresh } = useRouter();

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
          <span className="text-4xl">Olá! 👋🏼</span> <br />
          Bem-vindo de volta!
        </h1>
        <p className="text-[#61677D] mb-4">
          Aqui você pode continuar com a conta atual ou pode trocar de conta.
        </p>
        <Button onClick={() => push("/services")}>Continuar como {name}</Button>
        <button
          onClick={async () => {
            resetCookies();
            refresh();
          }}
          className="link w-fit"
        >
          Acessar com outra conta
        </button>
      </div>
    </div>
  );
}
