import clsx from 'clsx'
import { TableBodyTd } from './TableTd'
import { TableBodyDataPossibleUndefinedProps } from './types'
import { Minus } from 'lucide-react'

export function TableBodyDataPossibleUndefined({
  className,
  children,
  ...rest
}: TableBodyDataPossibleUndefinedProps) {
  return (
    <TableBodyTd
      className={clsx('text-sm dark:text-zinc-100', className)}
      {...rest}
    >
      {children || '--'}
    </TableBodyTd>
  )
}
