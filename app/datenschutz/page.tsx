import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Pflanzen Mauk Gartencenter GmbH.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Datenschutz", href: "/datenschutz" }]} />
      <PageHeader title="Datenschutzerklärung" />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 prose prose-neutral">
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>

          <h3>Datenerfassung auf dieser Website</h3>
          <p>
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
            <br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber: Pflanzen Mauk Gartencenter GmbH, Landturm 7, 74348
            Lauffen, Telefon: 07133 - 9503-0, E-Mail: info@pflanzen-mauk.de.
          </p>

          <h2>2. Hosting</h2>
          <p>
            Wir hosten die Inhalte unserer Website bei einem externen Dienstleister
            (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst
            werden, werden auf den Servern des Hosters gespeichert.
          </p>

          <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3>Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
            sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
            entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
            Datenschutzerklärung.
          </p>

          <p className="text-mauk-dark/60 mt-12 text-sm">
            Für die vollständige Datenschutzerklärung besuchen Sie bitte{" "}
            <a
              href="https://www.pflanzen-mauk.de/datenschutz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mauk-green hover:underline"
            >
              www.pflanzen-mauk.de/datenschutz
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
