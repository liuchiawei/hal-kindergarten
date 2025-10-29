"use client";

import { motion } from "motion/react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-sky-600 via-blue-600 to-purple-600 text-white">
      {/* Contact CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              お問合せ・資料請求
            </h2>

            <p className="text-lg md:text-xl mb-8 text-sky-50">
              パンフレットご希望の方は郵送させていただきます
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-white mb-6">
                <Phone className="w-5 h-5" />
                <span className="text-xl md:text-2xl font-bold">
                  TEL：03-3344-1010
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 text-sky-100 text-sm md:text-base">
                <MapPin className="w-4 h-4" />
                <span>〒160-0023 東京都新宿区西新宿1-7-3</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="lg"
                      className="bg-white text-sky-700 hover:bg-sky-50 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                    >
                      <Phone className="mr-2 w-5 h-5" />
                      お問い合わせ
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>お電話にてご請求の方</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-sky-700 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                    >
                      <Mail className="mr-2 w-5 h-5" />
                      資料請求
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>ホームページでご請求</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="border-t border-white/20 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ハル幼稚園</h3>
              <p className="text-sky-100 text-sm">
                子どもたちの笑顔があふれる場所。遊びを通して学び、成長する毎日を提供します。
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">クイックリンク</h4>
              <ul className="space-y-2 text-sm text-sky-100">
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    ホーム
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    園について
                  </a>
                </li>
                <li>
                  <a href="/programs" className="hover:text-white transition-colors">
                    教育内容
                  </a>
                </li>
                <li>
                  <a href="/admissions" className="hover:text-white transition-colors">
                    入園案内
                  </a>
                </li>
                <li>
                  <a href="/news" className="hover:text-white transition-colors">
                    お知らせ
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">
                    お問い合わせ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">お問い合わせ</h4>
              <ul className="space-y-2 text-sm text-sky-100">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>03-3344-1010</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@hal-kindergarten.jp</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>〒160-0023<br />東京都新宿区西新宿1-7-3</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center text-sm text-sky-100 pt-8 border-t border-white/20">
            <p>&copy; {new Date().getFullYear()} ハル幼稚園. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
