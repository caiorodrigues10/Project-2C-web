import clsx from "clsx";
import { TextInputLabelProps } from "./type";

export function TextInputLabel({
  description,
  className,
}: TextInputLabelProps) {
  return <label className={clsx("text-sm", className)}>{description}</label>;
}
