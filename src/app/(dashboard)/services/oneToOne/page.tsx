import { FacesTable } from "@/components/page/services/oneToOne/FacesTable";
import { IListFacesResponse } from "@/services/faces/types";
import { useServer } from "@/utils/useServer";

export default async function OneToOnePage({
  searchParams,
}: {
  searchParams: { page: number; limit: number };
}) {
  const faces = await useServer<IListFacesResponse>({
    pathname: "faces/allFaces",
    query: [
      { name: "page", value: searchParams.page },
      { name: "limit", value: searchParams.limit || 30 },
    ],
  });

  return (
    <FacesTable
      data={faces?.data || ({} as IListFacesResponse)}
      searchParams={searchParams}
    />
  );
}
