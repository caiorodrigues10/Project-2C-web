import { ICreateOneToOne } from "@/services/faces/types";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

export interface OneToOneContextData {
  result: ICreateOneToOne;
  setResult: (value: ICreateOneToOne) => void;
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
  const [result, setResult] = useState({} as ICreateOneToOne);
  const [photoFace, setPhotoFace] = useState("");
  const [step, setStep] = useState(1);

  const clearAll = useCallback(() => {
    setResult({} as ICreateOneToOne);
    setPhotoFace("");
    setStep(1);
  }, []);

  return (
    <OneToOneContext.Provider
      value={{
        result,
        setResult,
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
