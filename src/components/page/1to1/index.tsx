"use client";
import { Capture, TypeCamProps } from "@/components/Capture";
import { ProgressBar } from "@/components/ProgressbarTailwind";
import { FaceSimilarity } from "@/components/ScoreFaces/FaceSimilarity";
import { useAppContext } from "@/context/AppContext";
import { isMobile } from "@/utils/isMobile";
import { useState } from "react";
import { ChooseWhichFacesCompare } from "./ChooseWhichFacesCompare";
import { Identity, IdentityData } from "./Identify";

export function OneToOne() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({} as IdentityData);
  const { photoFace, setPhotoFace } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col gap-12 justify-center items-center w-full">
      <ProgressBar
        currentStep={step}
        points={[
          { description: "Cadastro de dados" },
          { description: "Captura de face" },
          { description: "Resultado" },
        ]}
        isMobile={isMobile()}
      />
      {step === 0 && <ChooseWhichFacesCompare />}

      {step === 1 && (
        <Identity
          handleNextStep={() => setStep(2)}
          identityData={data}
          setIdentityData={setData}
        />
      )}
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
      {step === 3 && <FaceSimilarity photo={photoFace} />}
    </div>
  );
}
