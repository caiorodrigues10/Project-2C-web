export interface IToastProps {
  id: string;
  type: "success" | "info" | "warning" | "error";
  message: string;
  onClose: (id: string) => void;
}
