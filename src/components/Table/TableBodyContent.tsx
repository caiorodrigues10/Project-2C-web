import clsx from 'clsx'
import { TableBodyDataDefault } from './TableBodyDefault'
import { TableEmptyData } from './TableBodyEmpty'
import { TableBodyRow } from './TableBodyRow'
import { TableBodyProps } from './types'

export function TableBody({ dataJson, children, className }: TableBodyProps) {
  return (
    <tbody className={clsx(className, 'relative')}>
      {dataJson ? (
        <>
          {dataJson[0] ? (
            dataJson.map((row, index) => (
              <TableBodyRow key={index}>
                {Object.values(row).map((data: any, indexData) => (
                  <TableBodyDataDefault key={indexData}>
                    {data}
                  </TableBodyDataDefault>
                ))}
              </TableBodyRow>
            ))
          ) : (
            <TableEmptyData description="Tabela sem dados" />
          )}
        </>
      ) : (
        children
      )}
    </tbody>
  )
}
