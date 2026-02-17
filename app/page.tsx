import { HeroSection } from "@/components/hero-section";
import { TrustSection } from "@/components/trust-section";
import { SeasonHighlights } from "@/components/season-highlights";
import { SortimentTeaser } from "@/components/sortiment-teaser";
import { EventsTeaser } from "@/components/events-teaser";
import { GastroTeaser } from "@/components/gastro-teaser";
import { LocationsSection } from "@/components/locations-section";
import { CTASection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <SeasonHighlights />
      <SortimentTeaser />
      <EventsTeaser />
      <GastroTeaser />
      <CTASection />
      <LocationsSection />
    </>
  );
}
