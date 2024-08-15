// context/ToastContext.tsx
"use client";
import { ToastContainer } from "@/components/Toast/ContainerToast";
import { IToastProps } from "@/components/Toast/types";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { v4 as uuid } from "uuid";

interface ToastContextProps {
  addToast: (toast: Omit<IToastProps, "id">) => void;
  removeToast: (id: string) => void;
  toasts: IToastProps[];
}

const ToastContext = createContext<ToastContextProps>({} as ToastContextProps);

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<IToastProps[]>([]);

  const addToast = useCallback((toast: Omit<IToastProps, "id">) => {
    const newToast = { ...toast, id: uuid() };
    setToasts((prevToasts) => [...prevToasts, newToast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast, toasts }}>
      <ToastContainer toasts={toasts} />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
