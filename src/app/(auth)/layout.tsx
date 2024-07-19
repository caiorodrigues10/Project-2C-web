import Image from "next/image";
import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <section className="flex w-full h-full min-h-screen min-w-screen  max-lg:justify-center">
      <div className="bg-[url('/bg.svg')] bg-cover bg-fixed bg-center bg-no-repeat w-1/2 items-end flex max-lg:w-0">
        <Image
          src={"/logo.svg"}
          alt="Logo Project 2C"
          width={100}
          height={300}
          className="absolute top-8 left-20 max-lg:hidden"
        />
        <p className="text-5xl font-light bg-gradient-to-b from-white to-white/30 inline-block text-transparent bg-clip-text p-20 italic">
          Bem-vindo! <br /> Comece sua jornada agora com nosso <br /> motor
          biométrico!
        </p>
      </div>
      {children}
    </section>
  );
}
