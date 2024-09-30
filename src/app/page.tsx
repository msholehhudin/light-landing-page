import { AboutUs } from "@/sections/AboutUs";
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
        <AboutUs />
        <LogoTicker />
        <ProductShowcase />
        <Services />
      </main>
    </>
  );
};

export default Home;
