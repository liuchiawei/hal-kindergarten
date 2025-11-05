"use client";

import { motion } from "motion/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Palette,
  Globe,
  Waves,
  Dumbbell,
  Music,
  Languages,
  Monitor,
} from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "絵画",
    description: "絵画造形教育",
  },
  {
    icon: Globe,
    title: "英語",
    description: "英語教育",
  },
  {
    icon: Waves,
    title: "水泳",
    description: "プール指導",
  },
  { icon: Dumbbell, title: "体操", description: "体操" },
  { icon: Music, title: "声楽指導", description: "声楽指導" },
  { icon: Languages, title: "中国語", description: "中国語（年長5才のみ）" },
  {
    icon: Monitor,
    title: "パソコン",
    description: "パソコン使ってのローマ字指導(年長5才のみ)",
  },
];

export default function Features() {
  return (
    <section className="h-full min-h-screen w-full flex flex-col md:flex-row relative overflow-hidden">
      <div className="p-2 md:p-6 absolute top-0 z-10 *:text-shadow-lg *:text-shadow-primary/50 md:[writing-mode:vertical-lr]">
        <motion.h6
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          className="text-white text-sm md:text-4xl font-semibold tracking-wide"
        >
          特別指導
        </motion.h6>
        <motion.h5
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-base font-bold text-accent"
        >
          FEATURES
        </motion.h5>
      </div>
      <div className="bg-primary bg-[url('/images/05.jpg')] bg-cover bg-center flex-2" />
      <div className="flex-1" />
      <div className="w-full max-w-6xl mx-auto absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-end px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="max-w-3xl w-full bg-background p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
            3才から特別講師による指導！
          </h2>

          <div className="w-full grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mb-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          delay: index * 0.1,
                        }}
                        whileHover={{
                          scale: 1.05,
                          transition: { type: "spring", stiffness: 300 },
                        }}
                        className="aspect-square p-3 bg-gradient-to-tr from-primary to-secondary rounded-lg shadow-md hover:shadow-xl flex flex-col items-center justify-center gap-2 transition-shadow"
                      >
                        <div className="w-fit aspect-square border border-accent rounded-full p-4 shadow-md">
                          <Icon
                            className="size-8 text-accent"
                            strokeWidth={1}
                          />
                        </div>
                        <h3 className="text--sm font-semibold text-background leading-tight">
                          {feature.title}
                        </h3>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{feature.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
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
            <p className="text-xs md:text-sm text-stone-600 bg-yellow-50 border-l-4 border-accent rounded-r-lg p-4 inline-block">
              ※普通保育の中で行いますので、保育料は別途徴収はいたしません。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
