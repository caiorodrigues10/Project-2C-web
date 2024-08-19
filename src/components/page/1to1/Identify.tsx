import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { TextInput } from "@/components/TextInput";
import { cpfMask } from "@/utils/MaskProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { z } from "zod";

export interface IdentityData {
  name: string;
  document: string;
  date: string;
}

interface IdentityProps {
  identityData: IdentityData;
  setIdentityData: (data: IdentityData) => void;
  handleNextStep: () => void;
}

const Identity: React.FC<IdentityProps> = ({
  handleNextStep,
  setIdentityData,
  identityData,
}) => {
  const { back } = useRouter();

  const schema = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    document: z.string().min(1, "Documento é obrigatório"),
    date: z.string().min(1, "Data de nascimento é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IdentityData>({
    resolver: zodResolver(schema),
    defaultValues: identityData,
  });

  const onSubmit = useCallback(
    (data: IdentityData) => {
      console.log(data);

      setIdentityData(data);
      handleNextStep();
    },
    [handleNextStep, setIdentityData]
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
              {...register("document")}
              placeholder="CPF"
              onChange={(e) => {
                setValue("document", cpfMask(e.target.value));
              }}
            />
          </TextInput.Content>

          <TextInput.Error
            isInvalid={!!errors.document}
            description={errors.document?.message}
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
};

export { Identity };
