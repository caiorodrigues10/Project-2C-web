import { ICreateOneToNResponse, IFacesOneToN } from "@/services/faces/types";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export interface OneToNContextData {
  result: ICreateOneToNResponse;
  setResult: (value: ICreateOneToNResponse) => void;
  photoFace: string;
  setPhotoFace: (value: string) => void;
  step: number;
  setStep: (value: number) => void;
  clearAll: () => void;
  threshold?: number;
  setThreshold: (value?: number) => void;
}

const OneToNContext = createContext<OneToNContextData>({} as OneToNContextData);

interface OneToNProviderProps {
  children?: ReactNode;
}

const OneToNProvider: React.FC<OneToNProviderProps> = ({ children }) => {
  const [result, setResult] = useState({} as ICreateOneToNResponse);
  const [threshold, setThreshold] = useState<number>();
  const [photoFace, setPhotoFace] = useState("");
  const [step, setStep] = useState(1);

  const clearAll = useCallback(() => {
    setResult({} as ICreateOneToNResponse);
    setPhotoFace("");
    setThreshold(undefined);
    setStep(1);
  }, []);

  useEffect(() => {
    clearAll();
  }, [clearAll]);

  return (
    <OneToNContext.Provider
      value={{
        result,
        setResult,
        photoFace,
        setPhotoFace,
        setStep,
        step,
        clearAll,
        setThreshold,
        threshold,
      }}
    >
      {children}
    </OneToNContext.Provider>
  );
};

export const useOneToNContext = (): OneToNContextData => {
  const context = useContext(OneToNContext);

  if (!context) {
    throw new Error("useOneToNContext must be used within an OneToNProvider");
  }

  return context;
};

export { OneToNProvider };
