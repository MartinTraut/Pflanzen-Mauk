import type { Metadata } from "next";
import { SortimentContent } from "./content";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Sortiment – Pflanzen, Gartenmöbel, Deko & mehr",
  description:
    "Entdecken Sie unser riesiges Sortiment: Pflanzen, Stauden, Gartenmöbel, Dekoration, Floristik, Grillgeräte und vieles mehr. Über 19 Abteilungen in Lauffen und Ludwigsburg.",
  alternates: { canonical: "/sortiment" },
  openGraph: {
    title: "Sortiment | Pflanzen Mauk Gartencenter",
    description:
      "Über 19 Abteilungen – von Pflanzen und Gartenmöbeln bis Deko und Floristik. Entdecken Sie unser vielfältiges Angebot.",
  },
};

export default function SortimentPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Sortiment", href: "/sortiment" }]}
      />
      <SortimentContent />
    </>
  );
}
