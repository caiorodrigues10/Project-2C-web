import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Example = ({ images }: { images: string[] }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="items-center flex">
      <div
        className="next -mr-4 bg-zinc-100 p-1 rounded-full z-10 border border-zinc-600 hover:scale-105 duration-200 hover:bg-zinc-200 hover:shadow-md"
        onClick={() => paginate(1)}
      >
        <ArrowLeft />
      </div>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          className="h-[240px] w-[240px] object-cover rounded-xl border border-slate-400"
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>

      <button
        className="prev -ml-4 bg-zinc-100 p-1 rounded-full z-10 border border-zinc-600 hover:scale-105 duration-200 hover:bg-zinc-200 hover:shadow-md"
        onClick={() => paginate(-1)}
      >
        <ArrowRight />
      </button>
    </div>
  );
};
