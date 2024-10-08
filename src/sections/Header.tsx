import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
// import Logo from "@/assets/logosaas.png";
import Logo from "@/assets/logo.png";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className=" bg-black flex justify-center items-center py-3 text-white text-sm">
        <div className="inline-flex items-center  gap-4">
          <p>Dapatkan Informasi Selengkapnya</p>
          <ArrowRight className="h-4 2-4 hover:translate-x-2 hover:cursor-pointer justify-center items-center" />
        </div>
      </div>

      <div className="py-5 ">
        <div className="max-container padding-container">
          <div className="flex justify-between items-center">
            <Image
              src={Logo}
              alt="Logo"
              className="h-12 w-12 md:h-24 md:w-24"
            />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="text-black/60 gap-6 md:flex regular-16 hidden items-center">
              <a href="#">Tentang Kami</a>
              {/* <a href="#">Feature</a> */}
              <a href="#">Layanan</a>
              {/* <a href="#">Updates</a> */}
              {/* <a href="#">Help</a> */}
              <button className="bg-black text-white px-4 py-2 rounded-lg inline-flex items-center">
                Hubungi Kami
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
