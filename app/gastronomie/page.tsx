import type { Metadata } from "next";
import { GastronomieContent } from "./content";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Gastronomie – Restaurant Sagenhaft & Seegrill Biergarten",
  description:
    "Restaurant Café Sagenhaft mit 250 Sitzplätzen und Seegrill Biergarten am See. Frühstück, Mittagessen, Kaffee & Kuchen und Grillspezialitäten bei Pflanzen Mauk Lauffen.",
  alternates: { canonical: "/gastronomie" },
  openGraph: {
    title: "Gastronomie | Pflanzen Mauk Gartencenter",
    description:
      "Restaurant Café Sagenhaft und Seegrill Biergarten – Genuss inmitten unserer grünen Oase.",
  },
};

export default function GastronomiePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Gastronomie", href: "/gastronomie" }]} />
      <GastronomieContent />
    </>
  );
}
