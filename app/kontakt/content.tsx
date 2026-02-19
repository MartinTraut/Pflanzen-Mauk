"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { STANDORTE } from "@/lib/data";

export function KontaktContent() {
  return (
    <>
      <PageHeader
        title="Kontakt"
        subtitle="Wir sind für Sie da"
        description="Haben Sie Fragen oder Wünsche? Kontaktieren Sie uns – wir helfen Ihnen gerne weiter."
        breadcrumbs={[{ label: "Kontakt", href: "/kontakt" }]}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <h2
                className="text-2xl sm:text-3xl font-bold text-mauk-green mb-6"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Schreiben Sie uns
              </h2>
              <ContactForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              {STANDORTE.map((standort) => (
                <div
                  key={standort.id}
                  className="bg-white rounded-2xl overflow-hidden border border-mauk-cream hover:border-mauk-green-light/20 transition-all duration-300 card-hover"
                >
                  {/* Green accent top border */}
                  <div className="h-1 bg-gradient-to-r from-mauk-green via-mauk-green-light to-mauk-green" />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-mauk-green mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                      {standort.stadt}
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 mt-0.5 text-mauk-green-light shrink-0" />
                        <span className="text-mauk-dark/70">
                          {standort.adresse}, {standort.plz} {standort.ort}
                        </span>
                      </div>
                      <a
                        href={`tel:${standort.telefon.replace(/\s|-/g, "")}`}
                        className="flex items-center gap-3 text-mauk-dark hover:text-mauk-green transition-colors"
                      >
                        <Phone className="h-4 w-4 text-mauk-green-light shrink-0" />
                        <span className="font-medium">{standort.telefon}</span>
                      </a>
                      <a
                        href={`mailto:${standort.email}`}
                        className="flex items-center gap-3 text-mauk-dark hover:text-mauk-green transition-colors"
                      >
                        <Mail className="h-4 w-4 text-mauk-green-light shrink-0" />
                        <span className="font-medium">{standort.email}</span>
                      </a>
                      <div className="flex items-start gap-3">
                        <Clock className="h-4 w-4 mt-0.5 text-mauk-green-light shrink-0" />
                        <div>
                          {standort.oeffnungszeiten.map((oz, i) => (
                            <div key={i} className="flex justify-between gap-3">
                              <span className="text-mauk-dark/70">{oz.label}:</span>
                              <span className="font-medium text-mauk-dark">{oz.zeit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Additional Contact */}
              <div className="bg-mauk-cream rounded-2xl p-6 border border-mauk-green/5">
                <h3 className="font-semibold text-mauk-green mb-3">Weitere Kontakte</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-mauk-dark/70">
                    <span className="font-medium text-mauk-dark">Bewerbungen:</span>{" "}
                    <a href="mailto:bewerbung@pflanzen-mauk.de" className="text-mauk-green hover:underline">
                      bewerbung@pflanzen-mauk.de
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
