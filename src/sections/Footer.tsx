import Logo from "@/assets/logo.png";
import Image from "next/image";
import SocialInsta from "@/assets/social-insta.svg";
import SocialX from "@/assets/social-x.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="max-container padding-container">
        <div className="inline-flex relative before:content-[''] before:top-1 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image
            src={Logo}
            alt="Tegak Teguh Service"
            className="h-14 w-14 relative bg-white rounded-full"
          />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center mt-10 gap-6">
          <a href="#">Tentang Kami</a>
          <a href="#">Layanan</a>
          <a href="#">List Harga</a>
          <a href="#">Karir</a>
        </nav>
        <div className="flex justify-center mt-6 gap-6">
          <SocialInsta />
          <SocialX />
        </div>
        <p className="mt-6">
          &copy; 2024 Revingerz Media, Inc. All right reserved.
        </p>
      </div>
    </footer>
  );
};
