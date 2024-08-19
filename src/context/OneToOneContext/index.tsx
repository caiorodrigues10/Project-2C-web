import { createContext, ReactNode, useContext, useState } from "react";

export interface IDataOneToOne {
  cpf: string;
}

export interface OneToOneContextData {
  dataOneToOne: IDataOneToOne;
  setDataOneToOne: (value: IDataOneToOne) => void;
  photoFace: string;
  setPhotoFace: (value: string) => void;
  step: number;
  setStep: (value: number) => void;
}

const OneToOneContext = createContext<OneToOneContextData>(
  {} as OneToOneContextData
);

interface OneToOneProviderProps {
  children?: ReactNode;
}

const OneToOneProvider: React.FC<OneToOneProviderProps> = ({ children }) => {
  const [dataOneToOne, setDataOneToOne] = useState({} as IDataOneToOne);

  const [photoFace, setPhotoFace] = useState("");
  const [step, setStep] = useState(1);
  return (
    <OneToOneContext.Provider
      value={{
        dataOneToOne,
        setDataOneToOne,
        photoFace,
        setPhotoFace,
        setStep,
        step,
      }}
    >
      {children}
    </OneToOneContext.Provider>
  );
};

export const useOneToOneContext = (): OneToOneContextData => {
  const context = useContext(OneToOneContext);

  if (!context) {
    throw new Error(
      "useOneToOneContext must be used within an OneToOneProvider"
    );
  }

  return context;
};

export { OneToOneProvider };
