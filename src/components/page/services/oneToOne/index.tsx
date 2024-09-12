"use client";
import { Capture, TypeCamProps } from "@/components/Capture";
import { ProgressBar } from "@/components/ProgressbarTailwind";
import { useOneToOneContext } from "@/context/OneToOneContext";
import { IFaces } from "@/services/faces/types";
import { isMobile } from "@/utils/isMobile";
import { useRouter } from "next/navigation";
import { ConfirmDataOneToOne } from "./ConfirmDataOneToOne";
import { ResultOneToOne } from "./ResultOneToOne";

export function OneToOne({ faceData }: { faceData: IFaces }) {
  const { setStep, step, photoFace, setPhotoFace } = useOneToOneContext();
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
      {step === 2 && <ConfirmDataOneToOne faceData={faceData} />}
      {step === 3 && <ResultOneToOne photo={photoFace} faceData={faceData} />}
    </>
  );
}
