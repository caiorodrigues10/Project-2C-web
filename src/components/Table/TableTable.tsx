import { TableBody } from "./TableBodyContent";
import { TableHeaderBody } from "./TableHeaderContent";
import clsx from "clsx";
import { TableTableProps } from "./types";

export function TableTable({
  children,
  dataJson,
  isLoading,
  className,
}: TableTableProps) {
  return (
    <div
      className={clsx(
        "relative h-[490px] overflow-auto rounded font-semibold scrollbar-show-fixed border border-slate-400 shadow-md",
        {
          "flex items-center justify-center": isLoading,
        },
        className
      )}
    >
      {isLoading ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-4">
          <h1 className="text-zinc-400">Carregando...</h1>
        </div>
      ) : (
        <table className="w-full text-left text-sm">
          {dataJson && dataJson[0] ? (
            <>
              <TableHeaderBody columns={Object.keys(dataJson[0])} />
              <TableBody dataJson={dataJson} />
            </>
          ) : (
            children
          )}
        </table>
      )}
    </div>
  );
}
