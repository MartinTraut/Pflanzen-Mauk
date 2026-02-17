"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Mail } from "lucide-react";
import { PageHeader } from "@/components/page-header";

const stellenangebote = [
  { titel: "Abteilungsleitung Floristik", art: "Vollzeit", ort: "Lauffen" },
  { titel: "Mitarbeiter Restaurant", art: "Voll-/Teilzeit", ort: "Lauffen" },
  { titel: "Werkstudent", art: "Teilzeit", ort: "Lauffen" },
  { titel: "Garten- und Landschaftsgärtner", art: "Teil-/Vollzeit", ort: "Lauffen" },
  { titel: "Florist", art: "Teil-/Vollzeit", ort: "Ludwigsburg" },
  { titel: "Gärtner", art: "Teil-/Vollzeit/Minijob", ort: "Beide Standorte" },
];

const ausbildung = {
  lauffen: [
    "Florist/in",
    "Verkäufer/in",
    "Kaufmann/-frau im Einzelhandel",
    "Fachkraft für Lagerlogistik",
    "Fachlagerist/in",
    "Gestalter/in für visuelles Marketing",
    "Landschaftsgärtner/in",
  ],
  ludwigsburg: [
    "Florist/in",
    "Verkäufer/in",
    "Kaufmann/-frau im Einzelhandel",
  ],
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function KarriereContent() {
  return (
    <>
      <PageHeader
        title="Karriere"
        subtitle="Werde Teil der Gartengang"
        description="Wir sind nicht nur Kollegen, sondern eine fröhliche Gartengang. Entdecken Sie unsere Stellenangebote und Ausbildungsmöglichkeiten."
        image="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1920&q=80"
        breadcrumbs={[{ label: "Karriere", href: "/karriere" }]}
      />

      {/* Stellenangebote */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="h-8 w-8 text-mauk-green" />
              <h2
                className="text-2xl sm:text-3xl font-bold text-mauk-green"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Aktuelle Stellenangebote
              </h2>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {stellenangebote.map((stelle) => (
              <motion.div
                key={stelle.titel}
                variants={item}
                className="bg-white rounded-xl p-6 border border-mauk-cream card-hover"
              >
                <h3 className="font-bold text-mauk-dark text-lg mb-2">{stelle.titel}</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-mauk-green-light/10 text-mauk-green-light px-2.5 py-1 rounded-full font-medium">
                    {stelle.art}
                  </span>
                  <span className="text-xs bg-mauk-cream text-mauk-dark/70 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {stelle.ort}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 text-center text-mauk-dark/60 text-sm"
          >
            Bewerben Sie sich unter{" "}
            <a href="mailto:bewerbung@pflanzen-mauk.de" className="text-mauk-green font-medium hover:underline">
              bewerbung@pflanzen-mauk.de
            </a>
          </motion.p>
        </div>
      </section>

      {/* Ausbildung */}
      <section className="py-16 sm:py-24 bg-mauk-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <GraduationCap className="h-10 w-10 text-mauk-green mx-auto mb-4" />
            <h2
              className="text-2xl sm:text-3xl font-bold text-mauk-green mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Ausbildung bei Pflanzen Mauk
            </h2>
            <p className="text-mauk-dark/70 max-w-2xl mx-auto">
              Starte Deine Karriere bei uns! Ausbildungsbeginn: 17. August 2026.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Lauffen */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-xl font-bold text-mauk-green mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                Standort Lauffen
              </h3>
              <ul className="space-y-2">
                {ausbildung.lauffen.map((beruf) => (
                  <li key={beruf} className="flex items-center gap-2 text-mauk-dark/80 text-sm">
                    <span className="w-1.5 h-1.5 bg-mauk-green-light rounded-full shrink-0" />
                    {beruf}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Ludwigsburg */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-xl font-bold text-mauk-green mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                Standort Ludwigsburg
              </h3>
              <ul className="space-y-2">
                {ausbildung.ludwigsburg.map((beruf) => (
                  <li key={beruf} className="flex items-center gap-2 text-mauk-dark/80 text-sm">
                    <span className="w-1.5 h-1.5 bg-mauk-green-light rounded-full shrink-0" />
                    {beruf}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <a
              href="mailto:bewerbung@pflanzen-mauk.de"
              className="inline-flex items-center gap-2 bg-mauk-green hover:bg-mauk-green/90 text-white px-8 py-3.5 rounded-full font-semibold transition-colors"
            >
              <Mail className="h-5 w-5" />
              Jetzt bewerben
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
