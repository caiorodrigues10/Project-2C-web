import { BodyPage } from "@/components/BodyPage";
import Image from "next/image";
import { PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <BodyPage>
      <Image
        width={600}
        height={300}
        alt=""
        src={"/lines.svg"}
        className="fixed top-0 right-0 -z-10"
      />

      {children}
    </BodyPage>
  );
}
