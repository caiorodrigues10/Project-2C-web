import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "black-white";
}

export function Button({
  children,
  variant = "default",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-xl px-4 py-3 flex items-center justify-center text-md font-medium",
        {
          "button-default": variant === "default",
        }
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
