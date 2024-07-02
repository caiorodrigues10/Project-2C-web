import { NavBar } from "../NavBar";
import { BodyPageProps } from "./types";

export function BodyPage({ children }: BodyPageProps) {
  return (
    <div className="flex flex-col h-full w-full min-h-screen items-center">
      <NavBar />
      <div className="max-w-[1500px] h-full px-16 py-8">{children}</div>
    </div>
  );
}
