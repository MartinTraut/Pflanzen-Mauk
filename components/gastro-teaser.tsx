"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, UtensilsCrossed, TreePine } from "lucide-react";
import { GASTRONOMIE } from "@/lib/data";

export function GastroTeaser() {
  return (
    <section className="py-16 sm:py-24 bg-mauk-green relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="gastro-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gastro-pattern)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-mauk-green-light font-medium text-sm tracking-widest uppercase">
            Genuss erleben
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Gastronomie
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            Genießen Sie kulinarische Köstlichkeiten inmitten unserer grünen Oase.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Restaurant Sagenhaft */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <Link href="/gastronomie" className="group block">
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden card-hover">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                  alt={GASTRONOMIE.restaurant.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Refined gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-all duration-500 group-hover:from-black/70" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center gap-2 mb-3">
                    {/* Glassmorphism icon badge */}
                    <div className="w-10 h-10 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                      <UtensilsCrossed className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white/80 text-sm">
                      {GASTRONOMIE.restaurant.sitzplaetze} Sitzplätze
                    </span>
                  </div>
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {GASTRONOMIE.restaurant.name}
                  </h3>
                  <p className="text-white/80 text-sm line-clamp-2 mb-3">
                    {GASTRONOMIE.restaurant.beschreibung}
                  </p>
                  <span className="inline-flex items-center gap-1 text-mauk-green-lighter font-medium text-sm group-hover:gap-2.5 transition-all duration-300">
                    Mehr erfahren
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Seegrill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Link href="/gastronomie" className="group block">
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden card-hover">
                <Image
                  src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&q=80"
                  alt={GASTRONOMIE.seegrill.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Refined gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-all duration-500 group-hover:from-black/70" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                      <TreePine className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white/80 text-sm">{GASTRONOMIE.seegrill.saison}</span>
                  </div>
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {GASTRONOMIE.seegrill.name}
                  </h3>
                  <p className="text-white/80 text-sm line-clamp-2 mb-3">
                    {GASTRONOMIE.seegrill.beschreibung}
                  </p>
                  <span className="inline-flex items-center gap-1 text-mauk-green-lighter font-medium text-sm group-hover:gap-2.5 transition-all duration-300">
                    Mehr erfahren
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
