"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const cases = [
  {
    number: "01",
    kategori: "Kesehatan",
    klien: "RS Saiful Anwar Malang",
    tantangan:
      "Sistem AC di ruang perawatan harus beroperasi tanpa henti, dengan toleransi gangguan yang sangat rendah.",
    solusi:
      "Kontrak perawatan berkala dengan jadwal pemeriksaan rutin dan jalur respons darurat khusus untuk fasilitas kesehatan.",
    hasil:
      "Gangguan operasional AC menurun dan waktu tanggap perbaikan menjadi lebih cepat dibanding sebelumnya.",
  },
  {
    number: "02",
    kategori: "Pendidikan",
    klien: "Universitas Brawijaya Malang",
    tantangan:
      "Kebutuhan pendinginan tersebar di banyak gedung dan ruang kelas dengan jadwal penggunaan yang padat.",
    solusi:
      "Perawatan berkala terjadwal di seluruh unit AC kampus, dengan koordinasi terpusat untuk meminimalkan gangguan jam perkuliahan.",
    hasil:
      "Pengelolaan AC di seluruh area kampus menjadi lebih tertata dan mudah dipantau.",
  },
  {
    number: "03",
    kategori: "Retail & F&B",
    klien: "Matahari",
    tantangan:
      "Kenyamanan pelanggan di area toko perlu dijaga konsisten dengan waktu respons cepat bila terjadi gangguan.",
    solusi:
      "Layanan perawatan berkala dengan respons cepat untuk menjaga kenyamanan area toko tetap optimal.",
    hasil:
      "Kenyamanan area toko tetap terjaga dengan gangguan operasional yang minim.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const StudiKasus = () => {
  return (
    <section
      id="case-studies"
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-24 h-72 w-72 rounded-full bg-blue-50/70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-20 h-72 w-72 rounded-full bg-red-50/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            Studi Kasus
          </p>

          <h2 className="mt-4 text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl md:text-5xl">
            Solusi yang Disesuaikan
            <span className="block text-blue-700">untuk Setiap Kebutuhan</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-500 md:text-lg">
            Setiap fasilitas memiliki kebutuhan yang berbeda. Kami menyesuaikan
            pendekatan, jadwal, dan layanan berdasarkan kondisi serta kebutuhan
            masing-masing klien.
          </p>
        </motion.div>

        {/* Case Study Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {cases.map((item) => (
            <motion.article
              key={item.klien}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-950/10"
            >
              {/* Top accent */}
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-50 bg-gradient-to-r from-blue-700 via-blue-500 to-red-600 transition-transform duration-500 group-hover:scale-x-100" />

              <div className="flex h-full flex-col p-7 md:p-8">
                {/* Card Header */}
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex items-center rounded-full bg-blue-950/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-950">
                    {item.kategori}
                  </span>

                  <span className="text-4xl font-semibold tracking-tight text-neutral-100 transition-colors duration-300 group-hover:text-blue-50">
                    {item.number}
                  </span>
                </div>

                {/* Client */}
                <div className="mt-6">
                  <h3 className="text-xl font-semibold tracking-tight text-neutral-950">
                    {item.klien}
                  </h3>

                  <div className="mt-3 h-px w-10 bg-red-600 transition-all duration-300 group-hover:w-16" />
                </div>

                {/* Case Details */}
                <div className="mt-7 space-y-6">
                  {/* Challenge */}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-400">
                        Tantangan
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-neutral-600">
                      {item.tantangan}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-400">
                        Solusi
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-neutral-600">
                      {item.solusi}
                    </p>
                  </div>

                  {/* Result */}
                  <div className="rounded-xl bg-neutral-50 p-4 transition-colors duration-300 group-hover:bg-blue-50/50">
                    <div className="flex items-center gap-2">
                      <CheckCircle2
                        className="h-4 w-4 text-red-600"
                        strokeWidth={2}
                      />

                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-red-700">
                        Hasil
                      </span>
                    </div>

                    <p className="mt-2 text-sm font-medium leading-6 text-neutral-800">
                      {item.hasil}
                    </p>
                  </div>
                </div>

                {/* Bottom Link */}
                <div className="mt-auto pt-7">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-950"
                  >
                    <span>Diskusikan kebutuhan Anda</span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-950/10 transition-all duration-300 group-hover:border-blue-950 group-hover:bg-blue-950 group-hover:text-white">
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={2}
                      />
                    </span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Trust / Permission Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 border-l-2 border-neutral-200 pl-4"
        >
          <p className="max-w-3xl text-xs leading-5 text-neutral-400">
            Studi kasus dan hasil yang ditampilkan perlu dikonfirmasi
            berdasarkan pekerjaan aktual dan persetujuan klien sebelum
            dipublikasikan sebagai materi resmi.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StudiKasus;
