import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Pflanzen Mauk Gartencenter GmbH – Angaben gemäß § 5 TMG.",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Impressum", href: "/impressum" }]} />
      <PageHeader title="Impressum" />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 prose prose-neutral">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Pflanzen Mauk Gartencenter GmbH
            <br />
            Landturm 7
            <br />
            74348 Lauffen
          </p>

          <h3>Vertreten durch</h3>
          <p>
            Geschäftsführer: Birgit Mayer, Alexander Mayer, Jessica Mayer
          </p>

          <h3>Kontakt</h3>
          <p>
            Telefon: 07133 - 9503-0
            <br />
            Fax: 07133 - 9503-555
            <br />
            E-Mail: info@pflanzen-mauk.de
          </p>

          <h3>Handelsregister</h3>
          <p>
            Registergericht: Amtsgericht Stuttgart
            <br />
            Registernummer: HRB 101391
          </p>

          <h3>Umsatzsteuer-ID</h3>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE-208055060
          </p>

          <h3>Streitschlichtung</h3>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            . Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>
      </section>
    </>
  );
}
