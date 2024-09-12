import { PROVIDERS } from "@/providers";
import { ILogin, ILoginResponse } from "../types";
import api from "@/services/api";

export async function login(data: ILogin): Promise<ILoginResponse> {
  const { getCookies } = PROVIDERS.cookies();
  const { token } = getCookies();
  const response = await fetch(`${api}/users/session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ ...data }),
  })
    .then((res) => res)
    .catch((err) => err.response);

  const user = await response?.json();

  return user;
}
