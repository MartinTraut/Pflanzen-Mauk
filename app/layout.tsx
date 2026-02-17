import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { OrganizationJsonLd } from "@/components/json-ld";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pflanzen-mauk.de"),
  title: {
    default: "Pflanzen Mauk – Deutschlands größtes Erlebnisgartencenter | Lauffen & Ludwigsburg",
    template: "%s | Pflanzen Mauk Gartencenter",
  },
  description:
    "Pflanzen Mauk – Deutschlands größtes Erlebnisgartencenter seit 1855. Riesige Pflanzenauswahl, Gartenmöbel, Deko, Events, Gastronomie & mehr. Standorte in Lauffen am Neckar und Ludwigsburg.",
  keywords: [
    "Gartencenter Lauffen",
    "Gartencenter Ludwigsburg",
    "Pflanzen kaufen",
    "Gartenmarkt",
    "Erlebnisgartencenter",
    "Gartenmöbel",
    "Blumen",
    "Pflanzen Mauk",
    "Gartencenter Heilbronn",
    "Gartencenter Stuttgart",
    "Pflanzen kaufen Lauffen",
    "Gartenmarkt Ludwigsburg",
    "Blumen kaufen Heilbronn Region",
  ],
  authors: [{ name: "Pflanzen Mauk Gartencenter GmbH" }],
  creator: "Pflanzen Mauk Gartencenter GmbH",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.pflanzen-mauk.de",
    siteName: "Pflanzen Mauk",
    title: "Pflanzen Mauk – Deutschlands größtes Erlebnisgartencenter",
    description:
      "Seit 1855 familiengeführt. Riesige Pflanzenauswahl, Gartenmöbel, Deko, Events, Gastronomie & mehr in Lauffen und Ludwigsburg.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pflanzen Mauk – Deutschlands größtes Erlebnisgartencenter",
    description:
      "Seit 1855 familiengeführt. Riesige Pflanzenauswahl, Events & Gastronomie in Lauffen und Ludwigsburg.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.pflanzen-mauk.de",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <OrganizationJsonLd />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
