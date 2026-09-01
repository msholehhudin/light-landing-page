"use client";

import {
  ShieldCheck,
  Users,
  Wrench,
  Building2,
  Snowflake,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Building2,
    value: "20+",
    label: "Institusi & perusahaan dilayani",
  },
  {
    icon: Users,
    value: "[X]",
    label: "Teknisi bersertifikasi",
  },
  {
    icon: Wrench,
    value: "[X]+",
    label: "Unit ditangani per tahun",
  },
  {
    icon: ShieldCheck,
    value: "[X] Tahun",
    label: "Pengalaman di industri",
  },
];

const capabilities = [
  "Teknisi bersertifikasi kompetensi AC & kelistrikan",
  "Berpengalaman menangani fasilitas dengan kebutuhan operasional tinggi",
  "Garansi pekerjaan untuk memberikan rasa aman kepada klien",
  "Layanan respons darurat untuk kebutuhan operasional yang mendesak",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="relative overflow-hidden bg-neutral-50 py-24 md:py-32"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-red-100/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-14 lg:grid-cols-2 lg:gap-20">
          {/* =========================
              LEFT — COMPANY STORY
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Eyebrow */}
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              Tentang Kami
            </p>

            {/* Heading */}
            <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl md:text-5xl">
              Menangani Sistem Pendingin di Lingkungan yang Menuntut Presisi
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              Sejak{" "}
              <span className="font-semibold text-neutral-900">[tahun]</span>,
              Tegak Teguh Teknik menangani perawatan, instalasi, dan perbaikan
              sistem AC serta kelistrikan untuk lembaga pendidikan, fasilitas
              kesehatan, perbankan, perhotelan, dan industri di Malang Raya.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              Kami memahami bahwa setiap fasilitas memiliki kebutuhan yang
              berbeda. Karena itu, setiap pekerjaan dilakukan dengan pendekatan
              yang disesuaikan dengan kondisi, kebutuhan operasional, dan
              standar fasilitas klien.
            </p>

            {/* Capabilities */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 space-y-4"
            >
              {capabilities.map((item) => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-950/10">
                    <ShieldCheck
                      className="h-3.5 w-3.5 text-blue-900"
                      strokeWidth={2.2}
                    />
                  </div>

                  <p className="text-sm leading-6 text-neutral-700 md:text-base">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-neutral-200 pt-8 sm:grid-cols-4"
            >
              {stats.map(({ icon: Icon, value, label }) => (
                <motion.div
                  key={label}
                  variants={itemVariants}
                  className="group"
                >
                  <Icon
                    className="h-5 w-5 text-red-700 transition-transform duration-300 group-hover:-translate-y-1"
                    strokeWidth={2}
                  />

                  <p className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950">
                    {value}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-neutral-500 md:text-sm">
                    {label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* =========================
              RIGHT — CAPABILITY PANEL
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-[560px] overflow-hidden rounded-3xl bg-blue-950 p-8 sm:p-10 md:p-12"
          >
            {/* Background decoration */}
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-red-600/20 blur-3xl"
            />

            {/* Large background icons */}
            <Snowflake
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 top-8 h-40 w-40 text-white/[0.035]"
              strokeWidth={1}
            />

            <Zap
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-4 -left-4 h-36 w-36 text-white/[0.035]"
              strokeWidth={1}
            />

            <div className="relative flex h-full flex-col">
              {/* Panel Header */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Keahlian Kami
                </p>

                <h3 className="mt-4 max-w-md text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Menjaga sistem tetap dingin, aman, dan siap beroperasi.
                </h3>
              </div>

              {/* Service Cards */}
              <div className="mt-10 space-y-4">
                {/* AC */}
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.25 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/20">
                      <Snowflake
                        className="h-5 w-5 text-blue-300"
                        strokeWidth={2}
                      />
                    </div>

                    <div>
                      <h4 className="font-semibold text-white">Sistem AC</h4>

                      <p className="mt-1 text-sm leading-6 text-blue-100/70">
                        Perawatan, instalasi, troubleshooting, dan perbaikan
                        sistem pendingin.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Electrical */}
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.25 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/20">
                      <Zap className="h-5 w-5 text-red-300" strokeWidth={2} />
                    </div>

                    <div>
                      <h4 className="font-semibold text-white">
                        Sistem Kelistrikan
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-blue-100/70">
                        Instalasi, pemeriksaan, troubleshooting, dan perbaikan
                        kelistrikan.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Statement */}
              <div className="mt-auto border-t border-white/10 pt-8">
                <p className="max-w-lg text-sm leading-6 text-blue-100/80">
                  Melayani kebutuhan fasilitas mulai dari rumah dan tempat usaha
                  hingga institusi dengan kebutuhan operasional yang lebih
                  kompleks.
                </p>

                <a
                  href="#services"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
                >
                  <span>Lihat layanan kami</span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:bg-white group-hover:text-blue-950">
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={2}
                    />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
