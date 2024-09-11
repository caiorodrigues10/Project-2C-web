"use client";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { TableBodyRowProps } from "./types";

export function TableBodyRow({
  children,
  onClick,
  className,
  href,
}: TableBodyRowProps) {
  const { push } = useRouter();
  return (
    <tr
      className={clsx("table-row", className)}
      onClick={() => {
        onClick && onClick();
        href && push(href);
      }}
    >
      {children}
    </tr>
  );
}
