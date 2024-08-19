import clsx from "clsx";
import React from "react";
import { BsCheck, BsFillCircleFill } from "react-icons/bs";
import { PointProgress } from "../ProgressbarTailwind/components/PointProgress";
import { ProgressLine } from "../ProgressbarTailwind/components/ProgressLine";

interface ProgressPoint {
  description: string;
}

export interface ProgressBarProps {
  points: ProgressPoint[];
  currentStep: number;
  isMobile?: boolean;
  setCurrentStep?: (value: number) => void;
  pointClassName?: string;
  lineClassName?: string;
  isDisabled?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  points,
  currentStep,
  isMobile,
  lineClassName,
  pointClassName,
  setCurrentStep,
  isDisabled,
}) => {
  return (
    <div
      className={clsx(
        "flex w-full max-w-[800px] min-w-[200px] justify-between relative",
        {
          "py-0 px-[2rem]": isMobile,
          "pt-0 px-[2rem] pb-[2rem]": !isMobile,
        }
      )}
    >
      {points?.map((point, key) => (
        <PointProgress
          key={key}
          selected={currentStep >= key + 1}
          onClick={() =>
            !isDisabled &&
            setCurrentStep &&
            key < currentStep &&
            setCurrentStep(key + 1)
          }
          className={
            currentStep >= key + 1
              ? `${pointClassName}-active`
              : `${pointClassName}-disable`
          }
        >
          {currentStep === key + 1 && (
            <BsFillCircleFill className="text-gray-500" />
          )}

          {currentStep > key + 1 && <BsCheck className="text-white" />}
          {!isMobile && (
            <p className="absolute flex top-[120%] w-[200px] justify-center">
              {point.description}
            </p>
          )}
        </PointProgress>
      ))}
      <ProgressLine
        width={`${(100 / (points?.length - 1)) * (currentStep - 1)}%`}
        className={lineClassName}
      />
    </div>
  );
};

export { ProgressBar };
