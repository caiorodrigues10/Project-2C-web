"use client";
import { AppProvider } from "@/context/AppContext";
import { OneToOneProvider } from "@/context/OneToOneContext";
import { RegisterFaceProvider } from "@/context/RegisterFaceContext";
import { ToastProvider } from "@/context/ToastContext";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ToastProvider>
      <AppProvider>
        <OneToOneProvider>
          <RegisterFaceProvider>{children}</RegisterFaceProvider>
        </OneToOneProvider>
      </AppProvider>
    </ToastProvider>
  );
}
