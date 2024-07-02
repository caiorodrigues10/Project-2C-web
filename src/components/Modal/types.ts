import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export interface ModalRootProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  isLoading?: boolean;
  title?: string;
  children?: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}

export interface ModalBodyProps {
  className?: string;
}

export interface ModalOverlayProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
  isOpen: boolean;
  onClose: () => void;
}

export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {}

export interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {}
