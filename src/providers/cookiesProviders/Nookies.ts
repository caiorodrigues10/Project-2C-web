import { NextApiResponse } from "next";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { ICookieProvider, ICookies, UserCookies } from "./interface";

export function nookiesProvider(): ICookieProvider {
  const defaultMaxAge = 60 * 60 * 24; // 24 hour

  function resetCookies(params?: { res: NextApiResponse; path: string }): void {
    destroyCookie({ res: params?.res }, "2c.token", {
      path: params?.path || "/",
    });
    destroyCookie({ res: params?.res }, "2c.name", {
      path: params?.path || "/",
    });
    destroyCookie({ res: params?.res }, "2c.email", {
      path: params?.path || "/",
    });
  }

  function getCookies(res?: NextApiResponse): UserCookies {
    const {
      "2c.token": token,
      "2c.email": email,
      "2c.name": name,
    } = parseCookies(res);

    return {
      token,
      email,
      name,
    };
  }

  function setCookies({
    userCookies: { email, name, token },
    res,
  }: {
    res?: NextApiResponse | undefined;
    userCookies: UserCookies;
  }): void {
    setCookie({ res }, "2c.token", token || "", {
      maxAge: defaultMaxAge,
      path: "/",
    });
    setCookie({ res }, "2c.name", name || "", {
      maxAge: defaultMaxAge,
      path: "/",
    });
    setCookie({ res }, "2c.email", email || "", {
      maxAge: defaultMaxAge,
      path: "/",
    });
  }

  function setArrayCookies({
    cookies,
    res,
  }: {
    res?: NextApiResponse | undefined;
    cookies: ICookies[];
  }): void {
    cookies.forEach((cookie) => {
      setCookie({ res }, cookie.key, cookie.value, {
        maxAge: cookie.expired || defaultMaxAge,
      });
    });
  }

  return {
    defaultMaxAge,
    getCookies,
    resetCookies,
    setArrayCookies,
    setCookies,
  };
}
