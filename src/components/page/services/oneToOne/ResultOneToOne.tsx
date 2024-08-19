import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ResultOneToOne({ photo }: { photo: string }) {
  return (
    <Card className="!px-12">
      <h1 className="text-center pb-4 text-3xl font-bold">Resultado</h1>
      <div className="flex justify-betweens gap-4 w-full">
        <Card className="flex flex-col gap-4 justify-center">
          <h1 className="text-center text-2xl font-semibold">Face Capturada</h1>
          <div className="flex flex-col items-center justify-center w-full max-w-[300px] h-[300px] rounded border">
            <Image
              src={photo}
              alt="Sua Foto"
              width={300}
              height={100}
              className="w-auto h-auto max-h-full rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex gap-2 items-end">
              <p>Nome:</p>
              <h4 className="text-lg font-medium">Caio</h4>
            </div>
            <div className="flex gap-2 items-end">
              <p>CPF:</p>
              <h4 className="text-lg font-medium">466.735.748-79</h4>
            </div>
            <div className="flex gap-2 items-end">
              <p>Data de nascimento:</p>
              <h4 className="text-lg font-medium">11/01/1999</h4>
            </div>
          </div>
        </Card>
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-violet-500 text-4xl font-semibold">91%</h1>
          <h3 className="text-2xl">de similaridade</h3>
        </div>
        <Card className="flex flex-col gap-4 justify-center">
          <h1 className="text-center text-2xl font-semibold">Face Comparada</h1>
          <div className="flex flex-col items-center justify-center w-full max-w-[300px] h-[300px] rounded border">
            <Image
              src={photo}
              alt="Sua Foto"
              width={300}
              height={100}
              className="w-auto h-auto max-h-full rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex gap-2 items-end">
              <p>Nome:</p>
              <h4 className="text-lg font-medium">Caio</h4>
            </div>
            <div className="flex gap-2 items-end">
              <p>CPF:</p>
              <h4 className="text-lg font-medium">466.735.748-79</h4>
            </div>
            <div className="flex gap-2 items-end">
              <p>Data de nascimento:</p>
              <h4 className="text-lg font-medium">11/01/1999</h4>
            </div>
          </div>
        </Card>
      </div>
      <div className="flex w-full justify-end pt-4">
        <Link href={"/services"}>
          <Button iconRight={<Check />}>Concluir</Button>
        </Link>
      </div>
    </Card>
  );
}
