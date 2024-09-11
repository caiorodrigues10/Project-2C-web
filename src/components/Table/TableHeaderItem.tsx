import { Slot } from '@radix-ui/react-slot'
import { TableHeaderItemProps } from './types'
import clsx from 'clsx'

export function TableHeaderItem({
  children,
  className,
  asChild = false,
  ...rest
}: TableHeaderItemProps) {
  const Comp = asChild ? Slot : 'div'

  return (
    <th {...rest}>
      <Comp className={clsx('px-3 py-2 text-xs', className)}>{children}</Comp>
    </th>
  )
}
