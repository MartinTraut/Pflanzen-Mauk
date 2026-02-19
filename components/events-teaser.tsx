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
      return { label: "Workshop", className: "bg-mauk-green-light/10 text-mauk-green-light", borderColor: "border-l-mauk-green-light" };
    case "event":
      return { label: "Event", className: "bg-mauk-red/10 text-mauk-red", borderColor: "border-l-mauk-red" };
    case "aktion":
      return { label: "Aktion", className: "bg-mauk-earth/10 text-mauk-earth", borderColor: "border-l-mauk-earth" };
    default:
      return { label: kategorie, className: "bg-gray-100 text-gray-600", borderColor: "border-l-gray-400" };
  }
}

export function EventsTeaser() {
  return (
    <section className="py-16 sm:py-24 relative">
      {/* Decorative plant element behind text */}
      <div className="absolute top-20 left-0 w-32 h-64 opacity-[0.03] pointer-events-none hidden lg:block">
        <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M50 200V80M50 80C50 80 20 60 10 30C0 0 50 20 50 80M50 80C50 80 80 50 90 20C100 -10 50 30 50 80M50 120C50 120 30 100 15 80C0 60 40 75 50 120M50 140C50 140 70 120 85 100C100 80 60 95 50 140" stroke="#0f4340" strokeWidth="2" />
        </svg>
      </div>

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
              className="inline-flex items-center gap-2 bg-mauk-green hover:bg-mauk-green/90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_8px_25px_rgba(15,67,64,0.25)]"
            >
              Alle Events
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Right: Event Cards – with colored left border */}
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
                  className={`group bg-white rounded-xl p-5 sm:p-6 border border-mauk-cream hover:border-mauk-green-light/30 transition-all duration-300 card-hover border-l-4 ${badge.borderColor}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    {/* Date Block – gradient style */}
                    <div className="shrink-0 w-16 h-16 bg-gradient-to-br from-mauk-green to-mauk-green/80 rounded-xl flex flex-col items-center justify-center shadow-sm">
                      <span className="text-[10px] font-medium text-white/80 uppercase">
                        {new Date(event.datum).toLocaleDateString("de-DE", { month: "short" })}
                      </span>
                      <span className="text-xl font-bold text-white">
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

                    {/* Arrow – slide in from right on hover */}
                    <div className="hidden sm:flex items-center shrink-0">
                      <ArrowRight className="h-5 w-5 text-mauk-green/20 transition-all duration-300 group-hover:text-mauk-green group-hover:translate-x-1" />
                    </div>
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
