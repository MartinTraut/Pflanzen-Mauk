"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle, Leaf } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Botanical background elements */}
      <div className="absolute inset-0 botanical-bg" />
      <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M100 10C100 10 130 50 130 100C130 150 100 190 100 190C100 190 70 150 70 100C70 50 100 10 100 10Z" fill="#0f4340" />
          <path d="M50 60C50 60 90 70 120 100C150 130 160 170 160 170C160 170 120 160 90 130C60 100 50 60 50 60Z" fill="#0f4340" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-[0.03] pointer-events-none rotate-180">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M100 10C100 10 130 50 130 100C130 150 100 190 100 190C100 190 70 150 70 100C70 50 100 10 100 10Z" fill="#0f4340" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-mauk-green/10 to-mauk-green-light/10 flex items-center justify-center">
            <Leaf className="h-7 w-7 text-mauk-green" />
          </div>

          <h2
            className="text-3xl sm:text-4xl font-bold text-mauk-green mb-3"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Grüne Tipps & exklusive Angebote
          </h2>
          <p className="text-mauk-dark/70 text-base sm:text-lg mb-8 max-w-lg mx-auto">
            Abonnieren Sie unseren Newsletter und erhalten Sie saisonale Pflege-Tipps,
            Veranstaltungshinweise und exklusive Rabattaktionen.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-mauk-green/5 rounded-2xl p-8 border border-mauk-green/10"
            >
              <CheckCircle className="h-10 w-10 text-mauk-green-light mx-auto mb-3" />
              <p className="text-mauk-green font-semibold text-lg" style={{ fontFamily: "var(--font-serif)" }}>
                Vielen Dank!
              </p>
              <p className="text-mauk-dark/60 text-sm mt-1">
                Sie erhalten in Kürze eine Bestätigung per E-Mail.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-mauk-dark/40" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ihre E-Mail-Adresse"
                  className="w-full pl-11 pr-4 py-3.5 rounded-full border border-mauk-cream bg-white text-mauk-dark placeholder:text-mauk-dark/40 focus:border-mauk-green focus:ring-2 focus:ring-mauk-green/20 outline-none transition-all text-sm"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-mauk-green hover:bg-mauk-green/90 text-white px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-[0_8px_25px_rgba(15,67,64,0.25)] hover:-translate-y-0.5 shrink-0"
              >
                Anmelden
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}

          <p className="text-xs text-mauk-dark/40 mt-4">
            Kein Spam – jederzeit abbestellbar. Wir respektieren Ihre Privatsphäre.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
