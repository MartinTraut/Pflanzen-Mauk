"use client";

import { motion } from "framer-motion";
import { TreePine, Users, Award, Heart } from "lucide-react";

const stats = [
  {
    icon: TreePine,
    value: "Seit 1855",
    label: "Familientradition in 6. Generation",
  },
  {
    icon: Users,
    value: "2 Standorte",
    label: "Lauffen & Ludwigsburg",
  },
  {
    icon: Award,
    value: "19+",
    label: "Abteilungen & Sortimente",
  },
  {
    icon: Heart,
    value: "Deutschlands",
    label: "größtes Erlebnisgartencenter",
  },
];

export function TrustSection() {
  return (
    <section className="py-12 sm:py-16 border-y border-mauk-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-mauk-green/10 rounded-xl flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-mauk-green" />
              </div>
              <div className="text-lg sm:text-xl font-bold text-mauk-green" style={{ fontFamily: "var(--font-serif)" }}>
                {stat.value}
              </div>
              <div className="text-sm text-mauk-dark/60 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
