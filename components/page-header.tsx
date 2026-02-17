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
          <div className="absolute inset-0 bg-mauk-green/70" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-mauk-green to-mauk-green/80" />
      )}

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full">
          {/* Breadcrumbs */}
          {breadcrumbs && (
            <nav className="flex items-center gap-1 text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                Startseite
              </Link>
              {breadcrumbs.map((crumb) => (
                <span key={crumb.href} className="flex items-center gap-1">
                  <ChevronRight className="h-3.5 w-3.5" />
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

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#faf8f5] to-transparent" />
    </section>
  );
}
