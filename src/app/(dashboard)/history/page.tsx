import { HistoryTable } from "@/components/page/services/history/HistoryTable";
import { IListFacesResponse, IListFacesTransactionsResponse } from "@/services/faces/types";
import { useServer } from "@/utils/useServer";




export default async function HistoryPage({searchParams}:{
  searchParams: { page: number; limit: number };

}) {
    const facesTransactions = await useServer<IListFacesTransactionsResponse>({
        pathname: "faces",
        query: [
          { name: "page", value: searchParams.page },
          { name: "limit", value: searchParams.limit || 30 },
        ],
      });

    return (
        <HistoryTable searchParams={searchParams} data={facesTransactions.data || {}as IListFacesTransactionsResponse} />
    )
}