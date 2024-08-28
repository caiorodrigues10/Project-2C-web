import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { ClientOnly } from "@/components/ClientOnly";
import { CardsWelcome } from "@/components/page/home/CardsWelcome";
import { TextTech } from "@/components/page/home/TextTech";
import { TextInput } from "@/components/TextInput";
import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Plus,
} from "lucide-react";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function HomePage() {
  const token = cookies().get("2c.token");

  if (token) {
    redirect("/services");
  }

  return (
    <div className="flex flex-col gap-12">
      <div className="grid grid-cols-12 gap-4">
        <ClientOnly
          fallback={
            <>
              <Card className="card flex max-sm:flex-col gap-4 p-6 col-span-6 max-xl:col-span-12 !bg-[#F2F5FF] !border-[#D1DBFF] items-center">
                <Image alt="" src="/user-1.svg" width={256} height={200} />
                <div className="flex flex-col gap-2">
                  <h1 className="font-semibold text-2xl text-end max-sm:text-center">
                    Integre o nosso motor biométrico em seu software!
                  </h1>
                  <p className="text-end text-md text-zinc-500 max-sm:text-center">
                    Disponibilizamos nosso motor biométrico gratuitamente, para
                    que sua empresa possa manter a segurança e evitar fraudes!
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
          }
        >
          <CardsWelcome />
        </ClientOnly>
        <ClientOnly
          fallback={<div className="h-full col-span-4 max-xl:col-span-6" />}
        >
          <TextTech />
        </ClientOnly>

        <div className="flex flex-col gap-4 col-span-8 max-xl:col-span-6 max-lg:col-span-12">
          <Card className="w-full button-info-plus flex gap-4 items-center justify-between p-6 col-span-3 !bg-[#F2F5FF] !border-[#D1DBFF]">
            <div className="flex gap-4 items-center w-full">
              <div className="flex items-center justify-center w-[56px] bg-gradient-to-r from-[#24015F] to-black rounded-xl">
                <Image src={"/rust.svg"} alt="Rust" width={56} height={56} />
              </div>
              <p className="text-lg font-medium">
                Utilizamos a linguagem de programação Rust
              </p>
            </div>
            <Plus size={28} className="max-sm:hidden" />
          </Card>
          <Card className="w-full button-info-plus flex gap-4 items-center justify-between p-6 col-span-3 !bg-[#F2F5FF] !border-[#D1DBFF]">
            <div className="flex gap-4 items-center">
              <div className="flex items-center justify-center w-[56px] p-2 bg-gradient-to-r from-[#24015F] to-black rounded-xl">
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
            <Plus size={28} className="max-sm:hidden" />
          </Card>
          <Card className="w-full button-info-plus flex gap-4 items-center justify-between p-6 col-span-3 !bg-[#F2F5FF] !border-[#D1DBFF]">
            <div className="flex gap-4 items-center">
              <div className="flex items-center justify-center w-[56px] p-2 bg-gradient-to-r from-[#24015F] to-black rounded-xl">
                <Image src={"/qdrant.svg"} alt="Rust" width={32} height={32} />
              </div>
              <p className="text-lg font-medium">
                Banco de dados vetorial para comparação das faces
              </p>
            </div>
            <Plus size={28} className="max-sm:hidden" />
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

      <div className="flex justify-center w-full flex-col gap-6">
        <h1 className="text-5xl max-lg:text-center max-lg:mb-8 font-semibold bg-gradient-to-r from-[#24015F] to-black text-transparent bg-clip-text col-span-4 w-full h-full">
          Contatos
        </h1>
        <div className="flex items-center justify-between relative max-md:flex-col max-md:gap-8">
          <div className="flex flex-col gap-8">
            <div className="flex gap-4 items-center">
              <div className="flex h-14 w-14 bg-gradient-to-b from-black to-[#4f00d6] text-white justify-center items-center rounded-2xl">
                <Github size={32} />
              </div>
              <div className="group flex items-center">
                <Link
                  href={"#"}
                  className="font-semibold group-hover:hover:underline text-2xl duration-200 hover:text-violet-900"
                >
                  Github
                </Link>
                <ArrowUpRight className="ml-2 text-transparent group-hover:text-violet-900 duration-200" />
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex h-14 w-14 bg-gradient-to-b from-black to-[#4f00d6] text-white justify-center items-center rounded-2xl">
                <Linkedin size={32} />
              </div>
              <div className="group flex items-center">
                <Link
                  href={"#"}
                  className="font-semibold group-hover:hover:underline text-2xl duration-200 hover:text-violet-900"
                >
                  LinkedIn
                </Link>
                <ArrowUpRight className="ml-2 text-transparent group-hover:text-violet-900 duration-200" />
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex h-14 w-14 bg-gradient-to-b from-black to-[#4f00d6] text-white justify-center items-center rounded-2xl">
                <Instagram size={32} />
              </div>
              <div className="group flex items-center">
                <Link
                  href={"#"}
                  className="font-semibold group-hover:hover:underline text-2xl duration-200 hover:text-violet-900"
                >
                  Instagram
                </Link>
                <ArrowUpRight className="ml-2 text-transparent group-hover:text-violet-900 duration-200" />
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex h-14 w-14 bg-gradient-to-b from-black to-[#4f00d6] text-white justify-center items-center rounded-2xl">
                <Mail size={32} />
              </div>
              <div className="group flex items-center">
                <Link
                  href={"#"}
                  className="font-semibold group-hover:hover:underline text-2xl duration-200 hover:text-violet-900"
                >
                  E-mail
                </Link>
                <ArrowUpRight className="ml-2 text-transparent group-hover:text-violet-900 duration-200" />
              </div>
            </div>
          </div>
          <Image
            src="/phone.svg"
            alt=""
            width={350}
            height={100}
            className="-mr-[30%] mt-16 max-lg:hidden"
          />

          <Card className="flex flex-col gap-6 !p-8 min-w-[464px] max-md:min-w-full">
            <h1 className="text-2xl text-center font-semibold">
              Envie uma mensagem
            </h1>

            <form className="flex flex-col gap-4">
              <TextInput.Root>
                <TextInput.Content>
                  <TextInput.Input placeholder="Nome" />
                </TextInput.Content>
              </TextInput.Root>
              <TextInput.Root>
                <TextInput.Content>
                  <TextInput.Input placeholder="E-mail" />
                </TextInput.Content>
              </TextInput.Root>{" "}
              <TextInput.Root>
                <TextInput.Content>
                  <TextInput.Area placeholder="Mensagem" />
                </TextInput.Content>
              </TextInput.Root>
              <Button>Enviar mensagem</Button>
            </form>
          </Card>
          <Image
            src="/party.svg"
            alt=""
            width={150}
            height={100}
            className="absolute -z-10 -right-[8%] mt-[30%] max-md:hidden"
          />
        </div>
      </div>
    </div>
  );
}
