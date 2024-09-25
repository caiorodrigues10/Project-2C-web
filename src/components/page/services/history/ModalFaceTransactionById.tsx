"use client";
import { Button } from "@/components/Button";
import { Example } from "@/components/CardSlide";
import { Modal } from "@/components/Modal";
import { Table } from "@/components/Table";
import { useOneToOneContext } from "@/context/OneToOneContext";
import { useToast } from "@/context/ToastContext";
import { useDisclosure } from "@/hooks/disclosure";
import { faceTransactionById } from "@/services/faces/client";
import { IFacesTransactionById } from "@/services/faces/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useCallback, useEffect, useState } from "react";

export function ModalFaceTransactionById({
  id,
  children,
}: {
  id: number;
  children: ReactNode;
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
        title={"Informações de "}
        isOpen={isOpen}
        onClose={onClose}
        className="max-lg:min-w-[400px]"
      >
        <Modal.Body className="flex gap-4 flex-row pb-3">
          {isLoadingRequest ? (
            <div className="flex justify-center items-center w-full h-full flex-col gap-4 py-12">
              <div className="loader" />
              <p className="text-[#6102ff]">Carregando...</p>
            </div>
          ) : (
            <>
              <Image
                src={dataFaceTransactionById.data?.transactionImage || ""}
                width={300}
                height={300}
                alt=""
                className="h-[240px] w-[240px] object-cover rounded-xl border border-slate-400"
              />
              {/* {dataFaceTransactionById.data?.similarities.map((e) => (
                <Image
                  src={e.image || ""}
                  width={300}
                  height={300}
                  alt=""
                  className="transition-opacity duration-500 h-[240px] w-[240px] object-cover rounded-xl border border-slate-400"
                />
              ))} */}
              <Example
                faces={dataFaceTransactionById.data?.similarities || []}
              />
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onClose}>Ok</Button>
        </Modal.Footer>
      </Modal.Root>
    </>
  );
}
