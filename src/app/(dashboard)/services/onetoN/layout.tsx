import { PropsWithChildren } from "react";

export default function OneToNLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-12 justify-center items-center w-full">
      {children}
    </div>
  );
}
