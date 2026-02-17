import type { Metadata } from "next";
import { StandorteContent } from "./content";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Standorte – Lauffen am Neckar & Ludwigsburg-Eglosheim",
  description:
    "Besuchen Sie Pflanzen Mauk an unseren Standorten in Lauffen am Neckar (Landturm 7) und Ludwigsburg-Eglosheim (Markgröninger Str. 136). Öffnungszeiten, Anfahrt und Kontakt.",
  alternates: { canonical: "/standorte" },
  openGraph: {
    title: "Standorte & Öffnungszeiten | Pflanzen Mauk Gartencenter",
    description:
      "Zwei Standorte – Lauffen am Neckar und Ludwigsburg. Alle Infos zu Öffnungszeiten, Anfahrt und Kontakt.",
  },
};

export default function StandortePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Standorte", href: "/standorte" }]} />
      <StandorteContent />
    </>
  );
}
