import clsx from "clsx";
import { ModalFooterProps } from "./types";

export function ModalFooter({
  children,
  className,
  ...rest
}: ModalFooterProps) {
  return (
    <div
      className={clsx(
        "flex justify-end gap-4 items-center pt-4 border-t border-slate-300",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
