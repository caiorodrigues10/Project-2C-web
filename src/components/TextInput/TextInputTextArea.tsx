"use client";
import clsx from "clsx";
import { forwardRef } from "react";
import { TextInputTextAreaProps } from "./type";

const TextInputTextArea = forwardRef<
  HTMLTextAreaElement,
  TextInputTextAreaProps
>(({ className, rows = 4, ...rest }, ref) => {
  return (
    <textarea
      className={clsx(
        "text-sm bg-transparent outline-none w-full placeholder:text-zinc-500",
        className
      )}
      rows={rows}
      ref={ref}
      {...rest}
    />
  );
});

TextInputTextArea.displayName = "TextInputTextArea";

export { TextInputTextArea };
