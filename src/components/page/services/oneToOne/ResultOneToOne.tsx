import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { useOneToOneContext } from "@/context/OneToOneContext";
import { IFaces } from "@/services/faces/types";
import { cpfMask } from "@/utils/MaskProvider";
import clsx from "clsx";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function ResultOneToOne({
  photo,
  faceData,
}: {
  photo: string;
  faceData: IFaces;
}) {
  const { result } = useOneToOneContext();
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <Card className="!px-12">
      <h1 className="text-center pb-4 text-3xl font-bold">Resultado</h1>
      <div className="flex justify-between items-start gap-8 w-full">
        <div className="flex flex-col gap-4 justify-center">
          <h1 className="text-center font-semibold">Face Capturada</h1>
          <Image
            src={photo}
            width={240}
            height={240}
            alt=""
            className="transition-opacity duration-500 h-[240px] w-[240px] object-cover rounded-xl border border-slate-400"
            onLoadingComplete={handleImageLoad}
          />
        </div>
        <div className="flex flex-col justify-center items-center h-full mt-[120px]">
          <h1
            className={clsx("text-4xl font-semibold", {
              "text-green-500": result.similarity >= 75,
              "text-red-500": result.similarity < 75,
            })}
          >
            {result.similarity}%
          </h1>
          <h3 className="text-xl">de similaridade</h3>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-center font-semibold">Face Comparada</h1>
            <Image
              src={result.face}
              width={240}
              height={240}
              alt=""
              className={clsx(
                "transition-opacity duration-500 h-[240px] w-[240px] object-cover rounded-xl border border-slate-400",
                {
                  "animate-pulse bg-zinc-300": loading,
                }
              )}
              onLoadingComplete={handleImageLoad}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex gap-2 items-end">
              <p>Nome:</p>
              <h4 className="text-lg font-medium">{faceData.name}</h4>
            </div>
            <div className="flex gap-2 items-end">
              <p>CPF:</p>
              <h4 className="text-lg font-medium">{cpfMask(faceData.cpf)}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end pt-4">
        <Link href={"/services"}>
          <Button iconRight={<Check />}>Concluir</Button>
        </Link>
      </div>
    </Card>
  );
}
