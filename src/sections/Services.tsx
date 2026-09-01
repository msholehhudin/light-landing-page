"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Wind,
  Wrench,
  Hammer,
  FileDown,
  ArrowUpRight,
} from "lucide-react";

/**
 * Layanan
 *
 * Design notes:
 * - neutral-50 background — alternates with StudiKasus (white) above it,
 *   keeping the same section rhythm as the rest of the page.
 * - Per your call: NOT showing the full ~49-line price table. Instead,
 *   picking one representative "priority" service per category with a
 *   "mulai dari" (starting from) price, plus a link to the full price list.
 *   This keeps the section scannable and avoids the page reading like a
 *   technician rate card, while still giving individual/small-office
 *   visitors a real price anchor.
 * - Prices below are pulled directly from the price list you provided —
 *   double check these stay in sync if the client updates their rates.
 * - Corporate/institutional track has NO price shown, per the earlier
 *   retail-vs-corporate split — just a CTA into a quote request flow.
 * - "Lihat daftar harga lengkap" assumes you'll produce a downloadable PDF
 *   or a dedicated /harga page — swap the href once that exists.
 *
 * Animation notes:
 * - Cards use whileInView + staggered children so they animate once as the
 *   section scrolls into view, not on every render.
 * - Card hover: lift + border/shadow shift, icon rotates slightly and its
 *   background pulses color — gives a "servicing" feel without being cute.
 * - Corporate CTA block: subtle scale + arrow nudge on hover to reinforce
 *   it's clickable, since it's a large block rather than an obvious button.
 */

const priorityServices = [
  {
    icon: Sparkles,
    kategori: "Perawatan Berkala",
    nama: "Cleaning AC",
    hargaMulai: "Rp 75.000",
    satuan: "per unit",
  },
  {
    icon: Wind,
    kategori: "Isi Freon",
    nama: "Isi Freon Full R-32",
    hargaMulai: "Rp 250.000",
    satuan: "per unit (0,5–1 PK)",
  },
  {
    icon: Hammer,
    kategori: "Instalasi & Pembongkaran",
    nama: "Pasang AC Split",
    hargaMulai: "Rp 250.000",
    satuan: "per unit (0,5–1 PK)",
  },
  {
    icon: Wrench,
    kategori: "Perbaikan Komponen",
    nama: "Ganti Kapasitor",
    hargaMulai: "Rp 250.000",
    satuan: "per unit, termasuk part & jasa",
  },
];

// Parent variant drives the stagger; children just fade/slide up.
const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const Services = () => {
  return (
    <section className="bg-neutral-50 py-24 md:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-red-700">
            Layanan
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl md:text-5xl">
            Layanan yang Kami Sediakan
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-neutral-500 md:text-lg">
            Dari perawatan rutin rumah dan kantor kecil, hingga kontrak
            perawatan berkala untuk institusi dan korporat.
          </p>
        </motion.div>

        {/* Priority services — retail/individual track */}
        <div className="mt-16">
          <h3 className="text-lg font-medium text-neutral-900">
            Untuk Rumah & Kantor Kecil
          </h3>

          <motion.div
            className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {priorityServices.map(
              ({ icon: Icon, kategori, nama, hargaMulai, satuan }) => (
                <motion.div
                  key={nama}
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-colors duration-300 hover:border-blue-950/30 hover:shadow-xl hover:shadow-blue-950/5"
                >
                  <motion.div
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-950/5 transition-colors duration-300 group-hover:bg-blue-950"
                    whileHover={{ rotate: 12 }}
                  >
                    <Icon
                      className="h-5 w-5 text-blue-950 transition-colors duration-300 group-hover:text-white"
                      strokeWidth={2}
                    />
                  </motion.div>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-neutral-400">
                    {kategori}
                  </p>
                  <p className="mt-1 text-base font-medium text-neutral-950">
                    {nama}
                  </p>
                  <p className="mt-3 text-xl font-semibold text-neutral-950">
                    {hargaMulai}
                    <span className="ml-1 text-sm font-normal text-neutral-500">
                      mulai dari
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-neutral-500">{satuan}</p>

                  {/* Subtle accent bar that grows in on hover, reinforces "priority pick" */}
                  <motion.span
                    className="absolute bottom-0 left-0 h-1 bg-red-700"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </motion.div>
              ),
            )}
          </motion.div>

          {/* Link to full price list, not an inline table */}
          <motion.a
            href="#"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-blue-950"
            whileHover="hover"
          >
            <FileDown className="h-4 w-4" strokeWidth={2} />
            <span className="relative">
              Lihat daftar harga lengkap
              <motion.span
                className="absolute -bottom-0.5 left-0 h-px w-full origin-left bg-blue-950"
                initial={{ scaleX: 0 }}
                variants={{ hover: { scaleX: 1 } }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            </span>
          </motion.a>
        </div>

        {/* Corporate / institutional track — no pricing, CTA only */}
        <motion.div
          className="mt-16 rounded-2xl bg-blue-950 p-10 md:p-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
                Untuk Institusi & Korporat
              </p>
              <h3 className="mt-3 max-w-xl text-2xl font-medium text-white md:text-3xl">
                Kontrak Perawatan Berkala untuk Gedung, Kampus, dan Fasilitas
                Anda
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100 md:text-base">
                Kami menangani kebutuhan skala besar dengan kontrak perawatan
                terjadwal dan respons darurat 24/7 — disesuaikan dengan jumlah
                unit dan kebutuhan operasional Anda.
              </p>
            </div>
            <motion.a
              href="#"
              className="group inline-flex flex-shrink-0 items-center gap-1.5 rounded-full bg-red-700 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-600"
              whileHover="hover"
              whileTap={{ scale: 0.97 }}
            >
              Ajukan Penawaran
              <motion.span
                className="flex"
                variants={{ hover: { x: 3, y: -3 } }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
