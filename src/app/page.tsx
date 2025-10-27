import { HeroSection } from "@/components/layout/hero-section";
import { AboutSection } from "@/components/layout/about-section";
import { ProgramsSection } from "@/components/layout/programs-section";
import { ScheduleSection } from "@/components/layout/schedule-section";
import { TestimonialsSection } from "@/components/layout/testimonials-section";
import { NewsSection } from "@/components/layout/news-section";
import { ContactCTASection } from "@/components/layout/contact-cta-section";
import { BackToTop } from "@/components/common/backToTop";
import DomeGallery from "@/components/common/DomeGallery";

export default function Home() {
  return (
    <>
      <div className="relative h-screen bg-gray-500">
        <DomeGallery />
      </div>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <ScheduleSection />
      <TestimonialsSection />
      <NewsSection />
      <ContactCTASection />
      <BackToTop />
    </>
  );
}
