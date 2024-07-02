import Image from "next/image";

export function NavBar() {
  return (
    <nav className="w-full h-24 bg-gradient-to-r from-black to-[#24015F] flex justify-between px-16">
      <Image src="/logo.svg" alt="Project 2C" width={72} height={72} />
      <ul className="flex gap-8 items-center text-white">
        <li>Sobre nós</li>
        <li>Contatos</li>
        <li>Cadastre-se</li>
        <li>Entrar</li>
      </ul>
    </nav>
  );
}
