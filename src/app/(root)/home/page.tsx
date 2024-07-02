"use client";
import { Card } from "@/components/Card";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
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
    <div className="flex flex-col gap-12">
      <div className="grid grid-cols-12 gap-4">
        <Card className="card flex gap-4 p-6 col-span-6 !bg-[#F2F5FF] !border-[#D1DBFF] items-center">
          <Image alt="" src="/user-1.svg" width={256} height={200} />
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-2xl text-end">
              Integre o nosso motor biométrico em seu software!
            </h1>
            <p className="text-end text-md text-zinc-500">
              Disponibilizamos nosso motor biométrico gratuitamente, para que
              sua empresa possa manter a segurança e evitar fraudes!
            </p>
          </div>
        </Card>

        <Card className="card flex flex-col gap-4 items-center justify-center p-6 col-span-3 !bg-[#F2F5FF] !border-[#D1DBFF]">
          <Image alt="" src="/1-1.svg" width={70} height={200} />

          <h1 className="font-semibold text-xl text-center">
            Reconhecimento facial 1:1
          </h1>
          <p className="text-md text-zinc-500 text-center">
            Porcentagem de similaridade das faces comparadas
          </p>
        </Card>

        <Card className="card flex flex-col gap-4 items-center justify-center p-6 col-span-3 !bg-[#F2F5FF] !border-[#D1DBFF]">
          <Image alt="" src="/1-n.svg" width={70} height={200} />
          <h1 className="font-semibold text-xl text-center">
            Reconhecimento facial 1:N
          </h1>
          <p className="text-md text-zinc-500 text-center">
            Comparar uma face com várias e retorna todas as similares
          </p>
        </Card>

        <motion.p
          initial={{ x: "-40%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-6xl font-semibold bg-gradient-to-r from-[#24015F] to-black text-transparent bg-clip-text p-2 col-span-4 w-full h-full justify-center flex items-center"
        >
          Tecnologias utilizadas em nosso motor biométrico
        </motion.p>
        <div className="flex flex-col gap-4 col-span-8">
          <Card className="w-full button-info-plus flex gap-4 items-center justify-between p-6 col-span-3 !bg-[#F2F5FF] !border-[#D1DBFF]">
            <div className="flex gap-4 items-center">
              <div className="flex items-center justify-center w-[56px] h-[56px] bg-gradient-to-r from-[#24015F] to-black rounded-xl">
                <Image src={"/rust.svg"} alt="Rust" width={56} height={56} />
              </div>
              <p className="text-lg font-medium">
                Utilizamos a linguagem de programação Rust
              </p>
            </div>
            <Plus size={28} />
          </Card>
          <Card className="w-full button-info-plus flex gap-4 items-center justify-between p-6 col-span-3 !bg-[#F2F5FF] !border-[#D1DBFF]">
            <div className="flex gap-4 items-center">
              <div className="flex items-center justify-center w-[56px] h-[56px] p-2 bg-gradient-to-r from-[#24015F] to-black rounded-xl">
                <Image
                  src={"/terra-form.svg"}
                  alt="Rust"
                  width={56}
                  height={56}
                />
              </div>
              <p className="text-lg font-medium">
                Disponibilizamos um Terraform para a integração
              </p>
            </div>
            <Plus size={28} />
          </Card>
          <Card className="w-full button-info-plus flex gap-4 items-center justify-between p-6 col-span-3 !bg-[#F2F5FF] !border-[#D1DBFF]">
            <div className="flex gap-4 items-center">
              <div className="flex items-center justify-center w-[56px] h-[56px] p-2 bg-gradient-to-r from-[#24015F] to-black rounded-xl">
                <Image src={"/qdrant.svg"} alt="Rust" width={32} height={32} />
              </div>
              <p className="text-lg font-medium">
                Banco de dados vetorial para comparação das faces
              </p>
            </div>
            <Plus size={28} />
          </Card>
        </div>
      </div>

      <div className="flex justify-center w-full flex-col gap-6">
        <h1 className="text-5xl font-semibold bg-gradient-to-r from-[#24015F] to-black text-transparent bg-clip-text p-2 col-span-4 w-full h-full justify-center flex items-center">
          Sobre nós
        </h1>
        <p className="text-center text-lg text-zinc-500">
          Este é um projeto Open Source feito pela comunidade de desenvolvedores
          para outros desenvolvedores e para empresas que buscam uma forma mais
          segura de autenticação em seus softwares. A ideia surgiu de um
          trabalho de conclusão de curso ( TCC ), ele foi realizado pelo CEO
          Caio Eduardo Zufi e pelo CTO Caio Henrique Rodrigues no último ano de
          formação deles. O projeto teve inicio quando foi percebido um
          monopólio no mercado de autenticação por biometria facial, onde eles
          precificavam os serviços de autenticação com valores muito altos e
          injustos. Então o projeto foi criado para que a comunidade de
          desenvolvedores e as empresas que precisam utilizar ou utilizam esta
          forma de autenticação, consigam utilizar ela de forma gratuita e
          simples!
        </p>
      </div>
    </div>
  );
}
