import { PROVIDERS } from "@/providers";
import {
  ICreateOneToN,
  ICreateOneToNResponse,
  ICreateOneToOne,
  IOneToOne,
  IOneToOneResponse,
  IRegisterFace,
  IRegisterFaceQDrant,
  IRegisterFaceResponse,
} from "../types";
import api from "@/services/api";
import { AppResponse } from "@/services/AppResponse";

export async function registerFace(
  data: IRegisterFace
): Promise<IRegisterFaceResponse> {
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

export async function registerFaceQDrant(
  data: IRegisterFaceQDrant
): Promise<AppResponse> {
  const { getCookies } = PROVIDERS.cookies();
  const { token } = getCookies();

  const response = await fetch(`${api}/faces/enroll`, {
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

export async function oneToN(
  data: ICreateOneToN
): Promise<ICreateOneToNResponse> {
  const { getCookies } = PROVIDERS.cookies();
  const { token } = getCookies();
  const newDate = {
    ...data,
    collection: "import",
  } as ICreateOneToN;

  const response = await fetch(`${api}/faces/searchFaces`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newDate),
  })
    .then((res) => res.json())
    .catch((err) => err.response);

  return response;
}
