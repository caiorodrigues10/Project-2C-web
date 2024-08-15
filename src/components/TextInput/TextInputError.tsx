import clsx from "clsx";
import { TextInputErrorProps } from "./type";

export function TextInputError({
  description,
  isInvalid,
}: TextInputErrorProps) {
  return (
    <label
      className={clsx("text-sm text-red-600 min-h-4 mt-1", {
        "opacity-0": !isInvalid,
      })}
    >
      {description}
    </label>
  );
}
