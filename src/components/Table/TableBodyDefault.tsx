import clsx from "clsx";
import { TableBodyDataDefaultProps } from "./types";
import { TableBodyTd } from "./TableTd";

export function TableBodyDataDefault({
  children,
  className,
  onClick,
  ...rest
}: TableBodyDataDefaultProps) {
  return (
    <TableBodyTd
      className={clsx("text-sm", className)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </TableBodyTd>
  );
}
