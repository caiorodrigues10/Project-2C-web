"use client";
import { motion } from "framer-motion";

export function TextTech() {
  return (
    <motion.p
      initial={{ x: "-40%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-6xl max-xl:text-5xl max-lg:text-center max-lg:px-0 max-lg:py-8 max-lg:col-span-12 font-semibold bg-gradient-to-r from-[#24015F] to-black text-transparent bg-clip-text p-2 col-span-4 max-xl:col-span-6 w-full h-full justify-center flex items-center"
    >
      Tecnologias utilizadas em nosso motor biométrico
    </motion.p>
  );
}
