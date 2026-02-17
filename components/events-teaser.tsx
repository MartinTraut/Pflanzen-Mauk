"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Tag } from "lucide-react";
import { EVENTS } from "@/lib/data";

const upcomingEvents = EVENTS.slice(0, 4);

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

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

export function EventsTeaser() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <span className="text-mauk-green-light font-medium text-sm tracking-widest uppercase">
              Was kommt
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-mauk-green mt-3 mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Events &amp; Workshops
            </h2>
            <p className="text-mauk-dark/70 text-base sm:text-lg leading-relaxed mb-6">
              Erleben Sie kreative Workshops, saisonale Aktionen und unvergessliche
              Events in unserem Gartencenter.
            </p>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 bg-mauk-green hover:bg-mauk-green/90 text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              Alle Events
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Right: Event Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-4"
          >
            {upcomingEvents.map((event) => {
              const badge = getKategorieBadge(event.kategorie);
              return (
                <motion.div
                  key={event.id}
                  variants={item}
                  className="bg-white rounded-xl p-5 sm:p-6 border border-mauk-cream hover:border-mauk-green-light/30 transition-all card-hover"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    {/* Date Block */}
                    <div className="shrink-0 w-16 h-16 bg-mauk-cream rounded-xl flex flex-col items-center justify-center">
                      <span className="text-xs font-medium text-mauk-green/70 uppercase">
                        {new Date(event.datum).toLocaleDateString("de-DE", { month: "short" })}
                      </span>
                      <span className="text-xl font-bold text-mauk-green">
                        {new Date(event.datum).getDate()}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${badge.className}`}>
                          {badge.label}
                        </span>
                        {event.preis && (
                          <span className="flex items-center gap-1 text-xs text-mauk-dark/60">
                            <Tag className="h-3 w-3" />
                            {event.preis}
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-mauk-dark text-base sm:text-lg truncate">
                        {event.titel}
                      </h3>
                      <div className="flex items-center gap-3 mt-1 text-xs text-mauk-dark/60">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {event.datumDisplay}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {event.ort}
                        </span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className="hidden sm:block h-5 w-5 text-mauk-green/30 group-hover:text-mauk-green transition-colors shrink-0" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
