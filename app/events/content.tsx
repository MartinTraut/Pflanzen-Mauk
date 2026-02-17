"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Tag, Users } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { EVENTS, GRUPPEN_WORKSHOPS } from "@/lib/data";

function getKategorieBadge(kategorie: string) {
  switch (kategorie) {
    case "workshop":
      return { label: "Workshop", className: "bg-mauk-green-light/10 text-mauk-green-light" };
    case "event":
      return { label: "Event", className: "bg-mauk-red/10 text-mauk-red" };
    case "aktion":
      return { label: "Aktion", className: "bg-mauk-earth/10 text-mauk-earth" };
    default:
      return { label: kategorie, className: "bg-gray-100 text-gray-600" };
  }
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function EventsContent() {
  return (
    <>
      <PageHeader
        title="Events & Workshops"
        subtitle="Erleben & Mitmachen"
        description="Kreative Workshops, saisonale Aktionen und unvergessliche Events für Groß und Klein."
        image="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1920&q=80"
        breadcrumbs={[{ label: "Events & Workshops", href: "/events" }]}
      />

      {/* Upcoming Events */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2
              className="text-2xl sm:text-3xl font-bold text-mauk-green mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Kommende Termine
            </h2>
            <p className="text-mauk-dark/70 text-base sm:text-lg max-w-2xl">
              Hier finden Sie alle aktuellen Termine für Workshops, Aktionswochen und
              besondere Events.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {EVENTS.map((event) => {
              const badge = getKategorieBadge(event.kategorie);
              return (
                <motion.article
                  key={event.id}
                  variants={item}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-mauk-cream card-hover"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Date Block */}
                    <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-mauk-cream rounded-xl flex flex-col items-center justify-center">
                      <span className="text-xs font-medium text-mauk-green/70 uppercase">
                        {new Date(event.datum).toLocaleDateString("de-DE", { month: "short" })}
                      </span>
                      <span className="text-2xl sm:text-3xl font-bold text-mauk-green">
                        {new Date(event.datum).getDate()}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${badge.className}`}>
                          {badge.label}
                        </span>
                      </div>
                      <h3
                        className="font-bold text-mauk-dark text-lg sm:text-xl mb-2"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {event.titel}
                      </h3>
                      <p className="text-mauk-dark/70 text-sm mb-3">
                        {event.beschreibung}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-mauk-dark/60">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          {event.datumDisplay}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          {event.ort}
                        </span>
                        {event.preis && (
                          <span className="flex items-center gap-1.5 font-medium text-mauk-green">
                            <Tag className="h-4 w-4" />
                            {event.preis}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Gruppen-Workshops */}
      <section className="py-16 sm:py-24 bg-mauk-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Users className="h-10 w-10 text-mauk-green mx-auto mb-4" />
            <h2
              className="text-2xl sm:text-3xl font-bold text-mauk-green mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Individuelle Gruppen-Workshops
            </h2>
            <p className="text-mauk-dark/70 max-w-2xl mx-auto">
              Ob Kindergeburtstag oder Team-Event – buchen Sie einen individuellen
              Workshop für Ihre Gruppe.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {GRUPPEN_WORKSHOPS.map((workshop, index) => (
              <motion.div
                key={workshop.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="bg-white rounded-xl p-6 border border-white card-hover"
              >
                <h3 className="font-bold text-mauk-dark text-lg mb-2">
                  {workshop.name}
                </h3>
                <p className="text-mauk-dark/70 text-sm">{workshop.beschreibung}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-mauk-dark/60 text-sm mt-8"
          >
            Für Buchungen und Anfragen kontaktieren Sie uns unter{" "}
            <a href="mailto:info@pflanzen-mauk.de" className="text-mauk-green font-medium hover:underline">
              info@pflanzen-mauk.de
            </a>{" "}
            oder telefonisch unter{" "}
            <a href="tel:0713395030" className="text-mauk-green font-medium hover:underline">
              07133 - 9503-0
            </a>
            .
          </motion.p>
        </div>
      </section>

      {/* Maukibär */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-mauk-green rounded-2xl p-8 sm:p-12 text-center"
          >
            <span className="text-5xl mb-4 block">🧸</span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Maukibär – Jeden Samstag!
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-2">
              Unser flauschiges Maskottchen begrüßt jeden Samstag die kleinen
              Besucher im Gartencenter Lauffen, verteilt Süßigkeiten und posiert
              gerne für Fotos.
            </p>
            <p className="text-mauk-green-lighter font-medium">Kostenlos – Jeden Samstag in Lauffen</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
