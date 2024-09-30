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

export function ConfirmDataOneToN() {
  const { setStep, photoFace, setResult, threshold } = useOneToNContext();
  const [isLoading, setIsLoading] = useState(false);
  const { addToast, removeToast } = useToast();

  const onSubmit = useCallback(
    async (image: string) => {
      setIsLoading(true);
      const response = await oneToN({
        image: image.replace(/^data:.*;base64,/, ""),
        threshold: threshold || 70,
      });

      if (response && response?.data && response.result === "success") {
        addToast({
          type: "success",
          message:
            response?.message ||
            "Serviço indisponível tente novamente mais tarde",
          onClose: removeToast,
        });
        setResult(response);
        setStep(4);
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
    [addToast, removeToast, setStep, setResult, threshold]
  );

  return (
    <Card className="w-[700px] flex items-center flex-col">
      <h1 className="text-2xl text-center font-semibold pb-4">
        Confirmar dados
      </h1>

      <div className="w-full flex flex-col items-center gap-4">
        <div className="flex items-center gap-4 flex-col">
          <Image
            src={photoFace}
            width={300}
            height={300}
            alt="Sua Foto"
            className="h-[240px] w-[240px] object-cover rounded-xl border border-slate-400"
          />
          <h2 className="text-xl font-semibold">
            Porcentagem de busca: {threshold || 70}%
          </h2>
        </div>

        <div className="flex w-full justify-between mt-2">
          <Button
            onClick={() => setStep(2)}
            type="button"
            iconLeft={<HiOutlineArrowLeft />}
            disabled={isLoading}
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
