"use client";
import React from "react";
import Toast from ".";
import { IToastProps } from "./types";
import { useToast } from "@/context/ToastContext";
import { AnimatePresence } from "framer-motion";

export function ToastContainer({ toasts }: { toasts: IToastProps[] }) {
  const { removeToast } = useToast();

  return (
    <AnimatePresence mode="popLayout">
      <div className="fixed top-0 right-0 mt-4 mr-4 space-y-2 z-[9999]">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            type={toast.type}
            message={toast.message}
            onClose={removeToast}
          />
        ))}
      </div>
    </AnimatePresence>
  );
}
