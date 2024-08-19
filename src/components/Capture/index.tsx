import { useAppContext } from "@/context/AppContext";
import React, { useEffect, useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Card } from "../Card";
import { Tabs } from "../Tabs";
import { ToolTip } from "../Tooltip";
import { CaptureFaceManual } from "./components/Capture/Face";
import Select from "./components/Select";
import { UploadPhoto } from "./components/UploadPhoto";

export enum TypeCamProps {
  cam = "cam",
  upload = "upload",
  select = "select",
}

export interface CaptureProps {
  photo: string;
  submitWithoutPhoto?: boolean;
  setPhoto: (value: string) => void;
  setPhotoEncrypted?: (value: string) => void;
  isLoading?: boolean;
  handleNextStep: () => void;
  handleSetCaptureImage?: (value: boolean) => void;
  goBack?: (value: any) => void;
  currentProcess?: boolean;
  options?: TypeCamProps[];
  setPreviewImage?: (value: string) => void;
  setFinalizedLoading?: (value: boolean) => void;
}

const Capture: React.FC<CaptureProps> = ({
  photo,
  isLoading = false,
  handleNextStep,
  setPhoto,
  handleSetCaptureImage,
  goBack,
  options = [],
  submitWithoutPhoto = false,
}) => {
  const [isSelectedCam, setIsSelectedCam] = useState(options.length > 1);
  const { setImagePreview } = useAppContext();
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    if (submitWithoutPhoto) {
      goBack && goBack(-1);
    }
  }, [goBack, submitWithoutPhoto]);

  const optionData = [
    {
      type: TypeCamProps.cam,
      icon: BsFillCameraFill,
      title: "Foto da face",
      subtitle: "Capture uma foto através da câmera",
    },
    {
      type: TypeCamProps.upload,
      icon: FaCloudUploadAlt,
      title: "Upload da imagem",
      subtitle: "Faça o upload de uma imagem",
    },
  ];

  if (isSelectedCam) {
    return (
      <Select
        options={options}
        setIsSelect={setIsSelectedCam}
        handleSetCaptureImage={handleSetCaptureImage}
        setTabIndex={setTabIndex}
      />
    );
  }

  return (
    <Tabs.Root isLazy initialIndex={tabIndex} className="w-full max-w-3xl">
      {options.length > 1 && (
        <Tabs.List>
          {options.map((item, index) => {
            const optionFound = optionData.find((o) => o.type === item);

            const IconComp: any = optionFound?.icon;

            return (
              <ToolTip
                key={optionFound?.type}
                tooltip={optionFound?.subtitle}
                position="bottom"
              >
                <Tabs.Tab
                  index={index}
                  onClick={() => {
                    setPhoto("");
                    setImagePreview("");
                    setTabIndex(index);
                  }}
                >
                  <IconComp />

                  <p className="hidden md:flex">{optionFound?.title || ""}</p>
                </Tabs.Tab>
              </ToolTip>
            );
          })}
        </Tabs.List>
      )}
      <Tabs.Panels>
        <Card>
          <h1 className="text-center pb-4 text-2xl font-semibold">
            {optionData.find((e) => e.type === options[tabIndex])?.title}
          </h1>
          {options.map((item, index) => (
            <Tabs.Panel key={`${item}-${index}`} index={index}>
              {item === TypeCamProps.upload && (
                <UploadPhoto
                  photo={photo}
                  goBack={() => (goBack ? goBack(-1) : setIsSelectedCam(true))}
                  setPhoto={setPhoto}
                  handleNextStep={handleNextStep}
                  isLoading={isLoading}
                  handleSetCaptureImage={handleSetCaptureImage}
                />
              )}
              {item === TypeCamProps.cam && (
                <CaptureFaceManual
                  photo={photo}
                  goBack={() => (goBack ? goBack(-1) : setIsSelectedCam(true))}
                  isLoading={isLoading}
                  setPhoto={setPhoto}
                  handleNextStep={handleNextStep}
                  handleSetCaptureImage={handleSetCaptureImage}
                />
              )}
            </Tabs.Panel>
          ))}
        </Card>
      </Tabs.Panels>
    </Tabs.Root>
  );
};

export { Capture };
