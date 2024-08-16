"use client";
import { nookiesProvider } from "@/providers/cookiesProviders";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Popover } from "../Popover";
import { LogOut, User } from "lucide-react";
import { Button } from "../Button";
import { useState } from "react";

export function UserMenu() {
  const { getCookies, resetCookies } = nookiesProvider();
  const { name, email } = getCookies();
  const { push, refresh } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!email ? (
        <ul className="flex gap-8 items-center text-white">
          <Link href="/signIn" prefetch={false} className="hover:underline">
            <li>Cadastre-se</li>
          </Link>
          <Link href="/login" prefetch={false} className="hover:underline">
            <li>Entrar</li>
          </Link>
        </ul>
      ) : (
        <Popover.Root
          onClose={setIsOpen}
          onVisible={isOpen}
          setOnVisible={setIsOpen}
          position="bottomLeft"
        >
          <Popover.Toggle>
            <button className="rounded-full border-2 border-white p-2 hover:scale-110 duration-200 hover:shadow-md">
              <User size={24} className="text-white" />
            </button>
          </Popover.Toggle>
          <Popover.Content className="p-4 flex flex-col gap-4 min-w-[330px]">
            <div className="flex gap-4 items-center rounded-xl w-full px-4 py-2 border border-zinc-300">
              <div className="rounded-full border border-slate-400 p-2">
                <User className="text-slate-600" />
              </div>
              <div className="flex flex-col ">
                <p className="text-md">{name}</p>
                <p className="text-sm text-slate-600">{email}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <Button
                variant="error"
                iconRight={<LogOut size={18} />}
                onClick={() => {
                  resetCookies();
                  refresh();
                  push("/home");
                  setIsOpen(false);
                }}
              >
                Sair
              </Button>
            </div>
          </Popover.Content>
        </Popover.Root>
      )}
    </>
  );
}
