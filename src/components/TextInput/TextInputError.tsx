import clsx from "clsx";
import { TextInputErrorProps } from "./type";

export function TextInputError({
  description,
  isInvalid,
}: TextInputErrorProps) {
  return (
    <label className={clsx("text-sm text-red-600", { hidden: !isInvalid })}>
      {description}
    </label>
  );
}
