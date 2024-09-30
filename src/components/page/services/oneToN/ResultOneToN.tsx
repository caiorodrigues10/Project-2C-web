import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { ContentCardSlide } from "@/components/CardSlide";
import { useOneToNContext } from "@/context/OneToNContext";
import clsx from "clsx";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function ResultOneToN({ photo }: { photo: string }) {
  const { result, clearAll, threshold } = useOneToNContext();
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <Card className="!px-12">
      <h1 className="text-center pb-4 text-3xl font-bold">Resultado</h1>
      <div className="flex flex-col gap-4 w-full mt-4">
        <div className="flex items-center">
          <div className="flex flex-col gap-4 justify-center">
            <h1 className="text-center text-base font-semibold">
              Face Capturada
            </h1>
            <Image
              src={photo}
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
          {result?.data?.faces[0] ? (
            <div className="flex flex-col gap-4 justify-center ml-4">
              <h1 className="text-center text-base font-semibold ml-12">
                {result?.data?.count} Faces encontradas
              </h1>
              <ContentCardSlide
                faces={
                  result?.data?.faces.map((e) => ({
                    cpf: e.doc,
                    id: e.id,
                    image: e.image,
                    name: e.name,
                    similarity: e.similarity,
                    createdAt: new Date(),
                  })) || []
                }
              />
            </div>
          ) : (
            <h2 className="text-xl font-semibold mt-4 ml-12">
              Nenhuma face encontrada
            </h2>
          )}
        </div>
        <h2 className="text-xl font-semibold">
          Porcentagem de busca: {threshold || 70}%
        </h2>
      </div>
      <div className="flex w-full justify-end pt-6">
        <Link href={"/services"} onClick={clearAll}>
          <Button iconRight={<Check />}>Concluir</Button>
        </Link>
      </div>
    </Card>
  );
}
