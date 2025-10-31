"use client";

import { motion } from "motion/react";
import { Building2, Sun, Users, Sparkles } from "lucide-react";
import DomeGallery from "@/components/common/DomeGallery";
import content from "@/data/content.json";

export default function Facility() {
  return (
    <section className="relative bg-gradient-to-b from-sky-50 to-white h-screen overflow-hidden">
      <div className="w-full h-full px-4 md:px-0 flex flex-col justify-center items-center relative z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-sky-700">
            {content.facility.title}
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-amber-600">
            {content.facility.subtitle}
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.3 }}
          className="w-full max-w-xl mx-auto p-6 md:p-8 flex flex-col gap-2 rounded-lg backdrop-blur-sm shadow-lg pointer-events-auto"
        >
          {content.facility.description.map((item, index) => (
            <p key={index} className="text-white text-sm md:text-lg leading-relaxed text-shadow-sm">
              {item}
            </p>
          ))}
        </motion.div>
      </div>
      <div className="absolute inset-0 w-full h-full min-h-screen">
        <DomeGallery fit={2} grayscale={false} />
      </div>
    </section>
  );
}
