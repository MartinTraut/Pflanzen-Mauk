// ============================================================
// Pflanzen Mauk – Zentrale Datenverwaltung
// Alle Standorte, Events, Sortiment, Services etc.
// ============================================================

export const COMPANY = {
  name: "Pflanzen Mauk Gartencenter GmbH",
  shortName: "Pflanzen Mauk",
  slogan: "Hier wächst das Glück",
  claim: "Deutschlands größtes Erlebnisgartencenter",
  founded: 1855,
  handelsregister: "HRB 101391",
  ustIdNr: "DE-208055060",
  geschaeftsfuehrer: ["Birgit Mayer", "Alexander Mayer", "Jessica Mayer"],
  social: {
    facebook: "https://www.facebook.com/PflanzenMauk/",
    instagram: "https://www.instagram.com/pflanzen_mauk/",
  },
  website: "https://www.pflanzen-mauk.de",
} as const;

export interface Standort {
  id: string;
  name: string;
  stadt: string;
  adresse: string;
  plz: string;
  ort: string;
  telefon: string;
  fax?: string;
  email: string;
  oeffnungszeiten: {
    label: string;
    zeit: string;
    hinweis?: string;
  }[];
  mapQuery: string;
  features: string[];
}

export const STANDORTE: Standort[] = [
  {
    id: "lauffen",
    name: "Pflanzen Mauk Lauffen",
    stadt: "Lauffen am Neckar",
    adresse: "Landturm 7",
    plz: "74348",
    ort: "Lauffen",
    telefon: "07133 - 9503-0",
    fax: "07133 - 9503-555",
    email: "info@pflanzen-mauk.de",
    oeffnungszeiten: [
      { label: "Montag – Freitag", zeit: "09:00 – 19:00 Uhr" },
      { label: "Samstag", zeit: "09:00 – 18:00 Uhr" },
      { label: "Sonntag", zeit: "11:00 – 18:00 Uhr", hinweis: "Eingeschränkter Service" },
    ],
    mapQuery: "Pflanzen+Mauk+Landturm+7+74348+Lauffen",
    features: [
      "Hauptstandort & Firmensitz",
      "Restaurant Café Sagenhaft",
      "Erlebnispark mit See",
      "Seegrill / Biergarten",
      "Maukibär jeden Samstag",
      "Über 19 Abteilungen",
    ],
  },
  {
    id: "ludwigsburg",
    name: "Pflanzen Mauk Ludwigsburg",
    stadt: "Ludwigsburg-Eglosheim",
    adresse: "Markgröninger Straße 136",
    plz: "71634",
    ort: "Ludwigsburg",
    telefon: "07141 - 918240",
    fax: "07141 - 220084",
    email: "info.lb@pflanzen-mauk.de",
    oeffnungszeiten: [
      { label: "Montag – Freitag", zeit: "09:00 – 19:00 Uhr" },
      { label: "Samstag", zeit: "09:00 – 18:00 Uhr" },
      { label: "Sonntag", zeit: "10:00 – 12:00 Uhr", hinweis: "Eingeschränkter Service" },
    ],
    mapQuery: "Pflanzen+Mauk+Markgröninger+Straße+136+71634+Ludwigsburg",
    features: [
      "Zweiter Standort seit 2010",
      "Umfangreiches Sortiment",
      "Fachberatung",
      "Große Pflanzenabteilung",
    ],
  },
];

export const GASTRONOMIE = {
  restaurant: {
    name: "Restaurant Café Sagenhaft",
    standort: "Lauffen",
    sitzplaetze: 250,
    beschreibung:
      "Exquisite Gerichte, die von lokalen Spezialitäten bis hin zu anderen Köstlichkeiten reichen. Genießen Sie Frühstück, Mittagessen oder Kaffee & Kuchen in unserem wunderschönen Ambiente.",
    features: [
      "Frühstück",
      "Mittagessen",
      "Kaffee & Kuchen",
      "Indoor-Spielplatz für Kinder",
      "250 Sitzplätze",
    ],
    oeffnungszeiten: [
      { label: "Montag – Freitag", zeit: "09:00 – 17:00 Uhr" },
      { label: "Samstag", zeit: "09:00 – 17:00 Uhr" },
      { label: "Sonntag", zeit: "11:00 – 17:00 Uhr" },
    ],
  },
  seegrill: {
    name: "Seegrill – Biergarten am See",
    standort: "Lauffen (Erlebnispark)",
    beschreibung:
      "Unser Outdoor-Biergarten mit Blick auf den malerischen See. Genießen Sie ein charmantes Ambiente bei Grillspezialitäten und kühlen Getränken.",
    saison: "Frühling & Sommer, nur an Wochenenden",
  },
};

