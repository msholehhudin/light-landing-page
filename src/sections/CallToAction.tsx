import starImage from "@/assets/star.png";
import springImg from "@/assets/spring.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
      id="consult"
    >
      <div className="container">
        <div className="relative">
          <h2 className="title py-3">Jadwalkan Service Sekarang Juga</h2>
          <p className="desc">
            Konsultasikan dengan kami apa yang sedang anda butuhkan.
            Permasalahan akan terselesaikan dengan segera.
          </p>
          <Image
            src={starImage}
            alt="star"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
          />
          <Image
            src={springImg}
            alt="spring"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
          />
        </div>
        <div className="flex justify-center mt-10">
          <button className="btn btn-primary">Konsultasi Sekarang</button>
        </div>
      </div>
    </section>
  );
};
