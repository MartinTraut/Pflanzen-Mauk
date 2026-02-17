"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1400&q=80"
            alt="Gartencenter Erlebnis"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-mauk-green/85" />

          {/* Content */}
          <div className="relative px-6 sm:px-12 py-12 sm:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mb-6">
                <Smartphone className="h-4 w-4" />
                Mauk Family App
              </div>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                15% Willkommensrabatt
              </h2>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                Laden Sie unsere kostenlose Mauk Family App herunter und sichern Sie
                sich exklusive Coupons, eine Geburtstagsüberraschung und digitale
                Bonverwaltung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-mauk-green-light hover:bg-mauk-green-lighter text-white px-7 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg"
                >
                  App entdecken
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/standorte"
                  className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white px-7 py-3.5 rounded-full font-semibold transition-all"
                >
                  Standorte besuchen
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
