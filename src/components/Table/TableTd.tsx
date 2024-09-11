import { Slot } from '@radix-ui/react-slot'
import { TableBodyTdProps } from './types'
import clsx from 'clsx'

export function TableBodyTd({
  asChild,
  children,
  className,
  ...rest
}: TableBodyTdProps) {
  const Comp = asChild ? Slot : 'td'

  return (
    <Comp
      className={clsx(
        'table-text-theme max-w-[200px] whitespace-nowrap px-4 py-1.5',
        className,
      )}
      {...rest}
    >
      {children}
    </Comp>
  )
}
