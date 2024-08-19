import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { useRegisterFaceContext } from "@/context/RegisterFaceContext";
import { Check } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

export default function ConfirmDataRegisterFace() {
  const { setStep, photoFace, dataRegisterFace } = useRegisterFaceContext();

  const { push } = useRouter();

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
        <div className="flex flex-col items-center">
          <p className="text-sm">Data de nascimento:</p>
          <h4 className="text-lg font-medium">
            {new Date(dataRegisterFace.date).toLocaleDateString()}
          </h4>
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
            onClick={() => push("/services")}
          >
            Confirmar
          </Button>
        </div>
      </div>
    </Card>
  );
}
