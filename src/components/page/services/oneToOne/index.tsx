"use client";
import { Capture, TypeCamProps } from "@/components/Capture";
import { ProgressBar } from "@/components/ProgressbarTailwind";
import { useOneToOneContext } from "@/context/OneToOneContext";
import { isMobile } from "@/utils/isMobile";
import { useState } from "react";
import { ConfirmDataOneToOne } from "./ConfirmDataOneToOne";
import { IdentityOneToOne } from "./IdentityOneToOne";
import { ResultOneToOne } from "./ResultOneToOne";

export function OneToOne() {
  const [isLoading, setIsLoading] = useState(false);
  const { setStep, step, photoFace, setPhotoFace } = useOneToOneContext();

  return (
    <>
      <ProgressBar
        currentStep={step}
        points={[
          { description: "Cadastro de dados" },
          { description: "Captura de face" },
          { description: "Confirmação dos dados" },
          { description: "Resultado" },
        ]}
        setCurrentStep={setStep}
        isMobile={isMobile()}
        isDisabled={step === 4}
      />
      {step === 1 && <IdentityOneToOne />}
      {step === 2 && (
        <Capture
          options={[TypeCamProps.upload, TypeCamProps.cam]}
          goBack={() => setStep(1)}
          handleNextStep={() => setStep(3)}
          setPhoto={setPhotoFace}
          photo={photoFace}
          isLoading={isLoading}
        />
      )}
      {step === 3 && <ConfirmDataOneToOne />}
      {step === 4 && <ResultOneToOne photo={photoFace} />}
    </>
  );
}
