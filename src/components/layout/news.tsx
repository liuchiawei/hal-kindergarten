"use client";

import { motion } from "motion/react";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-sky-700">
            お知らせ・ブログ
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {newsItems.map((item, index) => (
              <motion.article
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
                  y: -4,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center">
                  <div className="text-sky-300">
                    <Calendar className="w-20 h-20" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <time className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </time>
                    <span className="text-xs px-3 py-1 bg-sky-100 text-sky-700 rounded-full font-semibold">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {item.excerpt}
                  </p>

                  <div className="flex items-center text-sky-600 text-sm font-semibold group">
                    <span>続きを読む</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <Button
              size="lg"
              className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              もっと見る
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
