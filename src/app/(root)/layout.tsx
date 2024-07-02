import { BodyPage } from "@/components/BodyPage";
import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return <BodyPage>{children}</BodyPage>;
}
