"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Leaf, Users, Award } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { HISTORIE, COMPANY } from "@/lib/data";

export function UeberUnsContent() {
  return (
    <>
      <PageHeader
        title="Über uns"
        subtitle="Seit 1855"
        description="Familientradition, grüne Leidenschaft und das Herz für unsere Kunden – das ist Pflanzen Mauk."
        image="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1920&q=80"
        breadcrumbs={[{ label: "Über uns", href: "/ueber-uns" }]}
      />

      {/* Philosophie */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-mauk-green-light font-medium text-sm tracking-widest uppercase">
                Unsere Philosophie
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-mauk-green mt-3 mb-6"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Hier wächst das Glück
              </h2>
              <p className="text-mauk-dark/70 text-base sm:text-lg leading-relaxed mb-6">
                Das Herz unseres Gartencenters schlägt im gemeinsamen Wachsen von
                Familie und grüner Leidenschaft. Seit über 170 Jahren führen wir
                unser Unternehmen mit Hingabe und der festen Überzeugung, dass ein
                Garten mehr ist als nur ein Stück Land – er ist ein Ort der Freude,
                der Inspiration und des Wohlbefindens.
              </p>
              <p className="text-mauk-dark/70 text-base sm:text-lg leading-relaxed mb-8">
                Als {COMPANY.claim} bieten wir Ihnen nicht nur ein riesiges
                Sortiment, sondern ein ganzheitliches Erlebnis: Pflanzenvielfalt,
                Gastronomie, Erlebnispark und ein Team, das nicht nur aus Kollegen,
                sondern aus einer fröhlichen Gartengang besteht.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Heart, label: "Familiengeführt", sub: "6. Generation" },
                  { icon: Leaf, label: "Nachhaltigkeit", sub: "Too Good To Go" },
                  { icon: Users, label: "Team", sub: "Gartengang" },
                  { icon: Award, label: "Tradition", sub: "Seit 1855" },
                ].map((val) => (
                  <div key={val.label} className="bg-mauk-cream rounded-xl p-4 hover:shadow-md transition-all duration-300 group">
                    <val.icon className="h-6 w-6 text-mauk-green mb-2 group-hover:text-mauk-green-light transition-colors" />
                    <div className="font-semibold text-mauk-dark text-sm">{val.label}</div>
                    <div className="text-xs text-mauk-dark/60">{val.sub}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="relative h-80 sm:h-[550px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80"
                alt="Pflanzen Mauk – Familientradition seit 1855"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Familie */}
      <section className="py-16 sm:py-24 bg-mauk-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl sm:text-4xl font-bold text-mauk-green mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Familie Mayer
            </h2>
            <p className="text-mauk-dark/70 max-w-2xl mx-auto text-base sm:text-lg">
              Seit Generationen führt die Familie Mayer das Gartencenter mit Herzblut
              und Leidenschaft.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Alexander Mayer",
                rolle: "Geschäftsführer",
                generation: "5. Generation",
                beschreibung: "Navigator und Mann des guten Humors",
              },
              {
                name: "Birgit Mayer",
                rolle: "Geschäftsführerin",
                generation: "5. Generation",
                beschreibung: "Tiefe Wurzeln in Tradition und Verantwortung",
              },
              {
                name: "Jessica Mayer",
                rolle: "Geschäftsführerin",
                generation: "6. Generation",
                beschreibung: "Vision: Inspiration für Kunden, familiäre Verbundenheit",
              },
            ].map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 sm:p-8 text-center card-hover border border-white hover:border-mauk-green-light/20 transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-mauk-green/10 to-mauk-green-light/10 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-mauk-green" />
                </div>
                <span className="text-xs font-medium text-mauk-green-light bg-mauk-green-light/10 px-3 py-1 rounded-full">
                  {person.generation}
                </span>
                <h3 className="text-xl font-bold text-mauk-dark mt-3 mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                  {person.name}
                </h3>
                <p className="text-mauk-green font-medium text-sm mb-2">{person.rolle}</p>
                <p className="text-mauk-dark/60 text-sm">{person.beschreibung}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Historie Timeline – elegant gradient line */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2
              className="text-3xl sm:text-4xl font-bold text-mauk-green mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Unsere Geschichte
            </h2>
            <p className="text-mauk-dark/70 max-w-2xl mx-auto">
              Von einem kleinen Gemüseanbaubetrieb zu Deutschlands größtem
              Erlebnisgartencenter – unsere wichtigsten Meilensteine.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line – gradient */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-mauk-green-light via-mauk-green to-mauk-green-light sm:-translate-x-0.5" />

            <div className="space-y-8 sm:space-y-12">
              {HISTORIE.map((meilenstein, index) => (
                <motion.div
                  key={meilenstein.jahr}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Dot – gradient styled */}
                  <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full -translate-x-2 mt-1 z-10 bg-gradient-to-br from-mauk-green-light to-mauk-green ring-4 ring-mauk-warm shadow-sm" />

                  {/* Content */}
                  <div className={`ml-10 sm:ml-0 sm:w-1/2 ${
                    index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                  }`}>
                    <span className="inline-block text-mauk-green-light font-bold text-lg mb-1">
                      {meilenstein.jahr}
                    </span>
                    <p className="text-mauk-dark/70 text-sm sm:text-base leading-relaxed">
                      {meilenstein.text}
                    </p>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden sm:block sm:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nachhaltigkeit */}
      <section className="py-16 sm:py-24 bg-mauk-green relative overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="sustain-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sustain-pattern)" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Leaf className="h-10 w-10 text-mauk-green-light mx-auto mb-4" />
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Nachhaltigkeit
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Gemeinsam mit unseren Kunden möchten wir Nachhaltigkeit neu denken –
              Pflanze für Pflanze. Mit unserer Partnerschaft bei Too Good To Go
              bieten wir Überraschungstüten mit Pflanzen zu reduzierten Preisen an
              und setzen ein Zeichen gegen Verschwendung.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
