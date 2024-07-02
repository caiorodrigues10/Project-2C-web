import { Slot } from "@radix-ui/react-slot";
import { TextInputIconProps } from "./type";

export function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className="flex items-center justify-center text-[#7a99ff]">
      {children}
    </Slot>
  );
}

TextInputIcon.displayName = "TextInput.Icon";
