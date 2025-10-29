"use client";

import { motion } from "motion/react";
import { Building2, Sun, Users, Sparkles } from "lucide-react";

export default function Facility() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-sky-700">
            子どもたちにも大人気☆
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-amber-600">
            待望の新園舎が完成しました！
          </h3>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="bg-sky-100 rounded-full p-3 flex-shrink-0">
                  <Building2 className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">
                    新園舎は広くてすてき！！
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    子供達も毎日、きれいな設備で快適に過ごしています。
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="bg-amber-100 rounded-full p-3 flex-shrink-0">
                  <Sun className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">
                    中庭からの明るい陽射し
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    子供達はちょっとした時間にも、中庭の遊具で上靴のまま遊べるので楽しそうです。
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">
                    行事は人数制限一切なし
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    また、参観や音楽会、おゆうぎ会、展覧会など、幼稚園での行事は人数制限一切なしで行えるようになりました。
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="bg-pink-100 rounded-full p-3 flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">
                    生き生きと楽しむ子供達
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    子供達の生き生きと楽しんでいる様子をたくさんの方にご覧いただきたいと思います！！
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
