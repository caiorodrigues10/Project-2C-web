import Image from "next/image";
import Link from "next/link";

export function NavBar() {
  return (
    <nav className="w-full h-24 bg-gradient-to-r from-black to-[#24015F] flex justify-between px-16">
      <Image src="/logo.svg" alt="Project 2C" width={72} height={72} />
      <ul className="flex gap-8 items-center text-white">
        <Link href="/signIn" prefetch={false} className="hover:underline">
          <li>Cadastre-se</li>
        </Link>
        <Link href="/login" prefetch={false} className="hover:underline">
          <li>Entrar</li>
        </Link>
      </ul>
    </nav>
  );
}
