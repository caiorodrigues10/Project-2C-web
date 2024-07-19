import { InputHTMLAttributes, ReactNode } from "react";

export interface CheckBoxRootProps {
  children: ReactNode;
  className?: string;
}

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface CheckBoxLabelProps {
  className?: string;
  children: ReactNode;
}
