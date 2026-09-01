"use client";

import React from "react";
import { Phone, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 25,
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

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const CallToAction = () => {
  const waLink = `https://wa.me/6281332802534?text=Halo%20Tegak%20Teguh%20Teknik%2C%20saya%20ingin%20menanyakan%20layanan%20AC.`;

  return (
    <section className="bg-white py-24 md:py-32" id="cta-action">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="overflow-hidden rounded-2xl bg-neutral-950"
        >
          <div className="relative px-8 py-16 md:px-16 md:py-20">
            {/* Decorative accents */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-red-700/20 blur-3xl"
            />

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl"
            />

            <div className="relative max-w-2xl">
              {/* Eyebrow */}
              <motion.p
                variants={contentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400"
              >
                AC Bermasalah?
              </motion.p>

              {/* Heading */}
              <motion.h2
                variants={contentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl"
              >
                Jadwalkan Service Hari Ini
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={contentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-6 max-w-xl text-base leading-7 text-neutral-300 md:text-lg"
              >
                Tim kami siap membantu — mulai dari cleaning rutin hingga
                perbaikan darurat, dengan teknisi berpengalaman dan garansi
                resmi untuk setiap pekerjaan.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  staggerChildren: 0.12,
                  delayChildren: 0.25,
                }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                {/* WhatsApp */}
                <motion.a
                  variants={buttonVariants}
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  href={waLink}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-red-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-950/20 transition-colors duration-300 hover:bg-red-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M16.79 14.37c-.27-.13-1.58-.78-1.83-.87s-.42-.13-.6.13c-.18.26-.69.87-.85 1.05-.16.17-.31.2-.58.07-.27-.13-1.15-.42-2.19-1.32-.81-.72-1.36-1.61-1.52-1.88s-.02-.42.11-.55c.11-.11.26-.29.39-.43.13-.15.17-.25.26-.42.08-.17.04-.31-.02-.43-.07-.13-.6-1.44-.82-1.97-.22-.53-.44-.46-.6-.47-.15-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.23.26-.87.85-.87 2.06 0 1.2.89 2.36 1.02 2.52.13.17 1.75 2.66 4.24 3.72.59.25 1.05.4 1.41.52.59.19 1.13.17 1.56.1.48-.07 1.58-.65 1.8-1.28.22-.63.22-1.18.15-1.28-.06-.1-.24-.15-.51-.28z" />
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.91.54 3.7 1.46 5.23L2 22l4.89-1.43C8.28 21.46 10.1 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.67 0-3.21-.51-4.48-1.38l-.32-.21-2.9.85.89-2.82-.21-.33C4.51 15.21 4 13.67 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                  Chat via WhatsApp
                </motion.a>

                {/* Phone */}
                <motion.a
                  variants={buttonVariants}
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" strokeWidth={2} />
                  Telepon Langsung
                </motion.a>
              </motion.div>

              {/* Supporting line */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.55,
                }}
                className="mt-6 text-sm text-neutral-400"
              >
                Melayani Malang &amp; sekitarnya · Layanan darurat 24/7
              </motion.p>

              {/* Corporate link */}
              <motion.a
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.65,
                }}
                href="#layanan-korporat"
                className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-blue-300 hover:text-blue-200"
              >
                Mewakili institusi atau perusahaan? Lihat layanan korporat
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
