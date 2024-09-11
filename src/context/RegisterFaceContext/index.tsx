import { createContext, ReactNode, useContext, useState } from "react";

export interface IDataRegisterFace {
  cpf: string;
  name: string;
}

export interface RegisterFaceContextData {
  dataRegisterFace: IDataRegisterFace;
  setDataRegisterFace: (value: IDataRegisterFace) => void;
  photoFace: string;
  setPhotoFace: (value: string) => void;
  step: number;
  setStep: (value: number) => void;
}

const RegisterFaceContext = createContext<RegisterFaceContextData>(
  {} as RegisterFaceContextData
);

interface RegisterFaceProviderProps {
  children?: ReactNode;
}

const RegisterFaceProvider: React.FC<RegisterFaceProviderProps> = ({
  children,
}) => {
  const [dataRegisterFace, setDataRegisterFace] = useState(
    {} as IDataRegisterFace
  );
  const [photoFace, setPhotoFace] = useState("");
  const [step, setStep] = useState(1);

  return (
    <RegisterFaceContext.Provider
      value={{
        dataRegisterFace,
        setDataRegisterFace,
        photoFace,
        setPhotoFace,
        setStep,
        step,
      }}
    >
      {children}
    </RegisterFaceContext.Provider>
  );
};

export const useRegisterFaceContext = (): RegisterFaceContextData => {
  const context = useContext(RegisterFaceContext);

  if (!context) {
    throw new Error(
      "useRegisterFaceContext must be used within an RegisterFaceProvider"
    );
  }

  return context;
};

export { RegisterFaceProvider };
