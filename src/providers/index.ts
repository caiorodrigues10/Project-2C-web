import { ICookieProvider, nookiesProvider } from "./cookiesProviders";

interface IProviders {
  cookies(): ICookieProvider;
}

export const PROVIDERS: IProviders = { cookies: nookiesProvider };
