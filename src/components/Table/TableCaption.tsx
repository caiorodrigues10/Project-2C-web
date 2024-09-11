import { TableCaptionProps } from './types'
import clsx from 'clsx'

export function TableCaption({ className, children }: TableCaptionProps) {
  return (
    <div className={clsx('w-full text-left')}>
      <div className={className}>{children}</div>
    </div>
  )
}
