"use client";

import { motion } from "motion/react";
import content from "@/data/content.json";

export default function Hero() {
  return (
    <header className="relative h-screen bg-primary bg-cover bg-center bg-[url('/images/15.jpg')]">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-4xl font-bold [writing-mode:vertical-rl] select-none"
      >
        {content.hero.title}
      </motion.h1>
    </header>
  );
}
