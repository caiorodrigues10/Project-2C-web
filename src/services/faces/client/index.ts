import { PROVIDERS } from "@/providers";
import { IOneToOne, IOneToOneResponse, IRegisterFace } from "../types";
import api from "@/services/api";
import { AppResponse } from "@/services/AppResponse";

export async function registerFace(data: IRegisterFace): Promise<AppResponse> {
  const { getCookies } = PROVIDERS.cookies();
  const { token } = getCookies();

  const response = await fetch(`${api}/faces`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => err.response);

  return response;
}

export async function oneToOne(data: IOneToOne): Promise<IOneToOneResponse> {
  const { getCookies } = PROVIDERS.cookies();
  const { token } = getCookies();

  const response = await fetch(`${api}/faces/oneToOne`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => err.response);

  return response;
}
