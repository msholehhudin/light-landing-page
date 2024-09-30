import Image from "next/image";
import ProductImg from "@/assets/cleaning ac.jpg";
import tubeImg from "@/assets/tube.png";
import pyramidImg from "@/assets/pyramid.png";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="max-container text-center">
        {/* <div className=" mx-auto"> */}
        <div className="tag regular-16">
          Jaga dan Rawat Alat Elektronik Anda
        </div>
        <h2 className="title text-3xl py-2 md:text-[54px] md:leading-[60px] padding-container">
          Membersihkan secara rutin akan menjaga kesehatan keluarga Anda
        </h2>
        <p className="desc text-[22px] leading-[30px] padding-container">
          Perawatan rutin alat elektronik penting untuk menjaga kinerja optimal
          dan memperpanjang masa pakai. Bersihkan dan periksa secara berkala
          untuk mencegah kerusakan, meningkatkan efisiensi, serta menghindari
          biaya perbaikan.
        </p>
      </div>
      <div className="relative">
        <div className="border border-yellow-300 flex items-center justify-center px-6">
          <Image
            src={ProductImg}
            alt="Product Showcase"
            className="my-10 shadow-md"
          />
        </div>
        <Image
          src={pyramidImg}
          alt="Pyramid Img"
          height={262}
          width={262}
          className="hidden md:block absolute -right-36 -top-16"
        />
        <Image
          src={tubeImg}
          alt="Tube Img"
          height={262}
          width={262}
          className="absolute bottom-8 -left-36 hidden md:block"
        />
      </div>
      {/* </div> */}
    </section>
  );
};
