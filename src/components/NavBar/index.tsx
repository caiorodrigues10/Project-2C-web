import Image from "next/image";
import { ClientOnly } from "../ClientOnly";
import { UserMenu } from "./UserMenu";

export function NavBar() {
  return (
    <nav className="w-full items-center h-24 bg-gradient-to-r from-black to-[#24015F] flex justify-between px-16">
      <Image src="/logo.svg" alt="Project 2C" width={72} height={72} />
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
