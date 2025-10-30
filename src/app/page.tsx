import { BackToTop } from "@/components/common/backToTop";
import Nav from "@/components/layout/nav";
import About from "@/components/layout/about";
import Features from "@/components/layout/features";
import Facility from "@/components/layout/facility";
import Service from "@/components/layout/service";
import News from "@/components/layout/news";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Nav />
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
