import clsx from "clsx";
import { CheckBoxLabelProps } from "./types";

export function CheckBoxLabel({ children, className }: CheckBoxLabelProps) {
  return <label className={clsx("text-md", className)}>{children}</label>;
}
