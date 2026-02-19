"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TreePine, Users, Award, Heart } from "lucide-react";

const stats = [
  {
    icon: TreePine,
    value: "Seit 1855",
    numericValue: 1855,
    isYear: true,
    label: "Familientradition in 6. Generation",
  },
  {
    icon: Users,
    value: "2 Standorte",
    numericValue: 2,
    isYear: false,
    label: "Lauffen & Ludwigsburg",
  },
  {
    icon: Award,
    value: "19+",
    numericValue: 19,
    isYear: false,
    label: "Abteilungen & Sortimente",
  },
  {
    icon: Heart,
    value: "Deutschlands",
    numericValue: null,
    isYear: false,
    label: "größtes Erlebnisgartencenter",
  },
];

function AnimatedCounter({ value, isYear, suffix = "" }: { value: number | null; isYear: boolean; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || value === null) return;
    const duration = 1500;
    const start = isYear ? value - 20 : 0;
    const end = value;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(start + (end - start) * eased));
      if (progress >= 1) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value, isYear]);

  if (value === null) return null;

  return (
    <span ref={ref}>
      {isYear ? `Seit ${count}` : `${count}${suffix}`}
    </span>
  );
}

export function TrustSection() {
  return (
    <section className="py-14 sm:py-20 border-y border-mauk-cream botanical-bg relative">
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
              className="text-center group"
            >
              {/* Icon with gradient background */}
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br from-mauk-green/10 to-mauk-green-light/10 group-hover:from-mauk-green/15 group-hover:to-mauk-green-light/15 transition-all duration-300">
                <stat.icon className="h-7 w-7 text-mauk-green" />
              </div>
              {/* Larger value text with counter animation */}
              <div
                className="text-2xl sm:text-3xl font-bold text-mauk-green mb-1"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {stat.numericValue !== null ? (
                  <AnimatedCounter
                    value={stat.numericValue}
                    isYear={stat.isYear}
                    suffix={stat.value.includes("+") ? "+" : stat.value.includes("Standorte") ? " Standorte" : ""}
                  />
                ) : (
                  stat.value
                )}
              </div>
              <div className="text-sm text-mauk-dark/60 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Ornamental separator at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="mx-auto max-w-xs">
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-mauk-green/15" />
            <svg width="12" height="12" viewBox="0 0 12 12" className="text-mauk-green/20">
              <path d="M6 0C6 0 8 4 8 6C8 8 6 12 6 12C6 12 4 8 4 6C4 4 6 0 6 0Z" fill="currentColor" />
            </svg>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-mauk-green/15" />
          </div>
        </div>
      </div>
    </section>
  );
}
