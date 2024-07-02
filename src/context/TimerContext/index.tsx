"use client";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

export interface TimerContextData {
  formatTime: () => string;
  isRunning: boolean;
  startCounter: () => void;
}

const TimerContext = createContext<TimerContextData>({} as TimerContextData);

function TimerProvider({ children }: PropsWithChildren) {
  const [counter, setCounter] = useState(120);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setCounter((prevCounter) => {
          if (prevCounter <= 0) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
          return prevCounter - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = () => {
    const hours = Math.floor(counter / 3600);
    const minutes = Math.floor((counter % 3600) / 60);
    const remainingSeconds = counter % 60;

    let formattedTime = "";

    if (hours > 0) {
      formattedTime += `${hours < 10 ? "0" + hours : hours}:`;
    }

    formattedTime += `${minutes < 10 ? "0" + minutes : minutes}:${
      remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds
    }`;

    return formattedTime;
  };

  const startCounter = useCallback(() => {
    setIsRunning(true);
    setCounter(120);
  }, []);

  return (
    <TimerContext.Provider value={{ formatTime, isRunning, startCounter }}>
      {children}
    </TimerContext.Provider>
  );
}

const useTimerContext = (): TimerContextData => {
  const context = useContext(TimerContext);

  if (!context) {
    throw new Error("useTimerContext must be used within a TimerProvider");
  }

  return context;
};

export { TimerProvider, useTimerContext };
