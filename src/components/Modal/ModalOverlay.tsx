import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { ModalOverlayProps } from "./types";

export function ModalOverlay({
  children,
  isLoading,
  isOpen,
  onClose,
  ...rest
}: ModalOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={clsx(
            "flex fixed w-full h-full top-0 left-0 justify-center items-center duration-200 z-20"
          )}
        >
          <button
            type="button"
            disabled={isLoading}
            className={clsx(
              "w-full h-full absolute z-50 bg-black/50 disabled:cursor-not-allowed"
            )}
            onClick={onClose}
            {...rest}
          />
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="z-[9999]"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
