import { COMPANY, STANDORTE, EVENTS } from "@/lib/data";

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["GardenStore", "LocalBusiness"],
    name: COMPANY.name,
    alternateName: COMPANY.shortName,
    url: COMPANY.website,
    description: `${COMPANY.claim} – ${COMPANY.slogan}. Familiengeführt seit ${COMPANY.founded}.`,
    foundingDate: String(COMPANY.founded),
    sameAs: [COMPANY.social.facebook, COMPANY.social.instagram],
    address: STANDORTE.map((s) => ({
      "@type": "PostalAddress",
      streetAddress: s.adresse,
      addressLocality: s.ort,
      postalCode: s.plz,
      addressCountry: "DE",
    })),
    telephone: STANDORTE[0].telefon,
    email: STANDORTE[0].email,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "11:00",
        closes: "18:00",
      },
    ],
    priceRange: "€€",
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 50 },
    areaServed: [
      { "@type": "City", name: "Lauffen am Neckar" },
      { "@type": "City", name: "Ludwigsburg" },
      { "@type": "City", name: "Heilbronn" },
      { "@type": "City", name: "Stuttgart" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function EventsJsonLd() {
  const jsonLd = EVENTS.map((event) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.titel,
    description: event.beschreibung,
    startDate: event.datum,
    location: {
      "@type": "Place",
      name: `Pflanzen Mauk ${event.ort}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: event.ort,
        addressCountry: "DE",
      },
    },
    organizer: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.website,
    },
    ...(event.preis && event.preis !== "Kostenlos" && event.preis !== "Anmeldung erforderlich"
      ? {
          offers: {
            "@type": "Offer",
            price: event.preis.replace(/[^0-9,]/g, "").replace(",", "."),
            priceCurrency: "EUR",
          },
        }
      : event.preis === "Kostenlos"
        ? { isAccessibleForFree: true }
        : {}),
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; href: string }[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${COMPANY.website}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
