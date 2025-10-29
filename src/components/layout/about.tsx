"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-sky-700">
            ハル幼稚園といえば『SIあそび』
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
              お子様一人ひとりが、自ら考え、気づき、創意工夫する力、思考する力を養うこと（知能教育）を目的として、別教材を使用しています。お話をよく聞き、集中してお勉強というのがハル幼稚園の最大の特徴です。しからないでほめて、みんなニコニコ。『叱らない教育方法』は、20年以上の研究の成果です。「どろんこ遊び」から「英才教育」までがハル幼稚園の教育方針です。
            </p>

            <div className="bg-sky-50 rounded-xl p-6 border-l-4 border-sky-500">
              <h3 className="text-xl font-semibold text-sky-700 mb-3">
                SIあそびとは。
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                南カリフォルニア大学名誉教授、J・Pギルフォード博士の知能構造（SI）論に基づく、遊びながら知能を高める英才教育で、数や言葉、記憶力、判断力、情緒、あらゆる能力を飛躍的に高めます。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
