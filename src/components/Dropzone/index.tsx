import clsx from "clsx";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useToast } from "../../context/ToastContext";
import Image from "next/image";

export interface DropZoneProps {
  oneFileUploaded?: (file: File) => void;
  title?: string;
  setPhoto?: (image: string) => void;
  photo: string;
  width?: string;
  height?: string;
  className?: string;
}

const DropZone = ({
  oneFileUploaded,
  setPhoto,
  photo,
  className,
}: DropZoneProps) => {
  const { addToast, removeToast } = useToast();

  const handlePhotoTaken = useCallback(
    (image: Blob) => {
      setPhoto && setPhoto("");

      const blobToBase64 = (blob: Blob) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        return new Promise((resolve) => {
          reader.onloadend = () => {
            resolve(reader.result);
          };
        });
      };

      blobToBase64(image).then((res) => {
        typeof res === "string" && setPhoto && setPhoto(res);
      });
    },
    [setPhoto]
  );

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      const file = acceptedFiles[0];

      if (file) {
        handlePhotoTaken(file);
        oneFileUploaded && oneFileUploaded(file);
      } else {
        addToast({
          onClose: removeToast,
          message: "Erro ao realizar o upload da imagem!",
          type: "error",
        });
      }
    },
    [handlePhotoTaken, oneFileUploaded, addToast, removeToast]
  );

  const { getInputProps, isDragAccept, isDragReject, getRootProps } =
    useDropzone({
      onDrop,
      accept: {
        "image/*": [],
      },
    });

  return (
    <div className={clsx("flex items-center justify-center w-full", className)}>
      <label
        htmlFor="dropzone-file"
        className={clsx(
          "flex flex-col items-center justify-center w-full h-80 border-2 duration-200 border-dashed rounded cursor-pointer",
          {
            "border-red-500 bg-red-300/10 ": isDragReject,
            "border-green-500 bg-green-300/10 ": isDragAccept,
            "border-slate-300 hover:border-slate-500 bg-slate-100":
              !isDragAccept && !isDragReject,
            "hover:bg-slate-200": !photo && !isDragAccept && !isDragReject,
          }
        )}
        {...getRootProps()}
      >
        {photo ? (
          <Image
            src={photo}
            alt="Sua Foto"
            width={300}
            height={100}
            className="w-auto h-auto max-h-full"
          />
        ) : (
          <>
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <AiOutlineCloudUpload
                className="text-gray-500 dark:text-gray-400"
                size={40}
              />
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 font-semibold">
                {isDragAccept && "Soltar imagem"}
                {isDragReject && "Alguns arquivos serão rejeitados"}
                {!isDragAccept && !isDragReject && "Selecione sua Imagem"}
              </p>
            </div>
          </>
        )}
        <input
          {...getInputProps()}
          id="dropzone-file"
          type="file"
          className="hidden"
        />
      </label>
    </div>
  );
};

export { DropZone };
