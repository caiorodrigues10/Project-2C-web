import api from "@/services/api";
import { AppResponseNew } from "@/services/AppResponse";
import { cookies } from "next/headers";
import ParseQuery from "querystring";

interface IServerRequest {
  pathname: string;
  query?: { name: string; value: string | undefined | number | boolean }[];
  data?: {
    newToken?: string;
  };
  revalidate?: number;
}
async function useServer<T>({
  pathname,
  query,
  data,
  revalidate,
}: IServerRequest): Promise<AppResponseNew<T>> {
  const token = cookies().get("2c.token")?.value;
  const obj: ParseQuery.ParsedUrlQueryInput | undefined = {};
  query &&
    query.forEach((item) => {
      if (item.value) {
        obj[`${item.name}`] = item.value || "";
      }
    });
  const queryString = ParseQuery.stringify(obj);

  const response = await fetch(`${api}/${pathname}?${queryString}`, {
    headers: {
      Authorization: `Bearer ${(data && data.newToken) || token}`,
    },
    // next: {
    //   revalidate: revalidate || 500,
    // },
  })
    .then((res) => res.json())
    .catch((err) => err.response);

  return response;
}

export { useServer };
