import { Button } from "@/components/Button";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-4xl font-semibold">Teste um dos nossos serviços</h1>

      <div className="flex">
        <div className="flex flex-col gap-12 w-1/2">
          <Image width={240} height={300} alt="" src={"/boy.svg"} />
          <Image width={260} height={300} alt="" src={"/girl.svg"} />
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col col-span-1 items-center justify-between gap-6 p-4 rounded-3xl bg-gradient-to-t from-[#630FEF] to-[#340483] text-white">
            <Image width={200} height={300} alt="" src={"/face.svg"} />
            <h2 className="text-2xl font-semibold text-center">
              Cadastro de faces
            </h2>
            <hr className="border-white w-full border-2 rounded-md" />
            <h5 className="text-xl text-center">
              Cadastrar face na base de dados para simular processos reais
            </h5>
            <Button variant="black-white" className="w-full">
              Cadastrar
            </Button>
          </div>
          <div className="flex flex-col items-center col-span-1 justify-between gap-6 p-4 rounded-3xl bg-gradient-to-t from-[#630FEF] to-[#340483] text-white">
            <Image width={200} height={300} alt="" src={"/face.svg"} />
            <h2 className="text-2xl font-semibold text-center">
              1:1 Comparação de duas faces
            </h2>
            <hr className="border-white w-full border-2 rounded-md" />
            <h5 className="text-xl text-center">
              Porcentagem de similaridade das faces comparadas
            </h5>
            <Button variant="black-white" className="w-full">
              Utilizar 1:1
            </Button>
          </div>
          <div className="flex flex-col items-center col-span-1  justify-between gap-6 p-4 rounded-3xl bg-gradient-to-t from-[#630FEF] to-[#340483] text-white">
            <Image width={200} height={300} alt="" src={"/face.svg"} />
            <h2 className="text-2xl font-semibold text-center">
              1:N Comparação de uma face com várias faces faces
            </h2>
            <hr className="border-white w-full border-2 rounded-md" />
            <h5 className="text-xl text-center">
              Comparar uma face com várias e retorna todas as similares
            </h5>
            <Button variant="black-white" className="w-full">
              Utilizar 1:N
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
