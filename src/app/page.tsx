import Hero from "@/components/layout/hero";
import Nav from "@/components/layout/nav";
import About from "@/components/layout/about";
import Features from "@/components/layout/features";
import Facility from "@/components/layout/facility";
import Service from "@/components/layout/service";
import News from "@/components/layout/news";
import Footer from "@/components/layout/footer";
import { BackToTop } from "@/components/common/backToTop";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Features />
      <Service />
      <Facility />
      <News />
      <Footer />
      <BackToTop />
    </>
  );
}
