"use client";
import { Capture, TypeCamProps } from "@/components/Capture";
import { ProgressBar } from "@/components/ProgressbarTailwind";
import { useRegisterFaceContext } from "@/context/RegisterFaceContext";
import { isMobile } from "@/utils/isMobile";
import { useState } from "react";
import ConfirmDataRegisterFace from "./ConfirmDataRegisterFace";
import { IdentityRegisterFace } from "./IdentityRegisterFace";

export function RegisterFace() {
  const [isLoading, setIsLoading] = useState(false);
  const { setStep, step, photoFace, setPhotoFace } = useRegisterFaceContext();

  return (
    <>
      <ProgressBar
        currentStep={step}
        points={[
          { description: "Cadastro de dados" },
          { description: "Captura de face" },
          { description: "Confirmação dos dados" },
        ]}
        setCurrentStep={setStep}
        isMobile={isMobile()}
      />
      {step === 1 && <IdentityRegisterFace />}
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
      {step === 3 && <ConfirmDataRegisterFace />}
    </>
  );
}
