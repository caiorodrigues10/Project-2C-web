import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { useOneToNContext } from "@/context/OneToNContext";
import { useToast } from "@/context/ToastContext";
import { oneToN } from "@/services/faces/client";
import { IFaces } from "@/services/faces/types";
import clsx from "clsx";
import Image from "next/image";
import { useCallback, useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

export function ConfirmDataOneToN({ faceData }: { faceData: IFaces }) {
  const { setStep, photoFace, setResult } = useOneToNContext();
  const [isLoading, setIsLoading] = useState(false);
  const { addToast, removeToast } = useToast();
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const onSubmit = useCallback(
    async (image: string) => {
      setIsLoading(true);
      const response = await oneToN({
        image,
      });

      if (response?.data && response.result === "success") {
        addToast({
          type: "success",
          message: response.message,
          onClose: removeToast,
        });
        setResult(response.data);
        setStep(3);
      } else {
        addToast({
          type: "error",
          message: response.message,
          onClose: removeToast,
        });
      }
      setIsLoading(false);
    },
    [addToast, removeToast, setStep, setResult]
  );

  return (
    <Card className="w-[700px] flex items-center flex-col">
      <h1 className="text-2xl text-center font-semibold pb-4">
        Confirmar imagem
      </h1>

      <div className="w-full flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <Image
            src={photoFace}
            width={300}
            height={300}
            alt="Sua Foto"
            className="h-[240px] w-[240px] object-cover rounded-xl border border-slate-400"
          />
          <Image
            src={faceData.image}
            width={300}
            height={300}
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

        <div className="flex w-full justify-between mt-2">
          <Button
            onClick={() => setStep(2)}
            type="button"
            iconLeft={<HiOutlineArrowLeft />}
          >
            Voltar
          </Button>
          <Button
            iconRight={<HiOutlineArrowRight size={16} />}
            isLoading={isLoading}
            onClick={() => onSubmit(photoFace)}
          >
            Confirmar
          </Button>
        </div>
      </div>
    </Card>
  );
}
