import clsx from "clsx";
import { ModalBodyProps } from "./types";

export function ModalBody({ className, children }: ModalBodyProps) {
  return (
    <div className={clsx("py-8 px-4 pt-3 flex gap-4 w-full", className)}>
      {children}
    </div>
  );
}
