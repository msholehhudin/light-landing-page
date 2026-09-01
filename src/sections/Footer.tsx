import Image from "next/image";
import Logo from "@/assets/logo.png";
import SocialInsta from "@/assets/social-insta.svg";
import SocialX from "@/assets/social-x.svg";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

/**
 * Footer
 *
 * Merged from two sources:
 * - Your original footer: real logo, white circle badge treatment, nav
 *   links, social icons.
 * - The trust-signal structure discussed earlier: contact, coverage/hours,
 *   institutional client line, SIUP/NIB — these matter more to an
 *   institutional/B2B audience than social icons alone.
 *
 * Fixes applied vs. your original:
 * - Copyright now says "Tegak Teguh Teknik" instead of "Revingerz Media,
 *   Inc." — that was leftover template text and needed to change regardless
 *   of any design decision.
 * - Removed the rainbow gradient glow (#F87BFF/#FB92CF/#FFDD9B/#C2F0B1/
 *   #2FD8FE) behind the logo — replaced with a subtle navy/red glow so it
 *   stays inside the two-color system instead of introducing five new hues.
 * - "List Harga" -> "Daftar Harga" for consistent Indonesian phrasing.
 * - bg-neutral-950 (near-black), matching CallToAction directly above it —
 *   the two are meant to blend into one continuous closing block.
 *
 * Still needs before shipping:
 * - Confirm Instagram/X accounts are real and active — remove the icons
 *   if not, rather than link to dead/unused accounts.
 * - Fill every [bracketed] placeholder with real data.
 */

const navLinks = [
  { label: "Tentang Kami", href: "#" },
  { label: "Layanan", href: "#" },
  { label: "Daftar Harga", href: "#" },
  { label: "Karir", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-400">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Top: logo + nav */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <div className="relative">
              {/* subtle navy/red glow, replacing the rainbow gradient —
                  stays inside the brand's two-color system */}
              <div className="pointer-events-none absolute inset-0 -m-1 rounded-full bg-[linear-gradient(to_right,theme(colors.blue.700),theme(colors.red.700))] opacity-40 blur" />
              <Image
                src={Logo}
                alt="Tegak Teguh Teknik"
                className="relative h-14 w-14 rounded-full bg-white"
              />
            </div>
            <div>
              <p className="text-base font-medium text-white">
                Tegak Teguh Teknik
              </p>
              <p className="text-xs text-neutral-500">
                Electrical Installation &amp; AC Maintenance
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-neutral-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Middle: trust signals */}
        <div className="grid grid-cols-1 gap-12 py-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="max-w-sm text-sm leading-6 text-neutral-400">
              Melayani institusi pendidikan, kesehatan, perbankan, dan
              perhotelan di Malang Raya sejak{" "}
              <span className="text-neutral-200">[tahun]</span>.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
              Kontak
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500"
                  strokeWidth={2}
                />
                <span>+62 813 3280 2534</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500"
                  strokeWidth={2}
                />
                <span>[email@tegakteguhteknik.com]</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500"
                  strokeWidth={2}
                />
                <span>[Alamat Kantor, Malang]</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
              Area &amp; Jam Layanan
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400"
                  strokeWidth={2}
                />
                <span>Malang, Kota Batu &amp; sekitarnya</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400"
                  strokeWidth={2}
                />
                <span>
                  Senin–Sabtu, 08.00–17.00
                  <br />
                  Layanan darurat 24/7
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom: legal + social */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-neutral-500 md:flex-row md:items-center">
          <div className="flex flex-col gap-1 md:flex-row md:gap-4">
            <p>
              © {new Date().getFullYear()} Tegak Teguh Teknik. Seluruh hak cipta
              dilindungi.
            </p>
            <p>SIUP/NIB: [Nomor Izin Usaha]</p>
          </div>

          {/* Only keep these if the accounts are real and maintained */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="opacity-70 transition-opacity hover:opacity-100"
            >
              <SocialInsta />
            </a>
            <a
              href="#"
              aria-label="X"
              className="opacity-70 transition-opacity hover:opacity-100"
            >
              <SocialX />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
