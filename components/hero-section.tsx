"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

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

      {/* Gradient Overlay */}
      <div className="hero-gradient absolute inset-0" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mb-6"
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
              <span className="text-mauk-green-lighter">das Glück</span>
            </h1>

            {/* Subline */}
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
              Deutschlands größtes Erlebnisgartencenter – seit 1855 familiengeführt.
              Entdecken Sie Pflanzenvielfalt, Inspiration und Genuss an unseren
              Standorten in Lauffen und Ludwigsburg.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/sortiment"
                className="inline-flex items-center justify-center gap-2 bg-mauk-green-light hover:bg-mauk-green-lighter text-white px-7 py-3.5 rounded-full text-base font-semibold transition-all hover:shadow-lg hover:shadow-mauk-green-light/25"
              >
                Jetzt entdecken
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/standorte"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white px-7 py-3.5 rounded-full text-base font-semibold transition-all"
              >
                <MapPin className="h-5 w-5" />
                Standorte & Öffnungszeiten
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#faf8f5] to-transparent" />
    </section>
  );
}
