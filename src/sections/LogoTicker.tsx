import alfaLogo from "@/assets/Logo alfamart.png";
import indoLogo from "@/assets/Logo_Indomaret.png";
import quantumLogo from "@/assets/logo-quantum.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
            <Image src={alfaLogo} alt="Logo Alfa" className="logo-ticker-img" />
            <Image src={alfaLogo} alt="Logo Alfa" className="logo-ticker-img" />
            <Image src={alfaLogo} alt="Logo Alfa" className="logo-ticker-img" />
            <Image src={alfaLogo} alt="Logo Alfa" className="logo-ticker-img" />
            <Image src={alfaLogo} alt="Logo Alfa" className="logo-ticker-img" />
            {/* <Image src={indoLogo} alt="Logo Indo" className="logo-ticker-img" /> */}
            {/* <Image src={quantumLogo} alt="Quantum Logo" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
