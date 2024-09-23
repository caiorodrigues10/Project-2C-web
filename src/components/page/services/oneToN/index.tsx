"use client";
import { Capture, TypeCamProps } from "@/components/Capture";
import { ProgressBar } from "@/components/ProgressbarTailwind";
import { useOneToNContext } from "@/context/OneToNContext";
import { isMobile } from "@/utils/isMobile";
import { useRouter } from "next/navigation";
import { ConfirmDataOneToN } from "./ConfirmDataOneToN";
import { ResultOneToN } from "./ResultOneToN";

export function OneToN() {
  const { setStep, step, photoFace, setPhotoFace } = useOneToNContext();
  const { push } = useRouter();

  return (
    <>
      <ProgressBar
        currentStep={step}
        points={[
          { description: "Captura de face" },
          { description: "Confirmação dos dados" },
          { description: "Resultado" },
        ]}
        setCurrentStep={setStep}
        isMobile={isMobile()}
        isDisabled={step === 4}
      />
      {step === 1 && (
        <Capture
          options={[TypeCamProps.upload, TypeCamProps.cam]}
          goBack={() => push("/services/oneToOne")}
          handleNextStep={() => setStep(2)}
          setPhoto={setPhotoFace}
          photo={photoFace}
        />
      )}
      {step === 2 && <ConfirmDataOneToN />}
      {step === 3 && <ResultOneToN photo={photoFace} />}
    </>
  );
}
