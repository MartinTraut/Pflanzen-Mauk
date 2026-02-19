"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-mauk-green/5 rounded-2xl p-8 text-center border border-mauk-green/10">
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

  const inputClasses = "w-full px-4 py-3 rounded-xl border bg-white text-mauk-dark placeholder:text-mauk-dark/40 outline-none transition-all duration-300";
  const inputFocusClasses = "border-mauk-green ring-2 ring-mauk-green/20 shadow-[0_0_0_4px_rgba(15,67,64,0.05)]";
  const inputDefaultClasses = "border-mauk-cream hover:border-mauk-green/30";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={`block text-sm font-medium mb-1.5 transition-colors duration-200 ${focused === "name" ? "text-mauk-green" : "text-mauk-dark"}`}>
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
            className={`${inputClasses} ${focused === "name" ? inputFocusClasses : inputDefaultClasses}`}
            placeholder="Ihr Name"
          />
        </div>
        <div>
          <label htmlFor="email" className={`block text-sm font-medium mb-1.5 transition-colors duration-200 ${focused === "email" ? "text-mauk-green" : "text-mauk-dark"}`}>
            E-Mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            className={`${inputClasses} ${focused === "email" ? inputFocusClasses : inputDefaultClasses}`}
            placeholder="ihre@email.de"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className={`block text-sm font-medium mb-1.5 transition-colors duration-200 ${focused === "phone" ? "text-mauk-green" : "text-mauk-dark"}`}>
          Telefon
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          onFocus={() => setFocused("phone")}
          onBlur={() => setFocused(null)}
          className={`${inputClasses} ${focused === "phone" ? inputFocusClasses : inputDefaultClasses}`}
          placeholder="Ihre Telefonnummer"
        />
      </div>

      <div>
        <label htmlFor="subject" className={`block text-sm font-medium mb-1.5 transition-colors duration-200 ${focused === "subject" ? "text-mauk-green" : "text-mauk-dark"}`}>
          Betreff *
        </label>
        <select
          id="subject"
          name="subject"
          required
          onFocus={() => setFocused("subject")}
          onBlur={() => setFocused(null)}
          className={`${inputClasses} ${focused === "subject" ? inputFocusClasses : inputDefaultClasses}`}
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
        <label htmlFor="message" className={`block text-sm font-medium mb-1.5 transition-colors duration-200 ${focused === "message" ? "text-mauk-green" : "text-mauk-dark"}`}>
          Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
          className={`${inputClasses} resize-y ${focused === "message" ? inputFocusClasses : inputDefaultClasses}`}
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
        className="inline-flex items-center gap-2 bg-mauk-green hover:bg-mauk-green/90 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_8px_25px_rgba(15,67,64,0.25)] hover:-translate-y-0.5"
      >
        <Send className="h-4 w-4" />
        Nachricht senden
      </button>
    </form>
  );
}
