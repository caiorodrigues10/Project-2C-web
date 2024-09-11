import { ICreateOneToOne } from "@/services/faces/types";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export interface OneToOneContextData {
  resultOneToOne: ICreateOneToOne;
  setResultOneToOne: (value: ICreateOneToOne) => void;
  photoFace: string;
  setPhotoFace: (value: string) => void;
  step: number;
  setStep: (value: number) => void;
  clearAll: () => void;
}

const OneToOneContext = createContext<OneToOneContextData>(
  {} as OneToOneContextData
);

interface OneToOneProviderProps {
  children?: ReactNode;
}

const OneToOneProvider: React.FC<OneToOneProviderProps> = ({ children }) => {
  const [resultOneToOne, setResultOneToOne] = useState({} as ICreateOneToOne);
  const [photoFace, setPhotoFace] = useState("");
  const [step, setStep] = useState(1);

  const clearAll = useCallback(() => {
    setResultOneToOne({} as ICreateOneToOne);
    setPhotoFace("");
    setStep(1);
  }, []);

  return (
    <OneToOneContext.Provider
      value={{
        resultOneToOne,
        setResultOneToOne,
        photoFace,
        setPhotoFace,
        setStep,
        step,
        clearAll,
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
