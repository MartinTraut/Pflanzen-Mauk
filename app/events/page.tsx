import type { Metadata } from "next";
import { EventsContent } from "./content";
import { EventsJsonLd, BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Events & Workshops – Kreative Erlebnisse im Gartencenter",
  description:
    "Workshops, Aktionen und Events bei Pflanzen Mauk in Lauffen: Floristik-Workshops, Terrarium, Saisonale Aktionswochen, Maukibär-Events und vieles mehr.",
  alternates: { canonical: "/events" },
  openGraph: {
    title: "Events & Workshops | Pflanzen Mauk Gartencenter",
    description:
      "Kreative Workshops, saisonale Aktionen und unvergessliche Events. Entdecken Sie unser vielfältiges Programm.",
  },
};

export default function EventsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Events & Workshops", href: "/events" }]} />
      <EventsJsonLd />
      <EventsContent />
    </>
  );
}
