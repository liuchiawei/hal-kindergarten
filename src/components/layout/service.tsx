"use client";

import { motion } from "motion/react";
import { Clock, GraduationCap, Bus } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Clock,
    title: "あずかり保育や時間外保育、スポット保育等",
    description: "お仕事や家庭の事情等にあわせて、安心してご利用いただけます。",
    color: "from-blue-500 to-cyan-500",
    link: "#",
  },
  {
    icon: GraduationCap,
    title: "ハル幼稚園は「塾」も開講しています。",
    description: "保育時間終了後から専門の先生による課外保育で子どもたちをもっと輝かせたい",
    color: "from-purple-500 to-pink-500",
    link: "#",
  },
  {
    icon: Bus,
    title: "送迎バスのご案内はこちら！",
    description: "送迎バスは１８＋６コース、停留所は２２０箇所「。自宅のすぐ側まで」を基本に、毎年見直ししています。",
    color: "from-orange-500 to-amber-500",
    link: "#",
  },
];

export default function Service() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-sky-700">
            ハル幼稚園のサービス
          </h2>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: index * 0.15
                  }}
                  whileHover={{
                    y: -8,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden"
                >
                  <div className={`bg-gradient-to-br ${service.color} p-6 text-white`}>
                    <div className="flex justify-center mb-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-center leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <Button
                      variant="outline"
                      className="w-full hover:bg-sky-50 hover:text-sky-700 hover:border-sky-300"
                    >
                      詳しく見る
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
