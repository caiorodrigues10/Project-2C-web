import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { useOneToOneContext } from "@/context/OneToOneContext";
import { useToast } from "@/context/ToastContext";
import { oneToOne } from "@/services/faces/client";
import { IFaces } from "@/services/faces/types";
import clsx from "clsx";
import Image from "next/image";
import { useCallback, useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

export function ConfirmDataOneToOne({ faceData }: { faceData: IFaces }) {
  const { setStep, photoFace, setResult } = useOneToOneContext();
  const [isLoading, setIsLoading] = useState(false);
  const { addToast, removeToast } = useToast();
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const onSubmit = useCallback(
    async (faceId: number, otherFace: string) => {
      setIsLoading(true);
      const response = await oneToOne({
        faceId,
        otherFace: otherFace.replace(/^data:.*;base64,/, ""),
      });

      if (response?.data && response && response.result === "success") {
        addToast({
          type: "success",
          message:
            response?.message ||
            "Serviço indisponível tente novamente mais tarde",
          onClose: removeToast,
        });
        setResult(response.data);
        setStep(3);
      } else {
        addToast({
          type: "error",
          message:
            response?.message ||
            "Serviço indisponível tente novamente mais tarde",
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
        Confirmar dados
      </h1>

      <div className="w-full flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <Image
            src={photoFace}
            width={300}
            height={300}
            alt="Sua Foto"
            className={clsx(
              "transition-opacity duration-500 h-[240px] w-[240px] object-cover rounded-xl border border-slate-400",
              {
                "animate-pulse bg-zinc-300": loading,
              }
            )}
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
            onClick={() => setStep(1)}
            type="button"
            iconLeft={<HiOutlineArrowLeft />}
          >
            Voltar
          </Button>
          <Button
            iconRight={<HiOutlineArrowRight size={16} />}
            isLoading={isLoading}
            onClick={() => onSubmit(faceData.id, photoFace)}
          >
            Confirmar
          </Button>
        </div>
      </div>
    </Card>
  );
}
