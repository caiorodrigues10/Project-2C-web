"use client";
import { Modal } from "@/components/Modal";
import { Table } from "@/components/Table";
import { useOneToOneContext } from "@/context/OneToOneContext";
import { useDisclosure } from "@/hooks/disclosure";
import { faceTransactionById } from "@/services/faces/client";
import { IFacesTransactionById } from "@/services/faces/types";
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

  const [loading, setLoading] = useState(true);
  const [dataFaceTransactionById, setDatFaceTransactionById] = useState(
    {} as IFacesTransactionById
  );

  const handleImageLoad = () => {
    setLoading(false);
  };

  const fetchFaceTransactionById = useCallback(async () => {
    const response = await faceTransactionById(id);
  }, [id]);

  useEffect(() => {
    fetchFaceTransactionById();
  }, [id, fetchFaceTransactionById]);

  return (
    <>
      <Table.Body.Row onClick={onOpen}>{children}</Table.Body.Row>

      <Modal.Root
        title={"Informações de "}
        isOpen={isOpen}
        onClose={onClose}
        className="max-lg:min-w-[400px]"
      >
        {/* <Modal.Body className="flex gap-4 flex-row pb-3">
          <div className="w-1/2">
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex flex-col gap-0.5">
                <p className="text-zinc-600">Nome:</p>
                <p className="text-lg font-bold">{data.name}</p>
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-zinc-600">CPF:</p>
                <p className="text-lg font-bold">{cpfMask(data.cpf)}</p>
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-zinc-600">Criado em:</p>
                <p className="text-lg font-bold">{dateTime(data.created_at)}</p>
              </div>
            </div>
          </div>
          <Image
            src={data.image}
            width={300}
            height={300}
            alt=""
            className={clsx(
              "transition-opacity duration-500 h-[240px] w-[240px] object-cover rounded-xl border border-slate-400",
              {
                "animate-pulse bg-zinc-300": loading,
              }
            )}
            onLoadingComplete={handleImageLoad}
          />
        </Modal.Body>
        <Modal.Footer className="justify-between">
          <Button variant="error" onClick={onClose}>
            Fechar
          </Button>
          <Link href={"/services/oneToOne/compareFaces/" + data.id}>
            <Button onClick={clearAll}>Comparar com outra face</Button>
          </Link>
        </Modal.Footer> */}
      </Modal.Root>
    </>
  );
}
