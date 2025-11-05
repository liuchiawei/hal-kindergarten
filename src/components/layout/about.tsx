"use client";

import { motion } from "motion/react";
import content from "@/data/content.json";

export default function About() {
  return (
    <section className="min-h-screen h-[120vh] md:h-full w-full flex flex-col-reverse md:flex-row relative overflow-hidden">
      <div className="p-2 md:p-6 absolute top-0 md:right-0 z-10 *:text-shadow-lg *:text-shadow-primary/50 md:[writing-mode:vertical-lr]">
        <motion.h6
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          className="text-white text-sm md:text-4xl font-semibold tracking-wide"
        >
          ハル幼稚園について
        </motion.h6>
        <motion.h5
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-base font-bold text-accent"
        >
          ABOUT
        </motion.h5>
      </div>
      <div className="flex-1" />
      <div className="bg-primary bg-[url('/images/12.jpg')] bg-cover bg-center flex-2" />
      <div className="w-full max-w-6xl px-4 md:px-0 absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="max-w-3xl py-16 px-8 md:px-12 w-full bg-background"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
            {content.about.title}
          </h2>
          <p className="text-stone-700 leading-relaxed mb-6 text-base md:text-lg">
            {content.about.description}
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-yellow-50 rounded-xl p-6 border-l-4 border-accent"
          >
            <h3 className="text-xl font-semibold text-primary mb-3">
              {content.about.si.title}
            </h3>
            <p className="text-stone-700 leading-relaxed text-base md:text-lg">
              {content.about.si.description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
