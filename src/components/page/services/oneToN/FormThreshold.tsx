import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { TextInput } from "@/components/TextInput";
import { useOneToNContext } from "@/context/OneToNContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { z } from "zod";

export function FormThreshold() {
  const { setStep, setThreshold, threshold } = useOneToNContext();
  const { back } = useRouter();

  const schema = z.object({
    threshold: z.coerce.number(),
  });

  type IAddThreshold = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddThreshold>({
    resolver: zodResolver(schema),
    defaultValues: {
      threshold: threshold || undefined,
    },
  });

  const onSubmit = useCallback(
    (data: IAddThreshold) => {
      setThreshold(data.threshold);
      setStep(2);
    },
    [setThreshold, setStep]
  );

  return (
    <Card className="w-[600px] flex flex-col gap-4">
      <h1 className="text-2xl text-center font-semibold py-4">
        Porcentagem de similaridade
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <TextInput.Root>
          <TextInput.Content>
            <TextInput.Input
              type="number"
              {...register("threshold")}
              placeholder="Escolha uma porcentagem de busca"
              min={1}
              max={100}
            />
          </TextInput.Content>
          <TextInput.Error
            isInvalid={!!errors.threshold}
            description={errors.threshold?.message}
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
