import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { TextInput } from "@/components/TextInput";
import { IDataOneToOne, useOneToOneContext } from "@/context/OneToOneContext";
import { cpfMask } from "@/utils/MaskProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { z } from "zod";

export function IdentityOneToOne() {
  const { back } = useRouter();
  const { setStep, setDataOneToOne, dataOneToOne } = useOneToOneContext();

  const schema = z.object({
    cpf: z.string().min(1, "CPF é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IDataOneToOne>({
    resolver: zodResolver(schema),
    defaultValues: dataOneToOne,
  });

  const onSubmit = useCallback(
    (data: IDataOneToOne) => {
      setDataOneToOne(data);
      setStep(2);
    },
    [setDataOneToOne, setStep]
  );

  return (
    <Card className="w-[600px] flex flex-col gap-4">
      <h1 className="text-2xl text-center font-semibold py-4">Identificação</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
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
