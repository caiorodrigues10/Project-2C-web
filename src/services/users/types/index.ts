import { AppResponse } from "@/services/AppResponse";

interface IUser {
  cpf: string;
  email: string;
  id: number;
  name: string;
  telephone: string;
  active: boolean;
  createdAt: string;
}

interface ICreateUser {
  cpf: string;
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  telephone?: string;
}

interface IUpdateUser {
  cpf: string;
  name: string;
  telephone?: string;
}

interface IUserByIdResponse extends AppResponse {
  data?: IUser;
}
interface ICreateUserResponse extends AppResponse {
  data?: IUser;
}

interface IUpdateUserResponse extends AppResponse {
  data?: IUser;
}

interface IChangeUserPassword {
  password: string;
  confirmPassword: string;
}

export type {
  IUser,
  ICreateUser,
  IUserByIdResponse,
  IUpdateUser,
  ICreateUserResponse,
  IUpdateUserResponse,
  IChangeUserPassword,
};
