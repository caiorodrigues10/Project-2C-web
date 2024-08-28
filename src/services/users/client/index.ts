import { PROVIDERS } from "@/providers";
import {
  IChangeUserPassword,
  ICreateUser,
  ICreateUserResponse,
  IUpdateUser,
  IUpdateUserResponse,
} from "../types";
import api from "@/services/api";
import { AppResponse } from "@/services/AppResponse";

export async function updateUser(
  data: IUpdateUser,
  id: number
): Promise<IUpdateUserResponse> {
  const { getCookies } = PROVIDERS.cookies();
  const { token } = getCookies();
  const response = await fetch(`${api}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ ...data, id: undefined }),
  })
    .then((res) => res.json())
    .catch((err) => err.response);

  return response;
}

export async function createUser(
  data: ICreateUser
): Promise<ICreateUserResponse> {
  const { getCookies } = PROVIDERS.cookies();
  const { token } = getCookies();

  const response = await fetch(`${api}/users`, {
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

export async function inactiveUser(id: number): Promise<AppResponse> {
  const { getCookies } = PROVIDERS.cookies();
  const { token } = getCookies();

  const response = await fetch(`${api}/users/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => err.response);

  return response;
}

export async function recoveryPassword(data: {
  email: string;
}): Promise<AppResponse> {
  const { getCookies } = PROVIDERS.cookies();
  const { token } = getCookies();
  const response = await fetch(`${api}/users/forgotPassword`, {
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

export async function changePassword(
  data: IChangeUserPassword,
  token: string
): Promise<AppResponse> {
  const response = await fetch(
    `${api}/users/forgotPassword/changePassword?token=${token}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((res) => res.json())
    .catch((err) => err.response);

  return response;
}
