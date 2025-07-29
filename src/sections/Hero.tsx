"use client";

import { ArrowRight, Snowflake, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative pt-16 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-red-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.3),transparent)] opacity-70"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_80%_100%,rgba(239,68,68,0.2),transparent)]"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-red-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex items-center gap-12">
          <div className="lg:w-1/2 lg:pr-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-red-500/20 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-white mb-6"
            >
              <Snowflake className="w-4 h-4 text-blue-300" />
              Tegak Teguh Service
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Menjaga Rumah tetap
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-red-400 to-blue-400 bg-clip-text text-transparent">
                Sejuk dan Nyaman
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-blue-100/90 leading-relaxed mb-8 max-w-2xl"
            >
              Tegak Teguh Teknik menyediakan layanan AC terbaik untuk memastikan
              lingkungan Anda nyaman sepanjang tahun dengan teknologi terdepan.
            </motion.p>

            {/* Feature Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6 mb-8"
            >
              <div className="flex items-center gap-2 text-blue-200">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">Garansi Resmi</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <Zap className="w-5 h-5 text-red-400" />
                <span className="text-sm font-medium">Service Cepat</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <Snowflake className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">
                  Teknisi Berpengalaman
                </span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#consult">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105">
                  <span className="relative z-10">Jadwalkan Service</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </a>

              <button className="group flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 text-white font-semibold rounded-xl transition-all duration-300">
                <span>Lihat Penawaran</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="lg:w-1/2 mt-16 lg:mt-0 relative">
            <div className="relative">
              {/* Main AC Unit Illustration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative z-10"
              >
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-red-500/20 backdrop-blur-sm rounded-3xl border border-white/20 flex items-center justify-center">
                  <div className="w-64 h-48 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl relative overflow-hidden">
                    {/* AC Unit Front Panel */}
                    <div className="absolute inset-4 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl">
                      {/* Vents */}
                      <div className="absolute top-4 left-4 right-4 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                        <div className="flex gap-1">
                          {[...Array(12)].map((_, i) => (
                            <div
                              key={i}
                              className="w-1 h-4 bg-blue-400 rounded-full opacity-60"
                            ></div>
                          ))}
                        </div>
                      </div>

                      {/* Display */}
                      <div className="absolute top-16 left-4 right-4 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                        <span className="text-blue-400 font-mono text-lg">
                          22°C
                        </span>
                      </div>

                      {/* Controls */}
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                        <div className="w-8 h-8 bg-red-500 rounded-full shadow-lg"></div>
                        <div className="w-8 h-8 bg-blue-500 rounded-full shadow-lg"></div>
                      </div>
                    </div>

                    {/* Cool Air Effect */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.3, 0.7, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-16 bg-gradient-to-t from-blue-400/30 to-transparent rounded-full blur-sm"
                    ></motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  rotate: 360,
                  y: [0, -20, 0],
                }}
                transition={{
                  rotate: {
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  },
                  y: {
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
                className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg flex items-center justify-center"
              >
                <Snowflake className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{
                  rotate: -360,
                  y: [0, 15, 0],
                }}
                transition={{
                  rotate: {
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  },
                  y: {
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
                className="absolute -bottom-4 -right-8 w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-lg flex items-center justify-center"
              >
                <Zap className="w-10 h-10 text-white" />
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute top-1/2 -right-12 w-12 h-12 bg-gradient-to-br from-blue-400 to-red-400 rounded-full shadow-lg"
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
