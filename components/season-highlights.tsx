"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const highlights = [
  {
    title: "Frühlingserwachen",
    subtitle: "Jetzt ist Pflanzzeit",
    description: "Beet- & Balkonpflanzen, Stauden und Kräuter – bringen Sie Farbe in Ihren Garten.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    href: "/sortiment",
    color: "from-mauk-green-light/80",
  },
  {
    title: "Zitruswoche",
    subtitle: "04. – 15. März",
    description: "Entdecken Sie die Vielfalt der Zitrusfrüchte – Sorten, Pflege und mehr.",
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=800&q=80",
    href: "/events",
    color: "from-yellow-600/80",
  },
  {
    title: "Workshops",
    subtitle: "Kreativ werden",
    description: "Von Terrarium bis Blumenstrauß – unsere Workshops bringen Ihre Kreativität zum Blühen.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
    href: "/events",
    color: "from-mauk-earth/80",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function SeasonHighlights() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-mauk-green-light font-medium text-sm tracking-widest uppercase">
            Aktuelles
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-mauk-green mt-3 mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Saison-Highlights
          </h2>
          <p className="text-mauk-dark/70 max-w-2xl mx-auto text-base sm:text-lg">
            Entdecken Sie unsere aktuellen Empfehlungen und saisonalen Aktionen.
          </p>
        </motion.div>

        {/* Highlights Grid – asymmetric: first card featured (larger) */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              variants={item}
              className={index === 0 ? "md:row-span-2" : ""}
            >
              <Link href={highlight.href} className="group block h-full">
                <div className={`relative rounded-2xl overflow-hidden card-hover h-full ${
                  index === 0 ? "h-80 sm:h-full min-h-[400px]" : "h-64 sm:h-[calc(50%-12px)]"
                }`}>
                  <Image
                    src={highlight.image}
                    alt={highlight.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 50vw"}
                  />
                  {/* Deeper overlay gradients */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${highlight.color} via-black/10 to-black/40`}
                  />
                  {/* Content slides up on hover */}
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between transition-transform duration-500 group-hover:-translate-y-1">
                    {/* Badge – glassmorphism */}
                    <span className="self-start bg-white/15 backdrop-blur-md text-white text-xs font-semibold px-4 py-1.5 rounded-full border border-white/10">
                      {highlight.subtitle}
                    </span>
                    <div>
                      <h3
                        className={`font-bold text-white mb-2 ${
                          index === 0 ? "text-3xl sm:text-4xl" : "text-2xl"
                        }`}
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {highlight.title}
                      </h3>
                      <p className={`text-white/90 text-sm mb-3 ${index === 0 ? "line-clamp-3 max-w-md" : "line-clamp-2"}`}>
                        {highlight.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-white font-medium text-sm group-hover:gap-2.5 transition-all duration-300">
                        Mehr erfahren
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
