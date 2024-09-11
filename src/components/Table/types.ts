import {
  ButtonHTMLAttributes,
  ReactNode,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from 'react'

interface LoadingTableProps {
  lines: string
  columns: string
}

interface TableData {
  isLoading: boolean
  striped?: boolean
  bordered?: boolean
}

interface TableBodyDataPossibleUndefinedProps
  extends TdHTMLAttributes<HTMLTableCellElement> {
  className?: string
  children?: ReactNode
}

interface TableRootProps {
  children?: ReactNode
  isLoading?: boolean
  striped?: boolean
  className?: string
  fullScreen?: boolean
}

interface TableTableProps {
  dataJson?: any[]
  children?: ReactNode
  bordered?: boolean
  className?: string
  isLoading?: boolean
}

interface TableHeaderBodyProps {
  columns?: string[]
  children?: ReactNode
}

interface TableHeaderItemProps extends ThHTMLAttributes<HTMLTableCellElement> {
  className?: string
  children: ReactNode
  asChild?: boolean
  onClick?: () => void
}

interface TableCaptionProps {
  className?: string
  children: ReactNode
}

interface TableBodyProps {
  dataJson?: any[]
  children?: ReactNode
  className?: string
  isLoading?: boolean
}

interface TableBodyRowProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  href?: string
}

interface TableEmptyDataProps {
  description: string
  className?: string
}

interface TableBodyTdProps extends TdHTMLAttributes<HTMLTableCellElement> {
  asChild?: boolean
  children: ReactNode
  className?: string
}
interface TableBodyDataDefaultProps
  extends TdHTMLAttributes<HTMLTableCellElement> {
  className?: string
}

interface IconProps {
  type: 'pressure' | 'temperature' | 'weight' | 'booleanCheck' | 'noSignal'
  value: string | number | boolean
  tooltip?: string
}

interface TableBodyDataIconsProps {
  icons: IconProps[]
}

interface TablePaginationButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  toPage: string
  children: ReactNode
  selected?: boolean
  disabled?: boolean
  className?: string
}

interface TablePaginationProps {
  limit?: number
  page: number
  totalItems: number
  startZero?: boolean
  isLoading?: boolean
}

interface TableBodyActionProps {
  link: string
  description?: string
}

export type {
  LoadingTableProps,
  TableBodyDataDefaultProps,
  TableBodyDataIconsProps,
  TableBodyProps,
  TableBodyRowProps,
  TableBodyTdProps,
  TableCaptionProps,
  TableData,
  TableEmptyDataProps,
  TableHeaderBodyProps,
  TableHeaderItemProps,
  TablePaginationButtonProps,
  TablePaginationProps,
  TableRootProps,
  TableTableProps,
  TableBodyActionProps,
  TableBodyDataPossibleUndefinedProps,
}