export interface SortimentKategorie {
  id: string;
  name: string;
  beschreibung: string;
  icon: string;
  image: string;
}

export const SORTIMENT: SortimentKategorie[] = [
  {
    id: "beet-balkon",
    name: "Beet- & Balkonpflanzen",
    beschreibung: "Farbenfrohe Blütenpracht für Garten, Balkon und Terrasse – von Geranien bis Petunien.",
    icon: "🌸",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  },
  {
    id: "stauden-gehoelze",
    name: "Stauden & Gehölze",
    beschreibung: "Winterharte Stauden, blühende Sträucher und prächtige Bäume für Ihren Traumgarten.",
    icon: "🌳",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
  },
  {
    id: "zimmerpflanzen",
    name: "Zimmerpflanzen",
    beschreibung: "Grüne Oasen für Ihr Zuhause – von tropischen Schönheiten bis pflegeleichten Klassikern.",
    icon: "🪴",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80",
  },
  {
    id: "kraeuter-gemuese",
    name: "Kräuter & Gemüse",
    beschreibung: "Frische Kräuter und knackiges Gemüse – vom Basilikum bis zur Tomate, alles für den eigenen Anbau.",
    icon: "🌿",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
  },
  {
    id: "gartenmoebel",
    name: "Gartenmöbel",
    beschreibung: "Hochwertige Gartenmöbel für entspannte Stunden im Freien – von Loungemöbeln bis Dining-Sets.",
    icon: "🪑",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
  },
  {
    id: "dekoration",
    name: "Dekoration",
    beschreibung: "Inspirierende Dekorationen für Haus und Garten – saisonal wechselnd und immer im Trend.",
    icon: "✨",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
  },
  {
    id: "schnittblumen",
    name: "Schnittblumen & Floristik",
    beschreibung: "Frische Schnittblumen, kunstvolle Sträuße und professionelle Floristik für jeden Anlass.",
    icon: "💐",
    image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80",
  },
  {
    id: "grill",
    name: "Grillgeräte & Zubehör",
    beschreibung: "Alles rund ums Grillen – von Gasgrills über Holzkohle bis zum perfekten Zubehör.",
    icon: "🔥",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
  },
  {
    id: "zoo-aquaristik",
    name: "Zoo & Aquaristik",
    beschreibung: "Alles für Ihre Haustiere – Futter, Zubehör und Aquaristik-Bedarf.",
    icon: "🐾",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=800&q=80",
  },
  {
    id: "gartengeraete",
    name: "Gartengeräte & Zubehör",
    beschreibung: "Professionelle Gartengeräte und Zubehör für jede Gartenarbeit.",
    icon: "🔧",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  },
  {
    id: "erde-duenger",
    name: "Erde, Dünger & Pflanzenschutz",
    beschreibung: "Die richtige Grundlage für gesundes Pflanzenwachstum.",
    icon: "🌱",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80",
  },
  {
    id: "geschenke",
    name: "Geschenkewelt & Papeterie",
    beschreibung: "Geschenkideen, edle Papeterie und besondere Mitbringsel für jeden Anlass.",
    icon: "🎁",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238f7e7?w=800&q=80",
  },
];

export interface Event {
  id: string;
  datum: string;
  datumDisplay: string;
  titel: string;
  beschreibung: string;
  preis?: string;
  ort: string;
  kategorie: "workshop" | "event" | "aktion";
}

