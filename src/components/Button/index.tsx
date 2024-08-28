import clsx from "clsx";
import { LoaderCircle } from "lucide-react";
import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "black-white" | "error";
  isLoading?: boolean;
  loadingText?: string;
  iconRight?: ReactElement;
  iconLeft?: ReactElement;
}

export function Button({
  children,
  variant = "default",
  loadingText,
  isLoading = false,
  iconLeft,
  iconRight,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-xl px-4 py-2 flex items-center justify-center text-md gap-2 font-medium disabled:cursor-not-allowed",
        {
          "button-default": variant === "default",
          "button-black-white": variant === "black-white",
          "button-error": variant === "error",
        },
        className
      )}
      {...rest}
    >
      {isLoading && <LoaderCircle className="animate-spin" />}

      {iconLeft && iconLeft}

      {isLoading && loadingText ? loadingText : children}

      {iconRight && iconRight}
    </button>
  );
}
