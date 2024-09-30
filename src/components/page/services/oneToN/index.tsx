"use client";
import { Capture, TypeCamProps } from "@/components/Capture";
import { ProgressBar } from "@/components/ProgressbarTailwind";
import { useOneToNContext } from "@/context/OneToNContext";
import { isMobile } from "@/utils/isMobile";
import { useRouter } from "next/navigation";
import { ConfirmDataOneToN } from "./ConfirmDataOneToN";
import { ResultOneToN } from "./ResultOneToN";
import { FormThreshold } from "./FormThreshold";

export function OneToN() {
  const { setStep, step, photoFace, setPhotoFace } = useOneToNContext();
  const { push } = useRouter();

  return (
    <>
      <ProgressBar
        currentStep={step}
        points={[
          { description: "Porcentagem de similaridade" },
          { description: "Captura de face" },
          { description: "Confirmação dos dados" },
          { description: "Resultado" },
        ]}
        setCurrentStep={setStep}
        isMobile={isMobile()}
      />
      {step === 1 && <FormThreshold />}
      {step === 2 && (
        <Capture
          options={[TypeCamProps.upload, TypeCamProps.cam]}
          goBack={() => push("/services/oneToOne")}
          handleNextStep={() => setStep(3)}
          setPhoto={setPhotoFace}
          photo={photoFace}
        />
      )}
      {step === 3 && <ConfirmDataOneToN />}
      {step === 4 && <ResultOneToN photo={photoFace} />}
    </>
  );
}
