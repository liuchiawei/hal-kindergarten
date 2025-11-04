"use client";

import { motion } from "motion/react";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";

const newsItems = [
  {
    date: "2024-07-07",
    title: "入園説明会～新宿コクーンタワー～",
    excerpt: "新宿コクーンタワーにて入園説明会を開催いたします。",
    category: "お知らせ",
  },
  {
    date: "2024-07-01",
    title: "親子との教室参加者募集",
    excerpt: "親子で楽しむワークショップの参加者を募集しています。",
    category: "イベント",
  },
  {
    date: "2024-06-25",
    title: "親と子の絵画教室　参加者募集",
    excerpt: "親子で楽しく絵を描きましょう！参加者募集中です。",
    category: "イベント",
  },
  {
    date: "2024-06-05",
    title: "幼年消防クラブ　発会式",
    excerpt: "幼年消防クラブの発会式を開催いたしました。",
    category: "行事",
  },
];

export default function News() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary to-secondary overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-2 mb-8">
        <h2 className="text-xl md:text-2xl font-black text-center text-accent tracking-widest">
          NEWS
        </h2>
        <h1 className="text-3xl md:text-4xl font-[400] text-center text-background tracking-wider">
          更新情報
        </h1>
      </div>

      <Carousel className="max-w-5xl mx-auto cursor-grab active:cursor-grabbing">
        <CarouselContent>
          {newsItems.map((item, index) => (
            <CarouselItem
              key={item.date}
              className="basis-1/2 lg:basis-1/3 py-2"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: index * 0.125,
                }}
                className="flex flex-col h-full min-h-72 rounded-lg shadow-lg overflow-hidden"
              >
                <div
                  className={`w-full h-full p-6 flex items-end bg-background bg-cover bg-center ${
                    index === 0
                      ? "bg-[image:url('/images/01.jpg')]"
                      : index === 1
                      ? "bg-[image:url('/images/02.jpg')]"
                      : index === 2
                      ? "bg-[image:url('/images/03.jpg')]"
                      : "bg-[image:url('/images/04.jpg')]"
                  }`}
                >
                  <h6 className="text-background text-sm md:text-lg font-semibold text-shadow-lg">
                    {item.date}
                  </h6>
                </div>
                <div className="p-6 h-full bg-background">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">
                    {item.title}
                  </h3>
                  <p className="text-foreground text-xs md:text-sm">
                    {item.excerpt}
                  </p>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
