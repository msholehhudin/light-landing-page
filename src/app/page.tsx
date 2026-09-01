// import { AboutUs } from "@/sections/AboutUs";
import AboutUs from "@/sections/AboutUs";
import CallToAction from "@/sections/CallToAction";
// import { CallToAction } from "@/sections/CallToAction";
import CaseStudy from "@/sections/CaseStudy";
import Footer from "@/sections/Footer";
// import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import Services from "@/sections/Services";
// import { Services } from "@/sections/Services";
import TrustedBy from "@/sections/TrustedBy";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <AboutUs />
        <CaseStudy />
        {/* <ProductShowcase /> */}
        <Services />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default Home;
