import { TableIcon } from "lucide-react";
import { TableEmptyDataProps } from "./types";
import clsx from "clsx";

export function TableEmptyData({
  description,
  className,
}: TableEmptyDataProps) {
  return (
    <tr
      className={clsx(
        "absolute flex h-[360px] w-full flex-col items-center justify-center p-6 text-center opacity-80",
        className
      )}
    >
      <td className="flex w-full flex-col items-center justify-center gap-4">
        <TableIcon size={90} className="text-zinc-400" />

        <h2 className="text-zinc-400 text-2xl">{description}</h2>
      </td>
    </tr>
  );
}
