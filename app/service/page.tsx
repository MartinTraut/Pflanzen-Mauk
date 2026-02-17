import type { Metadata } from "next";
import { ServiceContent } from "./content";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Service – Beratung, Gartenplanung, Lieferservice & mehr",
  description:
    "Professionelle Services bei Pflanzen Mauk: Pflanzendoktor, Garten- & Landschaftsbau, Fachberatung, Workshops, Erlebnispark, Online-Shop und Mauk Family App.",
  alternates: { canonical: "/service" },
  openGraph: {
    title: "Service | Pflanzen Mauk Gartencenter",
    description:
      "Vom Pflanzendoktor über Gartenplanung bis zur Mauk Family App – entdecken Sie unsere Services.",
  },
};

export default function ServicePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Service", href: "/service" }]} />
      <ServiceContent />
    </>
  );
}
