"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { STANDORTE } from "@/lib/data";

export function StandorteContent() {
  return (
    <>
      <PageHeader
        title="Unsere Standorte"
        subtitle="Besuchen Sie uns"
        description="Zwei Standorte – eine grüne Leidenschaft. Finden Sie uns in Lauffen am Neckar und Ludwigsburg."
        image="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1920&q=80"
        breadcrumbs={[{ label: "Standorte", href: "/standorte" }]}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="space-y-10 sm:space-y-16">
            {STANDORTE.map((standort, index) => (
              <motion.div
                key={standort.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-white rounded-2xl border border-mauk-cream overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Map Embed (Privacy-Friendly OpenStreetMap) */}
                  <div className="relative h-64 sm:h-80 lg:h-auto min-h-[320px] bg-mauk-cream">
                    <iframe
                      title={`Karte ${standort.name}`}
                      src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                        standort.id === "lauffen"
                          ? "9.135,49.070,9.165,49.085"
                          : "9.162,48.910,9.192,48.925"
                      }&layer=mapnik&marker=${
                        standort.id === "lauffen" ? "49.078,9.150" : "48.918,9.177"
                      }`}
                      className="absolute inset-0 w-full h-full border-0"
                      loading="lazy"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="flex items-start gap-3 mb-6">
                      <div className="w-12 h-12 bg-mauk-green/10 rounded-xl flex items-center justify-center shrink-0">
                        <MapPin className="h-6 w-6 text-mauk-green" />
                      </div>
                      <div>
                        <h2
                          className="text-2xl sm:text-3xl font-bold text-mauk-green"
                          style={{ fontFamily: "var(--font-serif)" }}
                        >
                          {standort.stadt}
                        </h2>
                        <p className="text-mauk-dark/60 text-sm">{standort.name}</p>
                      </div>
                    </div>

                    <div className="space-y-5">
                      {/* Address */}
                      <div className="flex items-start gap-3">
                        <Navigation className="h-5 w-5 text-mauk-green-light mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium text-mauk-dark">
                            {standort.adresse}
                          </p>
                          <p className="text-mauk-dark/70">
                            {standort.plz} {standort.ort}
                          </p>
                        </div>
                      </div>

                      {/* Phone */}
                      <a
                        href={`tel:${standort.telefon.replace(/\s|-/g, "")}`}
                        className="flex items-center gap-3 text-mauk-dark hover:text-mauk-green transition-colors"
                      >
                        <Phone className="h-5 w-5 text-mauk-green-light shrink-0" />
                        <span className="font-medium">{standort.telefon}</span>
                      </a>

                      {/* Email */}
                      <a
                        href={`mailto:${standort.email}`}
                        className="flex items-center gap-3 text-mauk-dark hover:text-mauk-green transition-colors"
                      >
                        <Mail className="h-5 w-5 text-mauk-green-light shrink-0" />
                        <span className="font-medium">{standort.email}</span>
                      </a>

                      {/* Opening Hours */}
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-mauk-green-light mt-0.5 shrink-0" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-mauk-dark mb-2">Öffnungszeiten</h4>
                          <div className="space-y-1.5">
                            {standort.oeffnungszeiten.map((oz, i) => (
                              <div key={i} className="flex justify-between text-sm">
                                <span className="text-mauk-dark/70">{oz.label}</span>
                                <div className="text-right">
                                  <span className="font-medium text-mauk-dark">{oz.zeit}</span>
                                  {oz.hinweis && (
                                    <span className="block text-xs text-mauk-dark/50">
                                      {oz.hinweis}
                                    </span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mt-6 pt-6 border-t border-mauk-cream">
                      <div className="flex flex-wrap gap-2">
                        {standort.features.map((feature) => (
                          <span
                            key={feature}
                            className="text-xs bg-mauk-cream text-mauk-green px-3 py-1.5 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Google Maps Link */}
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${standort.mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 text-mauk-green font-semibold text-sm hover:text-mauk-green-light transition-colors"
                    >
                      Route planen
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
