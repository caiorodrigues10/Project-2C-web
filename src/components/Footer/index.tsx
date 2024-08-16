import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ClientOnly } from "../ClientOnly";
import { cookies } from "next/headers";

export function Footer() {
  const token = cookies().get("2c.token")?.value;

  if (token) {
    return (
      <footer className="w-full fixed bottom-0 -z-10">
        <svg
          viewBox="0 0 1440 250"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#gradient)"
            d="M0,160L30,133.3C60,107,120,53,180,42.7C240,32,300,64,360,101.3C420,139,480,181,540,181.3C600,181,660,139,720,133.3C780,128,840,160,900,192C960,224,1020,256,1080,250.7C1140,245,1200,203,1260,176C1320,149,1380,139,1410,133.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#005C99" />
              <stop offset="100%" stopColor="#6100FF" />
            </linearGradient>
          </defs>
        </svg>
      </footer>
    );
  }

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
