import { NextApiResponse } from "next";

type UserCookies = {
  token?: string;
  name?: string;
  email?: string;
};

type ICookies = {
  key: string;
  value: string;
  expired?: number;
};

interface ICookieProvider {
  defaultMaxAge: number;
  resetCookies(params?: { res: NextApiResponse; path: string }): void;
  getCookies(res?: NextApiResponse): UserCookies;
  setCookies(params: { res?: NextApiResponse; userCookies: UserCookies }): void;
  setArrayCookies(params: { res?: NextApiResponse; cookies: ICookies[] }): void;
}

export type { ICookieProvider, ICookies, UserCookies };
