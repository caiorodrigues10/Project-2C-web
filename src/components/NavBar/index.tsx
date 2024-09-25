"use client";
import { PROVIDERS } from "@/providers";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClientOnly } from "../ClientOnly";
import { UserMenu } from "./UserMenu";

export function NavBar() {
  const path = usePathname();
  const { getCookies } = PROVIDERS.cookies();
  const { token } = getCookies();

  const menuItems = [
    { name: "Histórico de transações", link: "/history", action: () => {} },
    { name: "Serviços", link: "/services", action: () => {} },
  ] as {
    name: string;
    link: string;
    action?: () => void;
  }[];
  return (
    <nav className="w-full items-center h-24 bg-gradient-to-r from-black to-[#24015F] flex justify-between px-16">
      <Image src="/logo.svg" alt="Project 2C" width={72} height={72} />

      <ClientOnly>
        {token && (
          <div className="flex gap-4 items-center">
            {menuItems
              .filter((f) => f.name !== "Sair")
              .map((e, i) => {
                return (
                  <Link
                    key={i}
                    href={e.link}
                    className={clsx({
                      "text-white font-medium text-xl": path.startsWith(e.link),
                      "text-zinc-400": !path.startsWith(e.link),
                    })}
                  >
                    {e.name}
                  </Link>
                );
              })}
          </div>
        )}
      </ClientOnly>
      <ClientOnly
        fallback={
          <button className="rounded-full border-2 border-white animate-pulse p-2 bg-white w-11 h-11" />
        }
      >
        <UserMenu />
      </ClientOnly>
    </nav>
  );
}
