import clsx from 'clsx'
import { ArrowDownZA, ArrowUpZA } from 'lucide-react'
import Link from 'next/link'
import { TableHeaderItemProps } from './types'

interface TableHeaderItemOrderProps extends TableHeaderItemProps {
  searchParams: any
  query: string
  pathname: string
  paramsDefault?: string
}

export function TableHeaderItemOrder({
  children,
  className,
  asChild = false,
  searchParams,
  query,
  pathname,
  paramsDefault = '',
  ...rest
}: TableHeaderItemOrderProps) {
  function createQueryString(name: string, value: string) {
    const params = new URLSearchParams(searchParams)
    let status

    if (!value) {
      params.set(name, 'asc')
      status = ''
    }
    if (value === 'desc') {
      params.delete(name)
      status = 'desc'
    }
    if (value === 'asc') {
      params.set(name, 'desc')
      status = 'asc'
    }

    return {
      redirect: params.toString(),
      status,
    }
  }

  const orderParams = createQueryString(
    query,
    !searchParams[`${query}`] ? paramsDefault : searchParams[`${query}`],
  )

  return (
    <th {...rest}>
      <Link
        href={{
          pathname,
          query: orderParams.redirect,
        }}
      >
        <div
          className={clsx(
            'flex items-center gap-2 px-3 py-2 text-xs',
            className,
          )}
        >
          {orderParams.status === 'asc' && <ArrowUpZA size={16} />}
          {orderParams.status === 'desc' && <ArrowDownZA size={16} />}

          {children}
        </div>
      </Link>
    </th>
  )
}
