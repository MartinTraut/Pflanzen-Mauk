"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  Trees,
  MessageCircle,
  CalendarDays,
  FerrisWheel,
  ShoppingBag,
  Smartphone,
  Leaf,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SERVICES } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  stethoscope: Stethoscope,
  trees: Trees,
  "message-circle": MessageCircle,
  calendar: CalendarDays,
  "ferris-wheel": FerrisWheel,
  "shopping-bag": ShoppingBag,
  smartphone: Smartphone,
  leaf: Leaf,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ServiceContent() {
  return (
    <>
      <PageHeader
        title="Unsere Services"
        subtitle="Für Sie da"
        description="Von der Fachberatung bis zum Garten- und Landschaftsbau – wir bieten Ihnen umfassenden Service."
        image="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1920&q=80"
        breadcrumbs={[{ label: "Service", href: "/service" }]}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon] || MessageCircle;
              return (
                <motion.div
                  key={service.id}
                  variants={item}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-mauk-cream card-hover text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-5 bg-mauk-green/10 rounded-xl flex items-center justify-center">
                    <Icon className="h-7 w-7 text-mauk-green" />
                  </div>
                  <h3
                    className="text-lg font-bold text-mauk-green mb-3"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {service.name}
                  </h3>
                  <p className="text-mauk-dark/70 text-sm leading-relaxed">
                    {service.beschreibung}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-mauk-cream rounded-2xl p-8 sm:p-12 text-center"
          >
            <h3
              className="text-2xl sm:text-3xl font-bold text-mauk-green mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Sie haben Fragen?
            </h3>
            <p className="text-mauk-dark/70 max-w-xl mx-auto mb-6">
              Unser kompetentes Team berät Sie gerne persönlich vor Ort oder telefonisch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0713395030"
                className="inline-flex items-center justify-center gap-2 bg-mauk-green hover:bg-mauk-green/90 text-white px-7 py-3.5 rounded-full font-semibold transition-colors"
              >
                07133 - 9503-0 anrufen
              </a>
              <a
                href="mailto:info@pflanzen-mauk.de"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-mauk-green/5 text-mauk-green px-7 py-3.5 rounded-full font-semibold transition-colors border border-mauk-green/20"
              >
                E-Mail schreiben
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
