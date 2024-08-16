import { AppResponse } from "@/services/AppResponse";

interface ILogin {
  email: string;
  password: string;
}

interface ILoginResponse extends AppResponse {
  data?: {
    token: string;
    user: {
      id: number;
      name: string;
      email: string;
    };
  };
}

export type { ILogin, ILoginResponse };
