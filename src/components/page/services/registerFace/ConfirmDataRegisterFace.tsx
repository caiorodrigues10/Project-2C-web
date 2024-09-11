import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { useRegisterFaceContext } from "@/context/RegisterFaceContext";
import { useToast } from "@/context/ToastContext";
import { registerFace } from "@/services/faces/client";
import { Check } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";

export default function ConfirmDataRegisterFace() {
  const [isLoading, setIsLoading] = useState(false);
  const { setStep, photoFace, dataRegisterFace } = useRegisterFaceContext();
  const { addToast, removeToast } = useToast();

  const { push } = useRouter();

  const onSubmit = useCallback(async () => {
    setIsLoading(true);
    const newData = {
      ...dataRegisterFace,
      image: photoFace.replace(/^data:.*;base64,/, ""),
    };

    const response = await registerFace(newData);

    if (response.result === "success") {
      addToast({
        type: "success",
        message: response.message,
        onClose: removeToast,
      });
      push("/services");
    } else {
      addToast({
        type: "error",
        message: response.message,
        onClose: removeToast,
      });
    }
    setIsLoading(false);
  }, [dataRegisterFace, push, removeToast, addToast, photoFace]);

  return (
    <Card className="w-[600px]">
      <h1 className="text-2xl text-center font-semibold pb-4">
        Confirmar dados
      </h1>

      <div className="w-full flex flex-col items-center gap-4">
        <div className="flex flex-col items-center justify-center w-full max-w-[300px] h-[300px] rounded border">
          <Image
            src={photoFace}
            alt="Sua Foto"
            width={300}
            height={100}
            className="w-auto h-auto max-h-full rounded-md"
          />
        </div>
        <h3 className="font-semibold text-lg">{dataRegisterFace.name}</h3>
        <div className="flex flex-col items-center">
          <p className="text-sm">CPF:</p>
          <h4 className="text-lg font-medium">{dataRegisterFace.cpf}</h4>
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
            type="submit"
            iconRight={<Check size={16} />}
            onClick={onSubmit}
            isLoading={isLoading}
          >
            Confirmar
          </Button>
        </div>
      </div>
    </Card>
  );
}
