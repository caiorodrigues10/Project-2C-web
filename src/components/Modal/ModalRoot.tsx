import { Card } from "@/components/Card";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ModalOverlay } from "./ModalOverlay";
import { ModalRootProps } from "./types";

export function ModalRoot({
  isOpen,
  onClose,
  className,
  isLoading,
  title,
  children,
  size = "md",
}: ModalRootProps) {
  return (
    <ModalOverlay isLoading={isLoading} isOpen={isOpen} onClose={onClose}>
      <Card
        className={clsx(className, {
          "min-w-[400px]": size === "sm",
          "min-w-[600px]": size === "md",
          "min-w-[800px]": size === "lg",
          "min-w-[1000px]": size === "xl",
        })}
      >
        <header className="flex justify-between items-center pb-2 border-b border-slate-300">
          <h2 className="font-semibold text-xl">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="flex p-2 justify-center items-center hover:bg-slate-200 hover:text-red-500 cursor-pointer duration-200 rounded-xl active:scale-95 active:hover:bg-slate-300"
          >
            <X size={22} />
          </button>
        </header>
        {children}
      </Card>
    </ModalOverlay>
  );
}
