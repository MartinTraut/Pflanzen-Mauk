"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAVIGATION, STANDORTE, COMPANY } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Top Bar – refined gradient */}
      <div className="hidden lg:block bg-gradient-to-r from-mauk-green via-mauk-green to-[#0a3634] text-white/90 text-sm">
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${STANDORTE[0].telefon.replace(/\s|-/g, "")}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                <Phone className="h-3 w-3" />
              </div>
              {STANDORTE[0].telefon}
            </a>
            <span className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                <MapPin className="h-3 w-3" />
              </div>
              Lauffen &amp; Ludwigsburg
            </span>
            <span className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                <Clock className="h-3 w-3" />
              </div>
              Mo–Fr 9–19 Uhr
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={COMPANY.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Facebook
            </a>
            <span className="w-px h-3 bg-white/20" />
            <a
              href={COMPANY.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(15,67,64,0.08)] border-b border-mauk-green/5"
            : "bg-white"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="shrink-0 relative">
              <Image
                src="https://www.pflanzen-mauk.de/content/files/149/Gruppe-10-r1-195x60-proportionalexacttop.webp"
                alt="Pflanzen Mauk Gartencenter – Logo"
                width={160}
                height={50}
                className="h-10 sm:h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation – animated underline hover */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAVIGATION.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-3 xl:px-4 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "text-mauk-green"
                        : "text-mauk-dark hover:text-mauk-green"
                    )}
                  >
                    {item.label}
                    {/* Animated underline indicator */}
                    <span
                      className={cn(
                        "absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-mauk-green-light transition-all duration-300",
                        isActive
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-0 group-hover:opacity-100"
                      )}
                    />
                    {/* Hover underline for non-active items */}
                    {!isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-mauk-green/30 scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/kontakt"
                className="hidden sm:inline-flex items-center gap-2 bg-mauk-green-light hover:bg-mauk-green text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(113,175,63,0.4)]"
              >
                Jetzt besuchen
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg text-mauk-green hover:bg-mauk-cream transition-colors"
                aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-mauk-cream overflow-hidden bg-white"
            >
              <nav className="px-4 py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
                {NAVIGATION.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                      pathname === item.href
                        ? "bg-mauk-green text-white"
                        : "text-mauk-dark hover:bg-mauk-cream"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-mauk-cream">
                  <a
                    href={`tel:${STANDORTE[0].telefon.replace(/\s|-/g, "")}`}
                    className="flex items-center gap-2 px-4 py-3 text-mauk-green font-medium"
                  >
                    <Phone className="h-5 w-5" />
                    {STANDORTE[0].telefon}
                  </a>
                  <Link
                    href="/kontakt"
                    className="block mt-2 text-center bg-mauk-green-light text-white px-5 py-3 rounded-full font-semibold"
                  >
                    Jetzt besuchen
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
