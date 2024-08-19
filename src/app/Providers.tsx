"use client";
import { AppProvider } from "@/context/AppContext";
import { ToastProvider } from "@/context/ToastContext";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ToastProvider>
      <AppProvider>{children}</AppProvider>
    </ToastProvider>
  );
}
