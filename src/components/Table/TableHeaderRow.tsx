import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'

export function TableHeaderRow({
  children,
  className,
  asChild = false,
  ...rest
}: {
  children?: any
  className?: string
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : 'div'

  return (
    <th {...rest}>
      <Comp className={clsx('px-3 py-2', className)}>{children}</Comp>
    </th>
  )
}
