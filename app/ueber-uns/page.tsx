import type { Metadata } from "next";
import { UeberUnsContent } from "./content";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Über uns – Familie, Geschichte & Philosophie seit 1855",
  description:
    "Die Geschichte der Familie Mauk: Seit 1855 familiengeführt, mittlerweile in 6. Generation. Erfahren Sie mehr über unsere Philosophie, Tradition und regionale Verankerung.",
  alternates: { canonical: "/ueber-uns" },
  openGraph: {
    title: "Über uns | Pflanzen Mauk Gartencenter",
    description:
      "Seit 1855 familiengeführt in 6. Generation – Erfahren Sie mehr über die Geschichte von Pflanzen Mauk.",
  },
};

export default function UeberUnsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Über uns", href: "/ueber-uns" }]} />
      <UeberUnsContent />
    </>
  );
}
