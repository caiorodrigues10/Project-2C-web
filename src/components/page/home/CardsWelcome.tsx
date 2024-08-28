"use client";
import { Card } from "@/components/Card";
import Image from "next/image";
import { useEffect } from "react";

export function CardsWelcome() {
  const handleMouseMove = (event: any) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
      });
    };
  }, []);

  return (
    <>
      <Card className="card flex max-sm:flex-col gap-4 p-6 col-span-6 max-xl:col-span-12 !bg-[#F2F5FF] !border-[#D1DBFF] items-center">
        <Image alt="" src="/user-1.svg" width={256} height={200} />
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-2xl text-end max-sm:text-center">
            Integre o nosso motor biométrico em seu software!
          </h1>
          <p className="text-end text-md text-zinc-500 max-sm:text-center">
            Disponibilizamos nosso motor biométrico gratuitamente, para que sua
            empresa possa manter a segurança e evitar fraudes!
          </p>
        </div>
      </Card>

      <Card className="card flex flex-col gap-4 items-center justify-center p-6 col-span-3 max-xl:col-span-6 max-sm:col-span-12 !bg-[#F2F5FF] !border-[#D1DBFF]">
        <Image alt="" src="/1-1.svg" width={70} height={200} />

        <h1 className="font-semibold text-xl text-center">
          Reconhecimento facial 1:1
        </h1>
        <p className="text-md text-zinc-500 text-center">
          Porcentagem de similaridade das faces comparadas
        </p>
      </Card>

      <Card className="card flex flex-col gap-4 items-center justify-center p-6 col-span-3 max-xl:col-span-6 max-sm:col-span-12 !bg-[#F2F5FF] !border-[#D1DBFF]">
        <Image alt="" src="/1-n.svg" width={70} height={200} />
        <h1 className="font-semibold text-xl text-center">
          Reconhecimento facial 1:N
        </h1>
        <p className="text-md text-zinc-500 text-center">
          Comparar uma face com várias e retorna todas as similares
        </p>
      </Card>
    </>
  );
}
