import {
  InputHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputLabelProps {
  description?: string;
  className?: string;
}

export interface TextInputErrorProps {
  description?: string;
  isInvalid?: boolean;
}

export interface TextInputRootProps {
  children: ReactNode;
  className?: string;
}

export interface TextInputContentProps {
  children: ReactNode;
  className?: string;
}

export interface TextInputIconProps extends PropsWithChildren {
  children?: ReactNode;
}

export interface TextInputTextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}
