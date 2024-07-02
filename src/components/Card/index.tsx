import clsx from "clsx";
import { CardProps } from "./types";

export function Card({ className, children, ...rest }: CardProps) {
  return (
    <div className={clsx("card-theme", className)} {...rest}>
      {children}
    </div>
  );
}
