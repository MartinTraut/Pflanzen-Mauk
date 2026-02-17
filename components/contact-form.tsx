"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-mauk-green/5 rounded-2xl p-8 text-center">
        <CheckCircle className="h-12 w-12 text-mauk-green-light mx-auto mb-4" />
        <h3 className="text-xl font-bold text-mauk-green mb-2" style={{ fontFamily: "var(--font-serif)" }}>
          Vielen Dank!
        </h3>
        <p className="text-mauk-dark/70">
          Wir haben Ihre Nachricht erhalten und melden uns zeitnah bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-mauk-dark mb-1.5">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-3 rounded-xl border border-mauk-cream bg-white text-mauk-dark placeholder:text-mauk-dark/40 focus:border-mauk-green focus:ring-2 focus:ring-mauk-green/20 outline-none transition-all"
            placeholder="Ihr Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-mauk-dark mb-1.5">
            E-Mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 rounded-xl border border-mauk-cream bg-white text-mauk-dark placeholder:text-mauk-dark/40 focus:border-mauk-green focus:ring-2 focus:ring-mauk-green/20 outline-none transition-all"
            placeholder="ihre@email.de"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-mauk-dark mb-1.5">
          Telefon
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full px-4 py-3 rounded-xl border border-mauk-cream bg-white text-mauk-dark placeholder:text-mauk-dark/40 focus:border-mauk-green focus:ring-2 focus:ring-mauk-green/20 outline-none transition-all"
          placeholder="Ihre Telefonnummer"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-mauk-dark mb-1.5">
          Betreff *
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 rounded-xl border border-mauk-cream bg-white text-mauk-dark focus:border-mauk-green focus:ring-2 focus:ring-mauk-green/20 outline-none transition-all"
        >
          <option value="">Bitte wählen</option>
          <option value="allgemein">Allgemeine Anfrage</option>
          <option value="beratung">Beratung</option>
          <option value="events">Events & Workshops</option>
          <option value="gastronomie">Gastronomie</option>
          <option value="galabau">Garten- & Landschaftsbau</option>
          <option value="reklamation">Reklamation</option>
          <option value="sonstiges">Sonstiges</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-mauk-dark mb-1.5">
          Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-mauk-cream bg-white text-mauk-dark placeholder:text-mauk-dark/40 focus:border-mauk-green focus:ring-2 focus:ring-mauk-green/20 outline-none transition-all resize-y"
          placeholder="Wie können wir Ihnen helfen?"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-mauk-cream text-mauk-green focus:ring-mauk-green"
        />
        <label htmlFor="privacy" className="text-sm text-mauk-dark/70">
          Ich habe die{" "}
          <a href="/datenschutz" className="text-mauk-green hover:underline">
            Datenschutzerklärung
          </a>{" "}
          gelesen und bin mit der Verarbeitung meiner Daten einverstanden. *
        </label>
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-mauk-green hover:bg-mauk-green/90 text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg"
      >
        <Send className="h-4 w-4" />
        Nachricht senden
      </button>
    </form>
  );
}
