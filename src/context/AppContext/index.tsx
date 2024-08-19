import { createContext, ReactNode, useContext, useState } from "react";

export interface AppContextData {
  imagePreview: string;
  setImagePreview: (value: string) => void;
  photoFace: string;
  setPhotoFace: (value: string) => void;
}

const AppContext = createContext<AppContextData>({} as AppContextData);

interface AppProviderProps {
  children?: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [imagePreview, setImagePreview] = useState("");
  const [photoFace, setPhotoFace] = useState("");

  return (
    <AppContext.Provider
      value={{
        imagePreview,
        setImagePreview,
        photoFace,
        setPhotoFace,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextData => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};

export { AppProvider };
