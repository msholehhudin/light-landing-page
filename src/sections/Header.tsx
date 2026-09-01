import Image from "next/image";
import Logo from "@/assets/logo.png";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Top Information Bar */}
      <div className="bg-gradient-to-r from-red-600 to-blue-600 px-4 py-2 text-white">
        <div className="max-container padding-container mx-auto flex items-center justify-center text-xs sm:text-sm">
          <span className="font-medium">24/7 Emergency Service</span>

          <span className="mx-3 opacity-70">•</span>

          <span>Melayani Seluruh Malang & Sekitarnya</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-gray-100 bg-white/95 backdrop-blur-md">
        <div className="max-container padding-container mx-auto">
          <div className="flex h-20 items-center justify-between">
            {/* Logo & Company Name */}
            <a
              href="#"
              className="flex items-center gap-3"
              aria-label="Tegak Teguh Teknik"
            >
              <Image
                src={Logo}
                alt="Tegak Teguh Teknik"
                width={56}
                height={56}
                className="h-12 w-12 object-contain md:h-14 md:w-14"
                priority
              />

              <div className="leading-tight">
                <h1 className="text-lg font-extrabold tracking-tight text-gray-900 md:text-xl">
                  Tegak Teguh Teknik
                </h1>

                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-gray-500 md:text-xs">
                  Electrical Installation & AC Maintenance
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 md:flex">
              <a
                href="#about-us"
                className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
              >
                Tentang Kami
              </a>

              <a
                href="#services"
                className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
              >
                Layanan
              </a>

              <a
                href="#cta-action"
                className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-red-600/20 transition-all hover:bg-red-700 hover:shadow-lg"
              >
                Hubungi Kami
              </a>
            </nav>

            {/* Mobile Menu */}
            <button
              type="button"
              className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
              aria-label="Open menu"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