export const EVENTS: Event[] = [
  {
    id: "stitchs-mini-gartenwelt",
    datum: "2026-02-21",
    datumDisplay: "21. Februar 2026",
    titel: "Workshop: Stitchs Mini-Gartenwelt",
    beschreibung: "Gestalten Sie Ihre eigene Mini-Gartenwelt in diesem kreativen Workshop.",
    preis: "39,99 €",
    ort: "Lauffen",
    kategorie: "workshop",
  },
  {
    id: "fruehlingsboten-im-glas",
    datum: "2026-02-27",
    datumDisplay: "27. Februar 2026",
    titel: "Workshop: Frühlingsboten im Glas",
    beschreibung: "Kreieren Sie wunderschöne Frühlingskompositionen im Glas.",
    preis: "69,99 €",
    ort: "Lauffen",
    kategorie: "workshop",
  },
  {
    id: "hello-spring",
    datum: "2026-02-28",
    datumDisplay: "28. Februar 2026",
    titel: "Workshop: Hello Spring – Frühlingsblumenstrauß",
    beschreibung: "Binden Sie Ihren eigenen Frühlingsblumenstrauß unter professioneller Anleitung.",
    preis: "49,99 €",
    ort: "Lauffen",
    kategorie: "workshop",
  },
  {
    id: "zitruswoche",
    datum: "2026-03-04",
    datumDisplay: "04. – 15. März 2026",
    titel: "Zitruswoche",
    beschreibung: "Zwei Wochen im Zeichen der Zitrusfrüchte – Sorten, Pflege und vieles mehr.",
    ort: "Lauffen",
    kategorie: "aktion",
  },
  {
    id: "immunisierende-kraeuter",
    datum: "2026-03-07",
    datumDisplay: "7. März 2026",
    titel: "Workshop: Immunisierende Kräuter",
    beschreibung: "Entdecken Sie die Kraft der Kräuter für Ihr Immunsystem.",
    preis: "44,99 €",
    ort: "Lauffen",
    kategorie: "workshop",
  },
  {
    id: "ladies-night",
    datum: "2026-03-14",
    datumDisplay: "14. März 2026",
    titel: "Ladies Night",
    beschreibung: "Ein exklusiver Abend nur für Damen – mit besonderen Angeboten und Überraschungen.",
    preis: "Anmeldung erforderlich",
    ort: "Lauffen",
    kategorie: "event",
  },
  {
    id: "kraeuterwoche",
    datum: "2026-03-18",
    datumDisplay: "18. – 29. März 2026",
    titel: "Kräuterwoche",
    beschreibung: "Alles rund um Kräuter – Sorten, Anbau, Pflege und kulinarische Verwendung.",
    ort: "Lauffen",
    kategorie: "aktion",
  },
  {
    id: "terrarium-maerz",
    datum: "2026-03-28",
    datumDisplay: "28. März 2026",
    titel: "Workshop: Terrarium bepflanzen",
    beschreibung: "Gestalten Sie Ihr eigenes grünes Terrarium unter fachkundiger Anleitung.",
    preis: "49,99 €",
    ort: "Lauffen",
    kategorie: "workshop",
  },
  {
    id: "maukibaer-ostern",
    datum: "2026-04-04",
    datumDisplay: "4. April 2026",
    titel: "Maukibär verteilt Ostergeschenke",
    beschreibung: "Unser beliebter Maukibär überrascht die kleinen Besucher mit Ostergeschenken.",
    preis: "Kostenlos",
    ort: "Lauffen",
    kategorie: "event",
  },
  {
    id: "terrarium-april",
    datum: "2026-04-25",
    datumDisplay: "25. April 2026",
    titel: "Workshop: Terrarium bepflanzen",
    beschreibung: "Gestalten Sie Ihr eigenes grünes Terrarium unter fachkundiger Anleitung.",
    preis: "49,99 €",
    ort: "Lauffen",
    kategorie: "workshop",
  },
];

export const GRUPPEN_WORKSHOPS = [
  {
    name: "Kindergeburtstag",
    beschreibung: "Ein unvergesslicher Geburtstag inmitten von Pflanzen und Kreativität.",
  },
  {
    name: "Workshop Flower Crown",
    beschreibung: "Flechten Sie wunderschöne Blumenkränze.",
  },
  {
    name: "Workshop Blumenringe",
    beschreibung: "Gestalten Sie florale Ringe als besonderen Schmuck.",
  },
  {
    name: "Workshop Blumenarmband",
    beschreibung: "Kreieren Sie ein florales Armband.",
  },
  {
    name: "Workshop Terrarium",
    beschreibung: "Bepflanzen Sie Ihr eigenes Terrarium.",
  },
  {
    name: "Workshop Makramee Ampel",
    beschreibung: "Knüpfen Sie eine Makramee-Blumenampel.",
  },
];

