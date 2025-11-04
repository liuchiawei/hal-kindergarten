"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import content from "@/data/content.json";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary to-secondary text-white">
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
              {content.contact.title}
            </h2>

            <p className="text-lg md:text-xl mb-8 text-sky-50">
              {content.contact.description}
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-white mb-6">
                <Phone className="w-5 h-5" />
                <span className="text-xl md:text-2xl font-bold">
                  {content.contact.phone}
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 text-sky-100 text-sm md:text-base">
                <MapPin className="w-4 h-4" />
                <span>{content.contact.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {content.contact.buttons.map(
                (button: {
                  label: string;
                  tooltip: string;
                  link: string;
                  icon: string;
                }) => (
                  <TooltipProvider key={button.label}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="lg"
                          className="group bg-white text-primary hover:bg-light hover:text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all w-full md:w-auto flex items-center gap-2 cursor-pointer"
                        >
                          {button.icon === "Phone" ? (
                            <Phone className="size-4 rotate-135 group-hover:rotate-0 transition-all" />
                          ) : (
                            <Mail className="size-4 group-hover:-translate-y-1 transition-all" />
                          )}
                          {button.label}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{button.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="border-t border-white/20 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8 **:data-[section=title]:text-accent **:data-[section=title]:text-xl **:data-[section=title]:font-bold **:data-[section=title]:mb-4 **:data-[section=description]:text-background **:data-[section=description]:text-sm **:data-[section=description]:space-y-2">
            <div>
              <h3 data-section="title">
                {content.footer.title}
              </h3>
              <p data-section="description">
                {content.footer.description}
              </p>
            </div>

            <div>
              <h4 data-section="title">
                {content.footer.quickLinks.title}
              </h4>
              <ul data-section="description" className="space-y-2 text-sm text-sky-100">
                {content.footer.quickLinks.items.map(
                  (item: { label: string; link: string }) => (
                    <li key={item.label}>
                      <Link
                        href={item.link}
                        className="hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 data-section="title">
                {content.footer.contact.title}
              </h4>
              <ul data-section="description">
                {content.footer.contact.items.map(
                  (item: {
                    label: string;
                    content: string[];
                    icon: string;
                  }) => (
                    <li key={item.label} className="flex items-center gap-2">
                      {item.icon === "Phone" && <Phone className="size-4" />}
                      {item.icon === "Mail" && <Mail className="size-4" />}
                      {item.icon === "MapPin" && <MapPin className="size-4" />}
                      {item.content.map((content: string) => (
                        <span key={content}>{content}</span>
                      ))}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="text-center text-sm text-accent/80 pt-8 border-t border-white/20">
            <p>
              &copy; {new Date().getFullYear()} {content.footer.copyright.text}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
