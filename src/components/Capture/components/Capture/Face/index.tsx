import clsx from "clsx";
import { LoaderCircle } from "lucide-react";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { IoCameraOutline, IoCameraReverseOutline } from "react-icons/io5";
import Webcam from "react-webcam";
import { CaptureProps } from "../../..";
import { isMobile } from "../../../../../utils/isMobile";
import { Button } from "../../../../Button";
import { NotCam } from "../NotCam";

type ICaptureFaceManual = CaptureProps;

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = { exact: "environment" };

const CaptureFaceManual: React.FC<ICaptureFaceManual> = ({
  isLoading,
  setPhoto,
  photo,
  handleNextStep,
  setPhotoEncrypted,
  goBack,
}) => {
  const webcamRef: any = useRef(null);
  const [facingMode, setFacingMode] = useState<string | { exact: string }>(
    FACING_MODE_USER
  );
  const [crop, setCrop] = useState(false);
  const [videoProps, setVideoProps] = useState(true);
  const [isLoadingComponent, setIsLoadingComponent] = useState(true);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot(
      !isMobile()
        ? {
            width: 1280,
            height: 720,
          }
        : {
            width: 750,
            height: 1334,
          }
    );

    setPhoto(imageSrc);
    setPhotoEncrypted && setPhotoEncrypted(imageSrc);
  };

  const handleDeleteImage = useCallback(() => {
    setPhoto("");
    setPhotoEncrypted && setPhotoEncrypted("");
  }, [setPhoto, setPhotoEncrypted]);

  const handleClick = useCallback(() => {
    setFacingMode((prevState) =>
      prevState === FACING_MODE_USER
        ? FACING_MODE_ENVIRONMENT
        : FACING_MODE_USER
    );
  }, []);

  console.log(isLoadingComponent);

  return (
    <div className="flex flex-col items-center justify-center">
      {videoProps ? (
        <>
          {isLoadingComponent && (
            <div
              className={clsx(
                "flex flex-col justify-center items-center gap-6 py-20"
              )}
            >
              <LoaderCircle className="animate-spin" size={64} />
              <h1>Carregando câmera...</h1>
            </div>
          )}

          <div
            className={clsx("flex relative w-full h-auto min-h-[360px]", {
              hidden: photo || isLoadingComponent,
            })}
          >
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotQuality={1}
              screenshotFormat="image/png"
              mirrored={!isMobile() ? true : facingMode === "user"}
              onUserMediaError={() => {
                setVideoProps(false);
              }}
              onLoadStart={() => {
                setCrop(true);
                setIsLoadingComponent(false);
              }}
              className={clsx("rounded-2xl border-2 border-slate-400", {
                absolute: isLoadingComponent,
              })}
              width={1280}
              height={720}
              videoConstraints={{
                facingMode,
                width: 1280,
                height: 720,
              }}
            />

            {!photo && (
              <Button
                className={clsx(
                  "absolute md:bottom-6 bottom-7 left-1/2 -translate-x-1/2 w-auto z-20"
                )}
                disabled={isLoading}
                onClick={capture}
                iconRight={<IoCameraOutline size={30} />}
              >
                Tirar foto
              </Button>
            )}

            {isMobile() && (
              <Button
                className="w-auto absolute top-4 left-6 z-20"
                onClick={handleClick}
                disabled={isLoading || !!photo}
                iconRight={<IoCameraReverseOutline />}
              >
                Girar
              </Button>
            )}

            {crop && (
              <div className="absolute flex justify-center items-center left-0 rounded-2xl w-full h-full md:h-[400px]">
                <Image
                  src="/maskCam.png"
                  width={200}
                  height={300}
                  alt="Posição da face"
                />
              </div>
            )}
          </div>
          <div className={clsx("w-full flex", { hidden: !photo })}>
            <div className="flex relative first-letter:scale-x-[-1] w-full h-auto rounded-2xl overflow-hidden">
              <Image
                src={photo}
                height={500}
                width={800}
                objectFit={"contain"}
                alt="Face"
                className="rounded-2xl"
              />
            </div>
          </div>

          {!isLoadingComponent && (
            <div
              className={clsx("flex justify-between w-full pt-4", {
                "gap-12": !photo,
                "gap-2": photo,
              })}
            >
              <Button
                onClick={goBack}
                disabled={isLoading}
                iconLeft={<AiOutlineArrowLeft />}
              >
                Voltar
              </Button>

              {photo && (
                <Button
                  disabled={isLoading}
                  onClick={handleDeleteImage}
                  iconRight={<IoCameraReverseOutline />}
                >
                  Nova foto
                </Button>
              )}
              <Button
                loadingText="Carregando..."
                isLoading={isLoading}
                onClick={handleNextStep}
                disabled={!photo || isLoading}
                iconRight={<AiOutlineArrowRight />}
              >
                Continuar
              </Button>
            </div>
          )}
        </>
      ) : (
        <NotCam />
      )}
    </div>
  );
};

export { CaptureFaceManual };
