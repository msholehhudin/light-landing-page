import Image from "next/image";
import ProductImg from "@/assets/product-image.png";
import tubeImg from "@/assets/tube.png";
import pyramidImg from "@/assets/pyramid.png";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container text-center">
        {/* <div className=" mx-auto"> */}
        <div className="tag">Jaga dan Rawat Alat Elektronik Anda</div>
        <h2 className="title text-3xl py-2 md:text-[54px] md:leading-[60px]">
          Membersihkan secara rutin akan menjaga kesehatan Anda
        </h2>
        <p className="desc text-[22px] leading-[30px]">
          Perawatan rutin alat elektronik penting untuk menjaga kinerja optimal
          dan memperpanjang masa pakai. Bersihkan dan periksa secara berkala
          untuk mencegah kerusakan, meningkatkan efisiensi, serta menghindari
          biaya perbaikan
        </p>
      </div>
      <div className="relative">
        <Image src={ProductImg} alt="Product Showcase" className="mt-10 px-3" />
        <Image
          src={pyramidImg}
          alt="Pyramid Img"
          height={262}
          width={262}
          className="hidden md:block absolute -right-36 -top-32"
        />
        <Image
          src={tubeImg}
          alt="Tube Img"
          height={262}
          width={262}
          className="absolute bottom-24 -left-36 hidden md:block"
        />
      </div>
      {/* </div> */}
    </section>
  );
};
