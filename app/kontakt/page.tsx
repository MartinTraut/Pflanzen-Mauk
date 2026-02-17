import type { Metadata } from "next";
import { KontaktContent } from "./content";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Kontakt – Schreiben Sie uns",
  description:
    "Kontaktieren Sie Pflanzen Mauk: Telefon 07133 - 9503-0, E-Mail info@pflanzen-mauk.de. Kontaktformular, Standorte in Lauffen am Neckar und Ludwigsburg.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt | Pflanzen Mauk Gartencenter",
    description:
      "Kontaktieren Sie uns per Telefon, E-Mail oder Kontaktformular. Wir sind gerne für Sie da.",
  },
};

export default function KontaktPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Kontakt", href: "/kontakt" }]} />
      <KontaktContent />
    </>
  );
}
