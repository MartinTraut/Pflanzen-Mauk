import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description: "Allgemeine Geschäftsbedingungen der Pflanzen Mauk Gartencenter GmbH.",
  alternates: { canonical: "/agb" },
  robots: { index: false, follow: true },
};

export default function AGBPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "AGB", href: "/agb" }]} />
      <PageHeader title="Allgemeine Geschäftsbedingungen" />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 prose prose-neutral">
          <h2>§ 1 Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen
            der Pflanzen Mauk Gartencenter GmbH, Landturm 7, 74348 Lauffen
            (nachfolgend &quot;Verkäufer&quot;) und dem Kunden.
          </p>

          <p className="text-mauk-dark/60 mt-12 text-sm">
            Für die vollständigen AGB besuchen Sie bitte{" "}
            <a
              href="https://www.pflanzen-mauk.de/agb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mauk-green hover:underline"
            >
              www.pflanzen-mauk.de/agb
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
