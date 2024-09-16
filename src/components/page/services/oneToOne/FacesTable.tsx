import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { ClientOnly } from "@/components/ClientOnly";
import { Table } from "@/components/Table";
import { LoadingTable } from "@/components/Table/LoadingTable";
import { IListFacesResponse } from "@/services/faces/types";
import { cpfMask, dateTime } from "@/utils/MaskProvider";
import clsx from "clsx";
import { ModalFaceById } from "./ModalFaceById";
import Link from "next/link";

export function FacesTable({
  data,
  searchParams,
}: {
  data: IListFacesResponse;
  searchParams: { page: number; limit: number };
}) {
  return (
    <Card className="w-full">
      <Table.Root>
        <Table.Caption className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Faces cadastradas</h1>
          <Link href={"/services/registerFace"}>
            <Button variant="black-white">Cadastrar nova face</Button>
          </Link>
        </Table.Caption>
        <Table.Table>
          <Table.Header.Content>
            {["Nome", "CPF", "Data de criação"].map((head, index) => (
              <Table.Header.Item.Default
                key={index}
                className={clsx({
                  "text-end": ["Data de criação"].includes(head),
                })}
              >
                {head}
              </Table.Header.Item.Default>
            ))}
          </Table.Header.Content>
          <ClientOnly
            fallback={<LoadingTable lines="012345678" columns="123" />}
          >
            <Table.Body.Content>
              {data && data.count > 0 ? (
                data?.list?.map((row) => {
                  const { cpf, created_at, id, name } = row;

                  const { Default } = Table.Body.Data;

                  return (
                    <ModalFaceById data={row} key={id}>
                      <Default>{name}</Default>
                      <Default>{cpfMask(cpf)}</Default>
                      <Default className="text-end">
                        {dateTime(created_at)}
                      </Default>
                    </ModalFaceById>
                  );
                })
              ) : (
                <Table.Body.EmptyData description="Nenhuma face encontrada" />
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
