import { PROVIDERS } from "@/providers";
import {
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
    .then((res) => res)
    .catch((err) => err.response);

  const user = await response.json();

  return user;
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
  });

  const createUser = await response.json();

  return createUser;
}

export async function inactiveUser(id: number): Promise<AppResponse> {
  const { getCookies } = PROVIDERS.cookies();
  const { token } = getCookies();

  const response = await fetch(`${api}/users/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const inactiveUser = await response.json();

  return inactiveUser;
}

// export async function reactiveUser(
//   data: IReactiveUser,
//   id: number
// ): Promise<IUserCreateAndEditResponse> {
//   const { getCookies } = PROVIDERS.cookies();
//   const { token } = getCookies();
//   const response = await fetch(`${api}/v1/dashboard/users/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify({ ...data, id: undefined }),
//   })
//     .then((res) => res)
//     .catch((err) => err.response);

//   const user = await response.json();

//   return user;
// }

// export async function updatePassword(
//   data: IUpdatePassword
// ): Promise<IUpdatePasswordResponse> {
//   const { getCookies } = PROVIDERS.cookies();
//   const { token } = getCookies();

//   const update = await fetch(
//     `${process.env.NEXT_PUBLIC_URL_API}/v1/dashboard/users/password/${data.token}`,
//     {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ password: data.password }),
//     }
//   )
//     .then((res) => res.json())
//     .catch((err) => err.response);

//   return update;
// }
