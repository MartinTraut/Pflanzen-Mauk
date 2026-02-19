"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { SORTIMENT } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function SortimentContent() {
  return (
    <>
      <PageHeader
        title="Unser Sortiment"
        subtitle="Über 19 Abteilungen"
        description="Von Pflanzen über Gartenmöbel bis hin zu Dekoration – entdecken Sie unser vielfältiges Angebot."
        image="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80"
        breadcrumbs={[{ label: "Sortiment", href: "/sortiment" }]}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12 sm:mb-16"
          >
            <h2
              className="text-2xl sm:text-3xl font-bold text-mauk-green mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Vielfalt erleben
            </h2>
            <p className="text-mauk-dark/70 text-base sm:text-lg leading-relaxed">
              In unserem Erlebnisgartencenter finden Sie alles, was Ihr grünes Herz begehrt.
              Ob Sie Ihren Garten neu gestalten, Ihren Balkon bepflanzen oder ein besonderes
              Geschenk suchen – wir haben das passende Sortiment für Sie.
            </p>
          </motion.div>

          {/* Categories Grid – improved cards */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {SORTIMENT.map((kategorie) => (
              <motion.div
                key={kategorie.id}
                id={kategorie.id}
                variants={item}
                className="group bg-white rounded-2xl overflow-hidden border border-mauk-cream hover:border-mauk-green-light/30 transition-all duration-300 card-hover"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={kategorie.image}
                    alt={kategorie.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mauk-green/40 to-transparent" />
                  <span className="absolute top-4 left-4 text-3xl drop-shadow-sm">{kategorie.icon}</span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3
                    className="text-xl font-bold text-mauk-green mb-2"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {kategorie.name}
                  </h3>
                  <p className="text-mauk-dark/70 text-sm leading-relaxed">
                    {kategorie.beschreibung}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info – decorative frame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 relative"
          >
            {/* Ornamental border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-mauk-green/10 -m-1 pointer-events-none" />
            <div className="bg-mauk-cream rounded-2xl p-8 sm:p-12 text-center">
              <div className="ornament-divider text-mauk-green/20 mb-6">
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <path d="M8 0C8 0 11 5 11 8C11 11 8 16 8 16C8 16 5 11 5 8C5 5 8 0 8 0Z" fill="currentColor" />
                </svg>
              </div>
              <h3
                className="text-2xl sm:text-3xl font-bold text-mauk-green mb-4"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Noch mehr entdecken
              </h3>
              <p className="text-mauk-dark/70 max-w-2xl mx-auto mb-6">
                Unser Sortiment wechselt saisonal und wird ständig erweitert. Besuchen Sie uns
                vor Ort in Lauffen oder Ludwigsburg und lassen Sie sich von unserer Vielfalt
                inspirieren. Unsere Fachberater stehen Ihnen gerne zur Seite.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Schnittblumen",
                  "Seidenblumen",
                  "Bepflanzte Schalen",
                  "Pflanzgefäße",
                  "Sämereien",
                  "Genuss",
                  "Bastelbedarf",
                ].map((extra) => (
                  <span
                    key={extra}
                    className="bg-white text-mauk-green text-sm px-4 py-2 rounded-full border border-mauk-green/10 hover:border-mauk-green/20 transition-colors"
                  >
                    {extra}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
