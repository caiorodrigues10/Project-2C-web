import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Example } from "@/components/Carousel";
import { useOneToNContext } from "@/context/OneToNContext";
import clsx from "clsx";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function ResultOneToN({ photo }: { photo: string }) {
  const { result } = useOneToNContext();
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <Card className="!px-12">
      <h1 className="text-center pb-4 text-3xl font-bold">Resultado</h1>
      <div className="flex justify-betweens gap-4 w-full mt-4">
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
        <Example images={result?.data?.faces.map((e) => e.image) || []} />
      </div>
      <div className="flex w-full justify-end pt-4">
        <Link href={"/services"}>
          <Button iconRight={<Check />}>Concluir</Button>
        </Link>
      </div>
    </Card>
  );
}
