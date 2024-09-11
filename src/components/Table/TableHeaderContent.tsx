import { TableHeaderItem } from "./TableHeaderItem";
import { TableHeaderBodyProps } from "./types";

export function TableHeaderBody({ columns, children }: TableHeaderBodyProps) {
  return (
    <thead className="sticky top-0 z-10 bg-[#6102ff] text-sm uppercase text-white shadow-md">
      <tr>
        {columns &&
          columns.map((col, index) => {
            return <TableHeaderItem key={index}>{col}</TableHeaderItem>;
          })}
        {!columns && children}
      </tr>
    </thead>
  );
}
