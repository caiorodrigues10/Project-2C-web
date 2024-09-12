"use client";
import { Button } from "@/components/Button";
import { Modal } from "@/components/Modal";
import { TextInput } from "@/components/TextInput";
import { useTimerContext } from "@/context/TimerContext";
import { useDisclosure } from "@/hooks/disclosure";
import { recoveryPassword } from "@/services/users/client";
import { Mail } from "lucide-react";
import { useCallback, useState } from "react";
import { FormRecoveryPasswordProps, schemaRecoveryPassword } from "./types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/context/ToastContext";

export function ModalSendEmail() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { formatTime, startCounter, isRunning } = useTimerContext();
  const { addToast, removeToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormRecoveryPasswordProps>({
    resolver: zodResolver(schemaRecoveryPassword),
  });

  const onSubmit = useCallback(
    async (data: FormRecoveryPasswordProps) => {
      setIsLoading(true);

      const response = await recoveryPassword(data);

      if (response && response.result === "success") {
        addToast({
          type: "success",
          message:
            response?.message ||
            "Serviço indisponível tente novamente mais tarde",
          onClose: removeToast,
        });
        startCounter();
      } else {
        addToast({
          type: "error",
          message:
            response?.message ||
            "Serviço indisponível tente novamente mais tarde",
          onClose: removeToast,
        });
      }
      setIsLoading(false);
    },
    [addToast, startCounter, removeToast]
  );

  return (
    <>
      <button type="button" className="link w-fit" onClick={onOpen}>
        Esqueceu sua senha?
      </button>

      <Modal.Root
        title="Recuperar senha"
        isOpen={isOpen}
        onClose={onClose}
        className="max-lg:min-w-[400px]"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body className="flex gap-4 flex-row pb-3">
            <TextInput.Root className="w-full">
              <TextInput.Content>
                <TextInput.Icon>
                  <Mail size={16} />
                </TextInput.Icon>
                <TextInput.Input
                  placeholder="E-mail"
                  {...register("email")}
                  readOnly={isRunning}
                />
              </TextInput.Content>
              <TextInput.Error
                description={errors.email?.message}
                isInvalid={!!errors.email}
              />
            </TextInput.Root>
            {isRunning && (
              <p className="flex w-11 justify-center pt-2.5">{formatTime()}</p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              isLoading={isLoading}
              loadingText="Enviando..."
              disabled={isRunning}
            >
              Enviar
            </Button>
          </Modal.Footer>
        </form>
      </Modal.Root>
    </>
  );
}
