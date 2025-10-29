import { BackToTop } from "@/components/common/backToTop";
import DomeGallery from "@/components/common/DomeGallery";
import About from "@/components/layout/about";
import Features from "@/components/layout/features";
import Facility from "@/components/layout/facility";
import Service from "@/components/layout/service";
import News from "@/components/layout/news";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <div className="relative h-screen bg-gray-500">
        <DomeGallery />
      </div>
      <About />
      <Features />
      <Facility />
      <Service />
      <News />
      <Footer />
      <BackToTop />
    </>
  );
}
