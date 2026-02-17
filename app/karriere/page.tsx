import type { Metadata } from "next";
import { KarriereContent } from "./content";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Karriere – Stellenangebote & Ausbildung bei Pflanzen Mauk",
  description:
    "Karriere bei Pflanzen Mauk: Aktuelle Stellenangebote, Ausbildungsberufe und Praktika in Lauffen am Neckar und Ludwigsburg. Werde Teil unserer Gartengang!",
  alternates: { canonical: "/karriere" },
  openGraph: {
    title: "Karriere | Pflanzen Mauk Gartencenter",
    description:
      "Stellenangebote, Ausbildung und Praktika – werde Teil der Pflanzen Mauk Familie!",
  },
};

export default function KarrierePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Karriere", href: "/karriere" }]} />
      <KarriereContent />
    </>
  );
}
