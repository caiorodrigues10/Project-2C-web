import clsx from "clsx";
import { BsFillCameraVideoOffFill } from "react-icons/bs";

const NotCam: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={clsx(
        "flex justify-center items-center gap-4 flex-col h-full pt-4 pb-12 my-12",
        className
      )}
    >
      <BsFillCameraVideoOffFill size={40} />
      <h2 className="text-xl font-semibold">Nenhuma câmera encontrada!</h2>
      <p className="text-center max-w-[550px]">
        Acesse um dispositivo com câmera para continuar o processo ou verifique
        se nenhum aplicativo está usando a câmera.
      </p>
    </div>
  );
};

export { NotCam };
