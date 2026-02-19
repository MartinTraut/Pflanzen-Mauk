import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, ChevronRight } from "lucide-react";
import { COMPANY, STANDORTE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-mauk-green text-white relative footer-wave">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="https://www.pflanzen-mauk.de/content/files/149/Gruppe-10-r1-195x60-proportionalexacttop.webp"
                alt="Pflanzen Mauk Gartencenter – Logo"
                width={160}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              {COMPANY.claim} – seit {COMPANY.founded}. Familiengeführt in
              mittlerweile 6. Generation.
            </p>
            {/* Social Media Icons – colored hover states */}
            <div className="flex gap-3">
              <a
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1877F2] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Standorte */}
          {STANDORTE.map((standort) => (
            <div key={standort.id}>
              <h4 className="font-semibold text-lg mb-4">{standort.stadt}</h4>
              <div className="space-y-3 text-sm text-white/80">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-mauk-green-light" />
                  <span>
                    {standort.adresse}
                    <br />
                    {standort.plz} {standort.ort}
                  </span>
                </div>
                <a
                  href={`tel:${standort.telefon.replace(/\s|-/g, "")}`}
                  className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <Phone className="h-4 w-4 shrink-0 text-mauk-green-light" />
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">{standort.telefon}</span>
                </a>
                <a
                  href={`mailto:${standort.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <Mail className="h-4 w-4 shrink-0 text-mauk-green-light" />
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">{standort.email}</span>
                </a>
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-0.5 shrink-0 text-mauk-green-light" />
                  <div>
                    {standort.oeffnungszeiten.map((oz, i) => (
                      <div key={i}>
                        {oz.label}: {oz.zeit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Quick Links – with arrow icons */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Schnellzugriff</h4>
            <nav className="space-y-2 text-sm">
              {[
                { label: "Sortiment", href: "/sortiment" },
                { label: "Events & Workshops", href: "/events" },
                { label: "Gastronomie", href: "/gastronomie" },
                { label: "Service", href: "/service" },
                { label: "Über uns", href: "/ueber-uns" },
                { label: "Karriere", href: "/karriere" },
                { label: "Online-Shop", href: "https://www.pflanzen-mauk.de/online-shop" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1.5 text-white/80 hover:text-white transition-all duration-200 group"
                >
                  <ChevronRight className="h-3 w-3 text-mauk-green-light opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. Alle Rechte
            vorbehalten.
          </p>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="/impressum" className="hover:text-white transition-colors duration-200">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors duration-200">
              Datenschutz
            </Link>
            <Link href="/agb" className="hover:text-white transition-colors duration-200">
              AGB
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
