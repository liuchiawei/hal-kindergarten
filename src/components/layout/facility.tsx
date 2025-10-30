"use client";

import { motion } from "motion/react";
import { Building2, Sun, Users, Sparkles } from "lucide-react";
import DomeGallery from "@/components/common/DomeGallery";
import content from "@/data/content.json";

export default function Facility() {
  return (
    <section className="relative bg-gradient-to-b from-sky-50 to-white h-screen overflow-hidden">
      <div className="w-full h-full absolute">
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

          <div className="w-full max-w-6xl px-4 md:px-0 grid grid-cols-2 gap-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            {content.facility.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: index * 0.1,
                }}
                className="flex flex-col md:flex-row items-start gap-4 p-4 md:p-8 bg-white/40 backdrop-blur-sm rounded-2xl shadow-md"
              >
                <div className="bg-sky-100 rounded-full p-3 flex-shrink-0">
                  {item.icon === "Building2" && (
                    <Building2 className="size-6 text-sky-600" />
                  )}
                  {item.icon === "Sun" && (
                    <Sun className="size-6 text-sky-600" />
                  )}
                  {item.icon === "Users" && (
                    <Users className="size-6 text-sky-600" />
                  )}
                  {item.icon === "Sparkles" && (
                    <Sparkles className="size-6 text-sky-600" />
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 w-full h-full min-h-screen">
        <DomeGallery fit={2} />
      </div>
    </section>
  );
}
