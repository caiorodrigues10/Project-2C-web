"use client";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { IToastProps } from "./types";
import { useEffect } from "react";

const toastStyles = {
  success: "bg-green-500",
  info: "bg-blue-500",
  warning: "bg-yellow-500",
  error: "bg-red-500",
};

const Toast: React.FC<IToastProps> = ({ id, type, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, 5000);

    return () => clearTimeout(timer);
  }, [id, onClose]);

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className={`max-w-xs w-full ${toastStyles[type]} text-white p-4 rounded-lg shadow-lg flex items-center`}
    >
      <div className="flex-1">{message}</div>
      <button onClick={() => onClose(id)} className="ml-4" aria-label="Close">
        <X size={24} />
      </button>
    </motion.li>
  );
};

export default Toast;
