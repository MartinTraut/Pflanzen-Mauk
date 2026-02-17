"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { UtensilsCrossed, Clock, TreePine, Baby, Coffee, Sun } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { GASTRONOMIE } from "@/lib/data";

export function GastronomieContent() {
  return (
    <>
      <PageHeader
        title="Gastronomie"
        subtitle="Genuss erleben"
        description="Kulinarische Köstlichkeiten inmitten unserer grünen Oase – von Frühstück bis Kaffee & Kuchen."
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
        breadcrumbs={[{ label: "Gastronomie", href: "/gastronomie" }]}
      />

      {/* Restaurant Sagenhaft */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-80 sm:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                  alt={GASTRONOMIE.restaurant.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-mauk-green/10 rounded-xl flex items-center justify-center">
                  <UtensilsCrossed className="h-6 w-6 text-mauk-green" />
                </div>
                <span className="text-mauk-green-light font-medium text-sm tracking-widest uppercase">
                  Restaurant
                </span>
              </div>

              <h2
                className="text-3xl sm:text-4xl font-bold text-mauk-green mb-4"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {GASTRONOMIE.restaurant.name}
              </h2>

              <p className="text-mauk-dark/70 text-base sm:text-lg leading-relaxed mb-6">
                {GASTRONOMIE.restaurant.beschreibung}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Coffee, label: "Frühstück" },
                  { icon: UtensilsCrossed, label: "Mittagessen" },
                  { icon: Coffee, label: "Kaffee & Kuchen" },
                  { icon: Baby, label: "Indoor-Spielplatz" },
                  { icon: Sun, label: "250 Sitzplätze" },
                ].map((feature) => (
                  <div key={feature.label} className="flex items-center gap-2 text-sm text-mauk-dark">
                    <feature.icon className="h-4 w-4 text-mauk-green-light shrink-0" />
                    {feature.label}
                  </div>
                ))}
              </div>

              {/* Öffnungszeiten */}
              <div className="bg-mauk-cream rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-5 w-5 text-mauk-green" />
                  <h4 className="font-semibold text-mauk-green">Öffnungszeiten</h4>
                </div>
                <div className="space-y-1 text-sm">
                  {GASTRONOMIE.restaurant.oeffnungszeiten.map((oz, i) => (
                    <div key={i} className="flex justify-between">
                      <span className="text-mauk-dark/70">{oz.label}</span>
                      <span className="font-medium text-mauk-dark">{oz.zeit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seegrill */}
      <section className="py-16 sm:py-24 bg-mauk-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-mauk-green/10 rounded-xl flex items-center justify-center">
                  <TreePine className="h-6 w-6 text-mauk-green" />
                </div>
                <span className="text-mauk-green-light font-medium text-sm tracking-widest uppercase">
                  Biergarten
                </span>
              </div>

              <h2
                className="text-3xl sm:text-4xl font-bold text-mauk-green mb-4"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {GASTRONOMIE.seegrill.name}
              </h2>

              <p className="text-mauk-dark/70 text-base sm:text-lg leading-relaxed mb-6">
                {GASTRONOMIE.seegrill.beschreibung}
              </p>

              <div className="bg-white rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Sun className="h-5 w-5 text-mauk-green" />
                  <h4 className="font-semibold text-mauk-green">Saison</h4>
                </div>
                <p className="text-sm text-mauk-dark/70">{GASTRONOMIE.seegrill.saison}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="relative h-80 sm:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&q=80"
                  alt={GASTRONOMIE.seegrill.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
