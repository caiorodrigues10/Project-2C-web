"use client";
import { ToastContainer } from "@/components/Toast/ContainerToast";
import { ToastProvider } from "@/context/ToastContext";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return <ToastProvider>{children}</ToastProvider>;
}
