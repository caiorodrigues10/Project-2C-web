import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { ClientOnly } from "@/components/ClientOnly";
import { Table } from "@/components/Table";
import { LoadingTable } from "@/components/Table/LoadingTable";
import {
  IListFacesResponse,
  IListFacesTransactionsResponse,
} from "@/services/faces/types";
import { cpfMask, dateTime } from "@/utils/MaskProvider";
import clsx from "clsx";
import Link from "next/link";
import { ModalFaceTransactionById } from "./ModalFaceTransactionById";

export function HistoryTable({
  data,
  searchParams,
}: {
  data: IListFacesTransactionsResponse;
  searchParams: { page: number; limit: number };
}) {
  return (
    <Card className="w-full">
      <Table.Root>
        <Table.Caption className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Histórico de transações</h1>
          <Link href={"/services/registerFace"}>
            <Button variant="black-white">Cadastrar nova face</Button>
          </Link>
        </Table.Caption>
        <Table.Table>
          <Table.Header.Content>
            {["Faces encontradas", "Processo", "Data de criação"].map(
              (head, index) => (
                <Table.Header.Item.Default
                  key={index}
                  className={clsx({
                    "text-end": ["Data de criação"].includes(head),
                    "text-center": ["Processo"].includes(head),
                  })}
                >
                  {head}
                </Table.Header.Item.Default>
              )
            )}
          </Table.Header.Content>
          <ClientOnly
            fallback={<LoadingTable lines="012345678" columns="123" />}
          >
            <Table.Body.Content>
              {data && data.count > 0 ? (
                data?.list?.map((row) => {
                  const { action, createdAt, facesFound, id } = row;

                  const { Default } = Table.Body.Data;

                  return (
                    <ModalFaceTransactionById id={id} key={id}>
                      <Default>{facesFound}</Default>
                      <Default className="text-center">{action}</Default>
                      <Default className="text-end">
                        {dateTime(String(createdAt))}
                      </Default>
                    </ModalFaceTransactionById>
                  );
                })
              ) : (
                <Table.Body.EmptyData description="Nenhuma transação encontrada" />
              )}
            </Table.Body.Content>
          </ClientOnly>
        </Table.Table>
        <Table.Pagination
          totalItems={data?.count || 0}
          startZero
          page={Number(searchParams.page) || 0}
          limit={Number(searchParams.limit) || 30}
        />
      </Table.Root>
    </Card>
  );
}
