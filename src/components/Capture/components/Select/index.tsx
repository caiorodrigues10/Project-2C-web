import { Button } from "@/components/Button";
import { BsFillCameraFill, BsInputCursorText } from "react-icons/bs";
import { FaCloudUploadAlt } from "react-icons/fa";
import { TypeCamProps } from "../..";
import { Card } from "../../../Card";

interface SelectProps {
  setIsSelect: (value: boolean) => void;
  handleSetCaptureImage?: (value: boolean) => void;
  options: TypeCamProps[];
  setTabIndex: (value: number) => void;
}

const Select: React.FC<SelectProps> = ({
  setIsSelect,
  handleSetCaptureImage,
  options,
  setTabIndex,
}) => {
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

  return (
    <Card className="w-[600px] mt-4">
      <h1 className="w-full text-center text-2xl pt-2 pb-6 font-semibold">
        Selecione o tipo de captura
      </h1>
      <div className="flex flex-col w-full gap-4">
        {options &&
          options.map((e, index) => {
            const optionFound = optionData.find((o) => o.type === e);
            return (
              <Button
                key={index}
                disabled={!optionFound}
                onClick={() => {
                  setIsSelect(false);
                  setTabIndex(
                    options.findIndex((e) => e === optionFound?.type)
                  );
                  handleSetCaptureImage && handleSetCaptureImage(true);
                }}
                variant="black-white"
                className="!justify-start"
              >
                <div className="p-2 text-slate-100 rounded-lg bg-gradient-to-r from-[#24015F] to-black">
                  {optionFound && <optionFound.icon size={32} />}
                </div>
                <div className="flex flex-col text-slate-800">
                  <h2 className="text-xl text-start">{optionFound?.title}</h2>
                  <p className="text-start">{optionFound?.subtitle}</p>
                </div>
              </Button>
            );
          })}
      </div>
    </Card>
  );
};

export default Select;
