import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { TextInput } from "@/components/TextInput";
import {
  IDataRegisterFace,
  useRegisterFaceContext,
} from "@/context/RegisterFaceContext";
import { cpfMask } from "@/utils/MaskProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { z } from "zod";

export function IdentityRegisterFace() {
  const { setStep, dataRegisterFace, setDataRegisterFace } =
    useRegisterFaceContext();
  const { back } = useRouter();

  const schema = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    cpf: z.string().min(1, "CPF é obrigatório"),
    date: z.string().min(1, "Data de nascimento é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IDataRegisterFace>({
    resolver: zodResolver(schema),
    defaultValues: dataRegisterFace,
  });

  const onSubmit = useCallback(
    (data: IDataRegisterFace) => {
      setDataRegisterFace(data);
      setStep(2);
    },
    [setDataRegisterFace, setStep]
  );

  return (
    <Card className="w-[600px] flex flex-col gap-4">
      <h1 className="text-2xl text-center font-semibold py-4">Identificação</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <TextInput.Root>
          <TextInput.Content>
            <TextInput.Input
              type="text"
              {...register("name")}
              placeholder="Nome completo"
            />
          </TextInput.Content>
          <TextInput.Error
            isInvalid={!!errors.name}
            description={errors.name?.message}
          />
        </TextInput.Root>

        <TextInput.Root>
          <TextInput.Content>
            <TextInput.Input
              type="date"
              {...register("date")}
              placeholder="Data de nascimento"
              maxLength={14}
            />
          </TextInput.Content>
          <TextInput.Error
            isInvalid={!!errors.date}
            description={errors.date?.message}
          />
        </TextInput.Root>
        <TextInput.Root>
          <TextInput.Content>
            <TextInput.Input
              type="text"
              {...register("cpf")}
              placeholder="CPF"
              onChange={(e) => {
                setValue("cpf", cpfMask(e.target.value));
              }}
            />
          </TextInput.Content>

          <TextInput.Error
            isInvalid={!!errors.cpf}
            description={errors.cpf?.message}
          />
        </TextInput.Root>
        <div className="flex justify-between">
          <Button
            onClick={back}
            type="button"
            iconLeft={<HiOutlineArrowLeft />}
          >
            Voltar
          </Button>
          <Button type="submit" iconRight={<HiOutlineArrowRight />}>
            Próximo
          </Button>
        </div>
      </form>
    </Card>
  );
}
