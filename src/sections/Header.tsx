import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
// import Logo from "@/assets/logosaas.png";
import Logo from "@/assets/logo.png";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 z-20">
      {/* Top Banner */}
      <div className=" bg-gradient-to-r px-4 from-red-600 to-blue-600 py-3 text-white">
        <div className="max-container padding-container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div>
              <span>24/7 Emergency Service</span>
            </div>
            <div>
              <span>Melayani Seluruh Malang & Sekitarnya</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 bg-white/95 backdrop-blur-md border-b border-blue-100/50 shadow-lg">
        <div className="max-container padding-container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image
                src={Logo}
                alt="Logo"
                className="h-12 w-12 md:h-24 md:w-24"
              />
              <div>
                <h2 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                  Tegak Teguh Teknik
                </h2>
                <p className="text-xs text-gray-600">
                  Electrical Installation & AC Maintenance
                </p>
              </div>
            </div>
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="text-black/60 gap-6 md:flex regular-16 hidden items-center">
              <a href="#about-us">Tentang Kami</a>
              <a href="#services">Layanan</a>
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
