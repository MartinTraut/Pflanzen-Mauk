"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export function PageHeader({ title, subtitle, description, image, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="relative h-64 sm:h-80 overflow-hidden">
      {/* Background */}
      {image ? (
        <>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mauk-green/60 via-mauk-green/70 to-mauk-green/80" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-mauk-green to-mauk-green/80" />
      )}

      {/* Botanical decorative SVG overlay */}
      <div className="absolute top-10 right-10 w-48 h-48 opacity-[0.05] pointer-events-none hidden sm:block">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M100 10C100 10 130 50 130 100C130 150 100 190 100 190C100 190 70 150 70 100C70 50 100 10 100 10Z" fill="white" />
          <path d="M50 60C50 60 90 70 120 100C150 130 160 170 160 170C160 170 120 160 90 130C60 100 50 60 50 60Z" fill="white" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full">
          {/* Breadcrumbs – glassmorphism style */}
          {breadcrumbs && (
            <nav className="inline-flex items-center gap-1 text-sm text-white/80 mb-4 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
              <Link href="/" className="hover:text-white transition-colors">
                Startseite
              </Link>
              {breadcrumbs.map((crumb) => (
                <span key={crumb.href} className="flex items-center gap-1">
                  <ChevronRight className="h-3.5 w-3.5 text-white/50" />
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                </span>
              ))}
            </nav>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {subtitle && (
              <span className="text-mauk-green-lighter font-medium text-sm tracking-widest uppercase">
                {subtitle}
              </span>
            )}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {title}
            </h1>
            {description && (
              <p className="text-white/80 text-base sm:text-lg mt-3 max-w-2xl">
                {description}
              </p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Softer bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#faf8f5] via-[#faf8f5]/40 to-transparent" />
    </section>
  );
}
