"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { clients } from "@/data/clients";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
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

const TrustedBy = () => {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-red-700">
            Dipercaya Oleh
          </p>

          <h2 className="mt-4 text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl md:text-5xl">
            Pengalaman yang dipercaya berbagai perusahaan dan institusi.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-neutral-500 md:text-lg">
            Kami dipercaya menangani kebutuhan layanan AC untuk berbagai
            fasilitas, mulai dari institusi pendidikan hingga kesehatan,
            perbankan, hospitality, retail, dan industri.
          </p>
        </motion.div>

        {/* Client logos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={containerVariants}
          className="mt-16 border-t border-neutral-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4">
            {clients.map((client) => (
              <motion.div
                key={client.name}
                variants={itemVariants}
                className="
                  group
                  flex
                  h-28
                  items-center
                  justify-center
                  border-b
                  border-neutral-200
                  px-6
                  transition-colors
                  duration-300
                  hover:bg-neutral-100
                  md:border-r
                  md:px-8
                "
              >
                {client.logo ? (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                    className="flex h-12 w-40 items-center justify-center"
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={140}
                      height={40}
                      className="
                                max-h-10
                                w-auto
                                object-contain
                                grayscale
                                opacity-60
                                transition-all
                                duration-300
                                group-hover:grayscale-0
                                group-hover:opacity-100
                              "
                    />
                  </motion.div>
                ) : (
                  <span className="max-w-[160px] text-center text-sm font-medium leading-5 text-neutral-400">
                    {client.name}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Supporting statement */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.5,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="mt-10 flex items-center gap-4"
        >
          <div className="h-px w-10 bg-neutral-300" />

          <p className="text-sm text-neutral-500">
            Dan berbagai perusahaan dan institusi lainnya.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
