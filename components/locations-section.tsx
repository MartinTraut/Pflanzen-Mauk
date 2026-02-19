"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowRight, Leaf } from "lucide-react";
import { STANDORTE } from "@/lib/data";

export function LocationsSection() {
  return (
    <section className="py-16 sm:py-24 bg-mauk-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-mauk-green-light font-medium text-sm tracking-widest uppercase">
            Besuchen Sie uns
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-mauk-green mt-3 mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Unsere Standorte
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {STANDORTE.map((standort, index) => (
            <motion.div
              key={standort.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-white rounded-2xl overflow-hidden border border-white hover:border-mauk-green-light/30 transition-all duration-300 card-hover group"
            >
              {/* Green top border accent */}
              <div className="h-1 bg-gradient-to-r from-mauk-green via-mauk-green-light to-mauk-green" />

              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-mauk-green/10 to-mauk-green-light/10 flex items-center justify-center shrink-0 group-hover:from-mauk-green/15 group-hover:to-mauk-green-light/15 transition-all duration-300">
                    <MapPin className="h-6 w-6 text-mauk-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-mauk-green" style={{ fontFamily: "var(--font-serif)" }}>
                      {standort.stadt}
                    </h3>
                    <p className="text-sm text-mauk-dark/60">
                      {standort.adresse}, {standort.plz} {standort.ort}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <a
                    href={`tel:${standort.telefon.replace(/\s|-/g, "")}`}
                    className="flex items-center gap-3 text-mauk-dark hover:text-mauk-green transition-colors"
                  >
                    <Phone className="h-4 w-4 text-mauk-green-light" />
                    <span className="text-sm font-medium">{standort.telefon}</span>
                  </a>

                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 mt-0.5 text-mauk-green-light shrink-0" />
                    <div className="text-sm space-y-1">
                      {standort.oeffnungszeiten.map((oz, i) => (
                        <div key={i} className="flex justify-between gap-4">
                          <span className="text-mauk-dark/70">{oz.label}</span>
                          <span className="font-medium text-mauk-dark whitespace-nowrap">{oz.zeit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Feature Tags – improved pill design with icon */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {standort.features.slice(0, 4).map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1.5 text-xs bg-mauk-cream text-mauk-green px-3 py-1.5 rounded-full border border-mauk-green/5"
                    >
                      <Leaf className="h-3 w-3 text-mauk-green-light" />
                      {feature}
                    </span>
                  ))}
                </div>

                <Link
                  href="/standorte"
                  className="inline-flex items-center gap-2 text-mauk-green font-semibold text-sm hover:text-mauk-green-light transition-colors group/link"
                >
                  Details & Anfahrt
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