export const SERVICES = [
  {
    id: "pflanzendoktor",
    name: "Pflanzendoktor",
    beschreibung:
      "Unsere Experten helfen bei Pflanzenproblemen aller Art – von Schädlingsbefall bis Pflegetipps.",
    icon: "stethoscope",
  },
  {
    id: "gala-bau",
    name: "Garten- & Landschaftsbau",
    beschreibung:
      "Professionelle Gartengestaltung und Landschaftsbau – von der Planung bis zur Umsetzung.",
    icon: "trees",
  },
  {
    id: "beratung",
    name: "Fachberatung",
    beschreibung:
      "Kompetente Beratung durch unsere geschulten Mitarbeiter zu allen Fragen rund um Garten und Pflanzen.",
    icon: "message-circle",
  },
  {
    id: "workshops",
    name: "Workshops & Events",
    beschreibung:
      "Kreative Workshops, saisonale Events und individuelle Gruppen-Angebote für Groß und Klein.",
    icon: "calendar",
  },
  {
    id: "erlebnispark",
    name: "Erlebnispark",
    beschreibung:
      "Unser Erlebnispark mit See und Spielplätzen bietet Spaß für die ganze Familie.",
    icon: "ferris-wheel",
  },
  {
    id: "online-shop",
    name: "Online-Shop",
    beschreibung:
      "Tierbedarf, Geschenke, Deko und Gutscheine bequem von zu Hause bestellen.",
    icon: "shopping-bag",
  },
  {
    id: "family-app",
    name: "Mauk Family App",
    beschreibung:
      "Kostenlose Treue-App mit 15% Willkommensrabatt, exklusiven Coupons und Geburtstagsüberraschung.",
    icon: "smartphone",
  },
  {
    id: "too-good-to-go",
    name: "Too Good To Go",
    beschreibung:
      "Nachhaltigkeit neu denken – Überraschungstüten mit Pflanzen zu reduzierten Preisen.",
    icon: "leaf",
  },
];

export interface HistorieMeilenstein {
  jahr: number;
  text: string;
}

export const HISTORIE: HistorieMeilenstein[] = [
  {
    jahr: 1855,
    text: "Karl Gottlieb Mauk gründet einen Gemüseanbaubetrieb in Lauffen am Neckar. Seine fünf Söhne werden alle Gärtner.",
  },
  {
    jahr: 1874,
    text: 'Adolf Wilhelm Mauk führt Obstanbau ein. Seine "Lauffener Gelbe" Stachelbeere gewinnt regionale Auszeichnungen.',
  },
  {
    jahr: 1906,
    text: 'Adolf Mauk verlegt den Betrieb ins Gebiet "Landturm" – dem heutigen Standort.',
  },
  {
    jahr: 1970,
    text: "Ursula Gaurieder und Wolfram übernehmen und entwickeln den Betrieb zum Gartencenter mit Ziergehölzen, Stauden und GaLa-Bau.",
  },
  {
    jahr: 1999,
    text: "Großerweiterung: 6.500 m\u00B2 neue Gewächshäuser, Restaurant Sagenhaft mit 250 Plätzen. Pflanzen Mauk wird Deutschlands größtes Erlebnisgartencenter.",
  },
  {
    jahr: 2001,
    text: 'Einführung des beliebten Maskottchens "Maukibär".',
  },
  {
    jahr: 2002,
    text: "Eröffnung des Erlebnisparks mit Ziersee und Kinderspielplätzen.",
  },
  {
    jahr: 2009,
    text: "5. Generation: Birgit & Alexander Mayer übernehmen die Führung des Familienunternehmens.",
  },
  {
    jahr: 2010,
    text: "Eröffnung des zweiten Standorts in Ludwigsburg-Eglosheim.",
  },
  {
    jahr: 2018,
    text: "6. Generation: Jessica, Clarissa und Franziska Mayer steigen in die Führung ein.",
  },
  {
    jahr: 2024,
    text: "Komplettmodernisierung: Neuer Eingang mit Digital Signage, modernisierte Gewächshäuser, neues Corporate Design.",
  },
];

export const NAVIGATION = [
  { label: "Startseite", href: "/" },
  { label: "Sortiment", href: "/sortiment" },
  { label: "Events", href: "/events" },
  { label: "Service", href: "/service" },
  { label: "Gastronomie", href: "/gastronomie" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Standorte", href: "/standorte" },
  { label: "Kontakt", href: "/kontakt" },
] as const;
