"use client";

import { motion } from "motion/react";
import content from "@/data/content.json";
import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative h-screen bg-primary bg-cover bg-center bg-[url('/images/15.jpg')]">
      <Image src="/logo/hal_horizontal.svg" alt="Hero" width={160} height={100} className="absolute top-4 left-4 z-50" />
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white text-shadow-lg text-shadow-primary text-4xl md:text-5xl font-black [writing-mode:vertical-rl] tracking-[0.35em] select-none">
        {content.hero.title.split("").map((char, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: idx * 0.15,
              duration: 0.475,
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
        className="absolute bottom-1/5 left-1/2 -translate-x-1/2 text-center text-white text-shadow-md text-shadow-primary text-md md:text-xl tracking-widest select-none"
      >
        {content.hero.catchphrase}
      </motion.h2>
    </header>
  );
}
