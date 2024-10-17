import { AboutUs } from "@/sections/AboutUs";
import { CallToAction } from "@/sections/CallToAction";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Services } from "@/sections/Services";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <AboutUs /> */}
        <LogoTicker />
        <ProductShowcase />
        <Services />
        <CallToAction />
      </main>
    </>
  );
};

export default Home;
