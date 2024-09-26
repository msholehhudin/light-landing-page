import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
    </>
  );
};

export default Home;
