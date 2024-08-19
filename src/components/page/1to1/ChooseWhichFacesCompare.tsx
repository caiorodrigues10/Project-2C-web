import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export function ChooseWhichFacesCompare() {
  return (
    <Card className=" w-[600px]">
      <h1 className="text-2xl text-center font-semibold py-4 pb-6">
        Escolha qual registrar primeiro
      </h1>

      <div className="flex gap-8 w-full">
        <div className="border border-zinc-500 flex justify-center items-center p-6 rounded-md hover:bg-slate-100 cursor-pointer duration-200 hover:shadow-md w-1/2 flex-col gap-4">
          <p>1º pessoa</p>
          <h4 className="text-center text-xl font-medium">
            Registrar face e dados
          </h4>
        </div>
        <div className="border border-zinc-500 flex justify-center items-center p-6 rounded-md hover:bg-slate-100 cursor-pointer duration-200 hover:shadow-md w-1/2 flex-col gap-4">
          <p>2º pessoa</p>
          <h4 className="text-center text-xl font-medium">
            Registar dados para ser comparados
          </h4>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <Button>Voltar</Button>
        <Button>Comparar faces</Button>
      </div>
    </Card>
  );
}
