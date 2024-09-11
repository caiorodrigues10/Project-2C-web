import { LoadingTableProps } from "./types";

export function LoadingTable({ lines, columns }: LoadingTableProps) {
  return (
    <tbody>
      {Array.from(lines, (_, index) => (
        <tr
          key={index}
          className="table-hover h-[40px] odd:bg-slate-300 hover:odd:bg-slate-300"
        >
          {Array.from(columns, (_, index) => (
            <td key={index} className="p-4">
              <div className="animate-pulse flex-col">
                <div className="h-4 w-full rounded-md bg-slate-400" />
              </div>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
