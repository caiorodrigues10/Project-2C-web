import clsx from "clsx";
import { TextInputRootProps } from "./type";

export function TextInputRoot({ children, className }: TextInputRootProps) {
  return <div className={clsx("flex flex-col", className)}>{children}</div>;
}
