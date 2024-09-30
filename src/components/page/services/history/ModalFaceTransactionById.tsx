"use client";
import { Button } from "@/components/Button";
import { ContentCardSlide } from "@/components/CardSlide";
import { Modal } from "@/components/Modal";
import { Table } from "@/components/Table";
import { useOneToOneContext } from "@/context/OneToOneContext";
import { useToast } from "@/context/ToastContext";
import { useDisclosure } from "@/hooks/disclosure";
import { faceTransactionById } from "@/services/faces/client";
import { IFacesTransactionById } from "@/services/faces/types";
import Image from "next/image";
import { ReactNode, useCallback, useState } from "react";

export function ModalFaceTransactionById({
  id,
  children,
  process,
}: {
  id: number;
  children: ReactNode;
  process: string;
}) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { clearAll } = useOneToOneContext();
  const { addToast, removeToast } = useToast();
  const [isLoadingRequest, setIsLoadingRequest] = useState(false);

  const [dataFaceTransactionById, setDatFaceTransactionById] = useState(
    {} as IFacesTransactionById
  );

  const fetchFaceTransactionById = useCallback(async () => {
    setIsLoadingRequest(true);
    const response = await faceTransactionById(id);

    if (response && response?.result === "success") {
      addToast({
        type: "success",
        message:
          response?.message ||
          "Serviço indisponível tente novamente mais tarde",
        onClose: removeToast,
      });
      setDatFaceTransactionById(response);
    } else {
      addToast({
        type: "error",
        message:
          response?.message ||
          "Serviço indisponível tente novamente mais tarde",
        onClose: removeToast,
      });
    }
    setIsLoadingRequest(false);
  }, [id, addToast, removeToast]);

  return (
    <>
      <Table.Body.Row
        onClick={() => {
          onOpen();
          fetchFaceTransactionById();
        }}
      >
        {children}
      </Table.Body.Row>

      <Modal.Root
        title={"Informações da transação " + process}
        isOpen={isOpen}
        onClose={onClose}
        className="max-lg:min-w-[400px]"
      >
        <Modal.Body className="flex flex-col gap-4 pb-3">
          {isLoadingRequest ? (
            <div className="flex justify-center items-center w-full h-full flex-col gap-4 py-12 pb-8">
              <div className="loader" />
              <p className="text-[#6102ff]">Carregando...</p>
            </div>
          ) : (
            <>
              <div className="flex gap-4 items-center">
                <div className="flex flex-col gap-4 justify-center ml-4">
                  <h1 className="text-center text-base font-semibold">
                    Face capturada
                  </h1>
                  <Image
                    src={dataFaceTransactionById.data?.transactionImage || ""}
                    width={300}
                    height={300}
                    alt=""
                    className="h-[240px] w-[240px] object-cover rounded-xl border border-slate-400"
                  />
                </div>

                {dataFaceTransactionById.data?.similarities[0] ? (
                  <div className="flex flex-col gap-4 justify-center">
                    <h1 className="text-center text-base font-semibold ml-16">
                      {dataFaceTransactionById.data?.similarities.length} Faces
                      encontradas
                    </h1>
                    <ContentCardSlide
                      faces={dataFaceTransactionById.data?.similarities || []}
                    />
                  </div>
                ) : (
                  <h2 className="text-xl text-center ml-4 mt-4">
                    Nenhuma face
                    <br /> encontrada no processo
                  </h2>
                )}
              </div>
              {process === "1:N" && (
                <h5 className="text-base font-medium mt-4">
                  Porcentagem utilizada na pesquisa:{" "}
                  {dataFaceTransactionById.data?.threshold}%
                </h5>
              )}
            </>
          )}
        </Modal.Body>
        <Modal.Footer className="mt-4">
          <Button onClick={onClose}>Ok</Button>
        </Modal.Footer>
      </Modal.Root>
    </>
  );
}
