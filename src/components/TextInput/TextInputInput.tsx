"use client";
import { forwardRef, useState } from "react";
import { TextInputIcon } from "./TextInputIcon";
import { TextInputInputProps } from "./type";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export const TextInputInput = forwardRef<HTMLInputElement, TextInputInputProps>(
  ({ className, type, ...rest }, ref) => {
    const [typeInput, setTypeInput] = useState(type);

    return (
      <>
        <input
          className="text-md bg-transparent outline-none w-full placeholder:text-zinc-500"
          type={type === "password" ? typeInput : type}
          ref={ref}
          {...rest}
        />

        {type === "password" && (
          <TextInputIcon>
            {typeInput !== "password" ? (
              <IoMdEye
                className="cursor-pointer !text-[#7a99ff]"
                onClick={() => {
                  setTypeInput("password");
                }}
                size={24}
              />
            ) : (
              <IoMdEyeOff
                className="cursor-pointer !text-[#7a99ff]"
                onClick={() => {
                  setTypeInput("text");
                }}
                size={24}
              />
            )}
          </TextInputIcon>
        )}
      </>
    );
  }
);
