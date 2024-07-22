import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ClientOnly } from "../ClientOnly";

export function Footer() {
  return (
    <footer className="flex flex-col w-full mt-32 h-full bg-gradient-to-tr from-[#150031]  to-black pt-16 px-16">
      <div className="flex flex-col w-full items-center">
        <div className="max-w-[1500px] w-full z-10 flex flex-col gap-6">
          <div className="flex justify-between max-lg:flex-col max-lg:gap-8">
            <div className="flex flex-col gap-6 max-lg:items-center">
              <Image
                src={"/logo-with-project.svg"}
                alt="Logo Project 2C"
                width={180}
                height={10}
              />
              <p className="text-[#C5C5C5] text-lg max-lg:text-center">
                Mergulhe nas profundezas do reconhecimento facial
              </p>
              <ul className="flex gap-4">
                <li className="icon-footer">
                  <Github size={24} />
                </li>
                <li className="icon-footer">
                  <Linkedin size={24} />
                </li>
                <li className="icon-footer">
                  <Instagram size={24} />
                </li>
                <li className="icon-footer">
                  <Mail size={24} />
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6 max-lg:items-center ">
              <h3 className="font-semibold text-xl text-white">Links</h3>
              <ul className="flex flex-col gap-2 max-lg:items-center">
                <li className="text-[#D1D1D1] hover:text-white duration-100 cursor-pointer hover:underline hover:scale-x-105">
                  Home
                </li>
                <li className="text-[#D1D1D1] hover:text-white duration-100 cursor-pointer hover:underline hover:scale-x-105">
                  Sobre nós
                </li>
                <li className="text-[#D1D1D1] hover:text-white duration-100 cursor-pointer hover:underline hover:scale-x-105">
                  Contato
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6 max-lg:items-center">
              <h3 className="font-semibold text-xl text-white">Contatos</h3>
              <div className="text-[#D1D1D1] flex flex-col gap-4 max-lg:items-center max-lg:gap-8">
                <ClientOnly>
                  <p className="flex gap-2 items-center max-lg:flex-col">
                    <span className="icon-footer !h-8 !w-8">
                      <Mail size={16} />
                    </span>
                    project2c@gmail.com
                  </p>
                </ClientOnly>
                <ClientOnly>
                  <p className="flex gap-2 items-center max-lg:flex-col">
                    <span className="icon-footer !h-8 !w-8">
                      <Phone size={16} />
                    </span>
                    (17) 98804-0531
                  </p>
                </ClientOnly>
              </div>
            </div>
          </div>
          <div className="border-t border-white py-4 flex justify-between items-center mt-8 max-sm:flex-col gap-4">
            <p className="text-[#D1D1D1] text-md max-sm:text-center">
              Copyright © 2024 Project 2C
            </p>
            <div className="flex gap-4 text-[#D1D1D1] items-center max-sm:flex-col">
              <p className="!text-md max-sm:text-center">
                Todos os direitos reservados{" "}
              </p>
              <p className="max-sm:hidden">| </p>
              <Link
                href={"/"}
                className="text-[#3461FD] hover:text-[#7190ff] hover:underline duration-200"
              >
                Termos e condições{" "}
              </Link>{" "}
              <p className="max-sm:hidden">| </p>
              <Link
                href={"/"}
                className="text-[#3461FD] hover:text-[#7190ff] hover:underline duration-200"
              >
                Política de privacidade{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
