import ArrowIcon from "@/assets/arrow-right.svg";
import Image from "next/image";
import CogImg from "@/assets/cog.png";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-hidden bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)]">
      <div className="container">
        <div className="md:flex border border-red-500 items-center">
          <div className="md:w-[478px]">
            <div className="text-sm rounded-lg border px-3 py-2 border-[#222]/10 inline-flex tracking-tight">
              Version 2.0 is here
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
              Keeping Your Home Cool and Powered Up
            </h1>
            <p className="text-xl mt-6 tracking-tight text-[#010D3E]">
              Tegak Teguh Teknik provides top-notch air conditioning services to
              ensure your environment is comfortable all year round.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Schedule Service</button>
              <button className="btn btn-text gap-1">
                <span>View Offers</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={CogImg}
              alt="Hero Img"
              className="md:absolute md:h-full md:w-auto md:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
