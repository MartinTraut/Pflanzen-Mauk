"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SORTIMENT } from "@/lib/data";

const featured = SORTIMENT.slice(0, 6);

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function SortimentTeaser() {
  return (
    <section className="py-16 sm:py-24 bg-mauk-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16"
        >
          <div>
            <span className="text-mauk-green-light font-medium text-sm tracking-widest uppercase">
              Unser Angebot
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-mauk-green mt-3"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Sortiment entdecken
            </h2>
          </div>
          {/* "Alle Kategorien" as button-style link with arrow animation */}
          <Link
            href="/sortiment"
            className="inline-flex items-center gap-2 text-mauk-green font-semibold hover:text-white hover:bg-mauk-green px-5 py-2.5 rounded-full transition-all duration-300 self-start sm:self-auto border border-mauk-green/20 hover:border-mauk-green group"
          >
            Alle Kategorien
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Categories Grid – alternating row sizes: row 1 = 2+1, row 2 = 1+2 */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
        >
          {featured.map((kategorie, index) => {
            const isLarge = index === 0 || index === 5;
            return (
              <motion.div
                key={kategorie.id}
                variants={item}
                className={isLarge ? "col-span-2 md:col-span-1" : ""}
              >
                <Link
                  href={`/sortiment#${kategorie.id}`}
                  className={`group block relative rounded-2xl overflow-hidden card-hover ${
                    isLarge ? "h-56 sm:h-72" : "h-48 sm:h-64"
                  }`}
                >
                  <Image
                    src={kategorie.image}
                    alt={kategorie.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mauk-green/80 via-mauk-green/20 to-transparent" />
                  {/* Glassmorphism name overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/30 to-transparent">
                    <span className="text-2xl sm:text-3xl mb-1 block transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 inline-block">
                      {kategorie.icon}
                    </span>
                    <h3
                      className="text-white font-bold text-sm sm:text-lg"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {kategorie.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
