import { TableBodyDataPossibleUndefined } from "./TabeBodyPossibleUndefined";
import { TableBody } from "./TableBodyContent";
import { TableBodyDataDefault } from "./TableBodyDefault";
import { TableEmptyData } from "./TableBodyEmpty";
import { TableBodyRow } from "./TableBodyRow";
import { TableCaption } from "./TableCaption";
import { TableHeaderBody } from "./TableHeaderContent";
import { TableHeaderItem } from "./TableHeaderItem";
import { TableHeaderItemOrder } from "./TableHeaderItemOrder";
import { TableHeaderRow } from "./TableHeaderRow";
import { TablePagination } from "./TablePagination";
import { TableRoot } from "./TableRoot";
import { TableTable } from "./TableTable";

export const Table = {
  Root: TableRoot,
  Table: TableTable,
  Caption: TableCaption,
  Header: {
    Content: TableHeaderBody,
    Item: {
      Row: TableHeaderRow,
      Default: TableHeaderItem,
      Order: TableHeaderItemOrder,
    },
  },
  Body: {
    EmptyData: TableEmptyData,
    Content: TableBody,
    Row: TableBodyRow,
    Data: {
      Default: TableBodyDataDefault,
      PossibleUndefined: TableBodyDataPossibleUndefined,
    },
  },
  Pagination: TablePagination,
};
