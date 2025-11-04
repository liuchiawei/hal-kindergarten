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
    description:
      "保育時間終了後から専門の先生による課外保育で子どもたちをもっと輝かせたい",
    color: "from-purple-500 to-pink-500",
    link: "#",
  },
  {
    icon: Bus,
    title: "送迎バスのご案内はこちら！",
    description:
      "送迎バスは１８＋６コース、停留所は２２０箇所「。自宅のすぐ側まで」を基本に、毎年見直ししています。",
    color: "from-orange-500 to-amber-500",
    link: "#",
  },
];

export default function Service() {
  return (
    <section className="min-h-screen h-full w-full flex items-center justify-center relative overflow-hidden">
      <div className="p-2 md:p-6 absolute top-0 left-0 md:left-auto md:right-0 z-10 *:text-shadow-lg *:text-shadow-primary/50 md:[writing-mode:vertical-lr]">
        <motion.h6
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          className="text-white text-sm md:text-4xl font-semibold tracking-wide"
        >
          サービス
        </motion.h6>
        <motion.h5
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-base font-bold text-accent"
        >
          SERVICES
        </motion.h5>
      </div>
      <div className="w-screen h-screen absolute top-0 left-0 flex flex-col">
        <div className="bg-primary bg-[url('/images/14.jpg')] bg-cover bg-center flex-2 md:flex-1" />
        <div className="flex-1" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 }}
        className="w-full max-w-6xl h-full mx-auto p-4 md:p-0 pt-24 md:pt-0 flex flex-col justify-center items-center z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white text-shadow-lg text-shadow-primary/50">
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
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden"
              >
                <div
                  className={`${
                    index === 0
                      ? "bg-[url('/images/22.jpg')]"
                      : index === 1
                      ? "bg-[url('/images/04.jpg')]"
                      : "bg-[url('/images/13.jpg')]"
                  }
                  group-hover:bg-gradient-to-br from-primary to-secondary px-12 py-6 text-white flex flex-col items-center justify-center gap-2 bg-cover bg-center transition-all`}
                >
                  <div className="border border-accent rounded-full p-4">
                    <Icon className="size-8 text-accent" strokeWidth={1} />
                  </div>
                  <h3 className="text-lg font-bold text-center leading-tight text-shadow-lg text-shadow-primary/50">
                    {service.title}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <Button
                    variant="outline"
                    className="w-full rounded-full hover:text-accent hover:bg-primary cursor-pointer"
                  >
                    詳しく見る
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
