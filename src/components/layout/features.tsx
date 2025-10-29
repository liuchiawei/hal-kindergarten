"use client";

import { motion } from "motion/react";
import { Palette, Globe, Waves, Dumbbell, Music, Languages, Monitor } from "lucide-react";

const features = [
  { icon: Palette, title: "絵画造形教育", color: "text-pink-500" },
  { icon: Globe, title: "英語教育", color: "text-blue-500" },
  { icon: Waves, title: "プール指導", color: "text-cyan-500" },
  { icon: Dumbbell, title: "体操", color: "text-orange-500" },
  { icon: Music, title: "声楽指導", color: "text-purple-500" },
  { icon: Languages, title: "中国語（年長5才のみ）", color: "text-red-500" },
  { icon: Monitor, title: "・パソコン使ってのローマ字指導(年長5才のみ)", color: "text-green-500" },
];

export default function Features() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-sky-700">
            3才から特別講師による指導！
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: index * 0.1
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="bg-gradient-to-br from-white to-sky-50 rounded-xl shadow-md hover:shadow-xl p-6 text-center transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <div className={`${feature.color} bg-white rounded-full p-4 shadow-md`}>
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-800 leading-tight">
                    {feature.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <p className="text-sm md:text-base text-gray-600 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 inline-block">
              ※普通保育の中で行いますので、保育料は別途徴収はいたしません。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
