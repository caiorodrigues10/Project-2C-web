"use client";
import { Button } from "@/components/Button";
import { Modal } from "@/components/Modal";
import { TextInput } from "@/components/TextInput";
import { useTimerContext } from "@/context/TimerContext";
import { useDisclosure } from "@/hooks/disclosure";
import { Mail } from "lucide-react";

export function ModalSendEmail() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { formatTime, startCounter, isRunning } = useTimerContext();

  return (
    <>
      <button type="button" className="link -mt-3 w-fit" onClick={onOpen}>
        Esqueceu sua senha?
      </button>

      <Modal.Root
        title="Recuperar senha"
        isOpen={isOpen}
        onClose={onClose}
        className="max-lg:min-w-[400px]"
      >
        <form>
          <Modal.Body>
            <TextInput.Root>
              <TextInput.Content>
                <TextInput.Icon>
                  <Mail size={16} />
                </TextInput.Icon>
                <TextInput.Input placeholder="E-mail" />
              </TextInput.Content>
            </TextInput.Root>
            {isRunning && (
              <p className="flex w-1/12 justify-center pt-5">{formatTime()}</p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button>Enviar</Button>
          </Modal.Footer>
        </form>
      </Modal.Root>
    </>
  );
}
