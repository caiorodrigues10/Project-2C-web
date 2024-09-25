import { IFacesFound } from "@/services/faces/types";
import { cpfMask } from "@/utils/MaskProvider";
import clsx from "clsx";
import {
  AnimatePresence,
  motion,
  PanInfo,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface CardSlideProps {
  index?: number;
  setIndex?: (index: number) => void;
  frontCard: boolean;
  drag?: boolean | "x" | "y";
  imageSrc: string;
  name: string;
  cpf: string;
}

function CardSlide({
  index,
  setIndex,
  frontCard,
  drag,
  imageSrc,
  cpf,
  name,
}: CardSlideProps) {
  const [exitX, setExitX] = useState(0);

  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
    clamp: false,
  });

  const variantsFrontCard = {
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: (custom: number) => ({
      x: custom,
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.2 },
    }),
  };

  const variantsBackCard = {
    initial: { scale: 0, y: 105, opacity: 0 },
    animate: { scale: 0.75, y: 30, opacity: 0.5 },
  };

  function handleDragEnd(_: any, info: PanInfo) {
    if (info.offset.x < -100 && setIndex && index !== undefined) {
      setExitX(-250);
      setIndex((index + 1) % 4);
    }
    if (info.offset.x > 100 && setIndex && index !== undefined) {
      setExitX(250);
      setIndex((index + 1) % 4);
    }
  }

  return (
    <motion.div
      style={{
        width: 150,
        height: 150,
        position: "absolute",
        top: 0,
        x,
        rotate,
        cursor: "grab",
      }}
      whileTap={{ cursor: "grabbing" }}
      drag={drag}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      onDragEnd={handleDragEnd}
      variants={frontCard ? variantsFrontCard : variantsBackCard}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={exitX}
      className={clsx({ "mt-6 ml-2.5": !frontCard })}
      transition={
        frontCard
          ? { type: "spring", stiffness: 300, damping: 20 }
          : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
      }
    >
      <motion.div
        style={{
          width: 240,
          height: 240,
          backgroundColor: "#fff",
          scale,
          overflow: "hidden",
          zIndex: 1,
        }}
        className="relative"
      >
        <div className="w-full h-full absolute z-10 flex items-end">
          <div className="bg-black/50 p-4 w-full text-white rounded-b-xl">
            <p className="max-w-full truncate">Nome: {name}</p>
            <p>CPF: {cpfMask(cpf)}</p>
          </div>
        </div>
        <Image
          src={imageSrc}
          alt="Card Image"
          layout="fill"
          objectFit="cover"
          className="rounded-xl border border-slate-400"
        />
      </motion.div>
    </motion.div>
  );
}

export function Example({ faces }: { faces: IFacesFound[] }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex gap-4 items-center">
      <h3 className="text-2xl">{faces[index % faces.length].similarity}%</h3>
      <motion.div style={{ width: 240, height: 240, position: "relative" }}>
        <AnimatePresence initial={false}>
          <CardSlide
            key={index + 1}
            frontCard={false}
            imageSrc={faces[(index + 1) % faces.length].image}
            cpf={faces[(index + 1) % faces.length].cpf}
            name={faces[(index + 1) % faces.length].name}
          />
          <CardSlide
            key={index}
            frontCard={true}
            index={index}
            setIndex={setIndex}
            drag="x"
            imageSrc={faces[index % faces.length].image}
            cpf={faces[index % faces.length].cpf}
            name={faces[index % faces.length].name}
          />
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
