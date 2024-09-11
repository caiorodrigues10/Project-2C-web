import clsx from "clsx";
import { TableRootProps } from "./types";

export function TableRoot({
  children,
  className,
  fullScreen = true,
}: TableRootProps) {
  return (
    <div className={clsx("flex w-full flex-col gap-4", className)}>
      {children}
    </div>
  );
}
