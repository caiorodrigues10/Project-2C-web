"use client";
import { AppProvider } from "@/context/AppContext";
import { OneToNProvider } from "@/context/OneToNContext";
import { OneToOneProvider } from "@/context/OneToOneContext";
import { RegisterFaceProvider } from "@/context/RegisterFaceContext";
import { ToastProvider } from "@/context/ToastContext";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ToastProvider>
      <AppProvider>
        <OneToNProvider>
          <OneToOneProvider>
            <RegisterFaceProvider>{children}</RegisterFaceProvider>
          </OneToOneProvider>
        </OneToNProvider>
      </AppProvider>
    </ToastProvider>
  );
}
