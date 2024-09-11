"use client";
import clsx from "clsx";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReactNode } from "react";

interface TablePaginationButtonProps {
  toPage?: string;
  children: ReactNode;
  selected?: boolean;
  disabled?: boolean;
  className?: string;
  limit?: number;
}

function TablePaginationButton({
  toPage,
  children,
  selected,
  disabled,
  className,
  limit,
}: TablePaginationButtonProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const urlSearchParams = new URLSearchParams(searchParams.toString());

  return disabled ? (
    <div
      className={clsx(
        "border border-slate-300 bg-neutral-100 text-zinc-400 duration-200 first:rounded-l-lg last:rounded-r-lg rounded-md",
        {
          "bg-neutral-100": selected || !disabled,
        }
      )}
    >
      <button
        disabled={disabled}
        className={clsx(
          "flex h-7 w-7 items-center justify-center text-sm leading-tight",
          {
            "cursor-not-allowed": disabled,
          },
          className
        )}
      >
        {children}
      </button>
    </div>
  ) : (
    <button
      disabled={disabled}
      onClick={() => {
        urlSearchParams.set("page", String(toPage));
        urlSearchParams.set("limit", String(limit));

        replace(pathname + "?" + urlSearchParams.toString());
      }}
      className={clsx(
        "flex h-7 w-7 items-center justify-center border border-slate-300 text-sm leading-tight duration-200 first:rounded-l-lg last:rounded-r-lg rounded-md",
        {
          "bg-zinc-400": selected,
          "bg-zinc-200 hover:bg-zinc-300": !disabled,
          "cursor-not-allowed": disabled,
        },
        className
      )}
    >
      {children}
    </button>
  );
}

interface TablePaginationProps {
  limit?: number;
  page: number;
  totalItems: number;
  startZero?: boolean;
  params?: string[];
}

export function TablePagination({
  page,
  totalItems,
  limit = 10,
}: TablePaginationProps) {
  const pages = Math.ceil(totalItems / limit);
  const current = Math.min(page + 1, pages);

  const totalShowing =
    limit * current > totalItems ? totalItems : limit * current;

  return (
    <nav className="mt-auto flex w-full items-center justify-between gap-4 p-4 pt-0 max-md:flex-col">
      <div className="flex items-center gap-1 max-sm:flex-col">
        <div className="flex gap-1">
          <p className="text-gray-500">Mostrando</p>
          <p className="font-semibold">{totalShowing}</p>
          <p className="text-gray-500">de</p>
          <p className="font-semibold">{totalItems}</p>
        </div>
      </div>

      <ul className="inline-flex items-center gap-2 -space-x-px">
        <TablePaginationButton
          toPage={current === 1 ? String(page) : String(page - 1)}
          disabled={current === 1 || current === 0}
          limit={limit}
        >
          <ArrowLeftFromLine size={14} />
        </TablePaginationButton>

        {current > 2 && (
          <TablePaginationButton toPage="0" limit={limit}>
            1
          </TablePaginationButton>
        )}

        {current >= 4 && (
          <TablePaginationButton toPage="" limit={limit} disabled>
            ...
          </TablePaginationButton>
        )}

        {current > 1 && (
          <TablePaginationButton toPage={String(page - 1)} limit={limit}>
            {current - 1}
          </TablePaginationButton>
        )}

        <TablePaginationButton
          selected
          toPage={String(page)}
          disabled
          limit={limit}
        >
          {current === 0 ? 1 : current}
        </TablePaginationButton>

        {current < pages && (
          <TablePaginationButton toPage={String(page + 1)} limit={limit}>
            {current + 1}
          </TablePaginationButton>
        )}

        {pages > current + 2 && (
          <TablePaginationButton toPage="" limit={limit} disabled>
            ...
          </TablePaginationButton>
        )}

        {current !== pages && current + 1 !== pages && (
          <TablePaginationButton toPage={String(pages - 1)} limit={limit}>
            {pages}
          </TablePaginationButton>
        )}

        <TablePaginationButton
          toPage={current === pages ? String(page) : String(page + 1)}
          disabled={current === pages}
          limit={limit}
        >
          <ArrowRightFromLine size={14} />
        </TablePaginationButton>
      </ul>
    </nav>
  );
}
