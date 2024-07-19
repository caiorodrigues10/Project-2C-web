import clsx from "clsx";
import { CheckBoxRootProps } from "./types";

export function CheckBoxRoot({ children, className }: CheckBoxRootProps) {
  return (
    <div className={clsx("flex gap-2 items-center", className)}>{children}</div>
  );
}
