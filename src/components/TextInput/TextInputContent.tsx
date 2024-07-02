import clsx from "clsx";
import { TextInputContentProps } from "./type";

export function TextInputContent({
  children,
  className,
}: TextInputContentProps) {
  return (
    <div
      className={clsx(
        "flex justify-between items-center gap-2 bg-[#eff6ff] w-full px-3 py-2.5 rounded-xl border-2 border-[#99B0FF]",
        className
      )}
    >
      {children}
    </div>
  );
}
