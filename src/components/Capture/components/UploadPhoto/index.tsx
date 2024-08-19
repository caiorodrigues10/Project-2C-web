import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CaptureProps } from "../..";
import { DropZone } from "../../../Dropzone";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

type UploadPhotoProps = CaptureProps;

const UploadPhoto: React.FC<UploadPhotoProps> = ({
  photo,
  isLoading,
  setPhoto,
  handleNextStep,
  goBack,
}) => {
  return (
    <div>
      <DropZone photo={photo} setPhoto={setPhoto} />
      <div className="flex justify-between pt-4">
        <Button
          onClick={goBack}
          disabled={isLoading}
          className="md:w-auto w-full"
          iconLeft={<AiOutlineArrowLeft />}
        >
          Voltar
        </Button>
        <Button
          onClick={handleNextStep}
          disabled={!photo || isLoading}
          isLoading={isLoading}
          loadingText="Carregando..."
          className="md:w-auto w-full"
          iconRight={<AiOutlineArrowRight />}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};

export { UploadPhoto };
