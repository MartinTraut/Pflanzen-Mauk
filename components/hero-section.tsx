"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-[85vh] sm:h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1920&q=80"
        alt="Pflanzen Mauk Gartencenter – Frühling im Erlebnisgartencenter"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Enhanced Gradient Overlay – warmer tones */}
      <div className="hero-gradient absolute inset-0" />

      {/* Botanical decorative SVG overlay */}
      <div className="absolute top-20 right-0 w-64 h-64 sm:w-96 sm:h-96 opacity-[0.06] pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M100 10C100 10 130 50 130 100C130 150 100 190 100 190C100 190 70 150 70 100C70 50 100 10 100 10Z" fill="white" />
          <path d="M50 60C50 60 90 70 120 100C150 130 160 170 160 170C160 170 120 160 90 130C60 100 50 60 50 60Z" fill="white" />
          <path d="M150 60C150 60 110 70 80 100C50 130 40 170 40 170C40 170 80 160 110 130C140 100 150 60 150 60Z" fill="white" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {/* Badge – enhanced with glow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-medium mb-6 border border-white/10 shadow-[0_0_30px_rgba(113,175,63,0.15)]"
            >
              <span className="w-2 h-2 bg-mauk-green-light rounded-full animate-pulse" />
              Saison-Highlights entdecken
            </motion.div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4 sm:mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Hier wächst
              <br />
              <span className="text-mauk-green-lighter drop-shadow-[0_0_30px_rgba(140,198,63,0.3)]">das Glück</span>
            </h1>

            {/* Subline */}
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
              Deutschlands größtes Erlebnisgartencenter – seit 1855 familiengeführt.
              Entdecken Sie Pflanzenvielfalt, Inspiration und Genuss an unseren
              Standorten in Lauffen und Ludwigsburg.
            </p>

            {/* CTAs – with hover glow */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/sortiment"
                className="inline-flex items-center justify-center gap-2 bg-mauk-green-light hover:bg-mauk-green-lighter text-white px-7 py-3.5 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-[0_8px_30px_rgba(113,175,63,0.4)] hover:-translate-y-0.5"
              >
                Jetzt entdecken
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/standorte"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white px-7 py-3.5 rounded-full text-base font-semibold transition-all duration-300 border border-white/10 hover:border-white/25"
              >
                <MapPin className="h-5 w-5" />
                Standorte & Öffnungszeiten
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#faf8f5] via-[#faf8f5]/50 to-transparent" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 z-10"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Entdecken</span>
        <ChevronDown className="h-5 w-5 animate-scroll-bounce" />
      </motion.div>
    </section>
  );
}
