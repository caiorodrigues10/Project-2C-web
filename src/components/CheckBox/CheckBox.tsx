import clsx from "clsx";
import { CheckBoxProps } from "./types";

export function InputCheckBox({ className, ...rest }: CheckBoxProps) {
  return (
    <input
      type="checkbox"
      className={clsx(
        "appearance-none border-2 border-[#99B0FF] bg-[#F5F9FE] rounded-md h-5 w-5 transition duration-200 cursor-pointer relative",
        "checked:bg-[#99B0FF] checked:border-transparent focus:outline-none",
        "before:absolute before:top-0 before:left-0 before:w-full before:h-full before:flex before:items-center before:justify-center",
        "before:content-[''] checked:before:content-['✓'] before:text-white before:font-bold before:opacity-0 checked:before:opacity-100",
        className
      )}
      {...rest}
    />
  );
}
