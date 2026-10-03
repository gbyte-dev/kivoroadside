import type { Metadata } from "next";
import ServicePageShell from "@/app/components/services/service-page-shell";
import LocationHeroSection from "@/app/components/location/location-hero-section";
import AutoGlassSpecialistSection from "@/app/components/location/auto-glass-specialist-section";
import NationwideCoverageSection from "@/app/components/location/nationwide-coverage-section";

export const metadata: Metadata = {
  title: "Windshield Repair & Replacement Near You | Safelite",
  description:
    "Safelite AutoGlass is a national windshield repair and replacement service provider. Covering over 97% of the United States, find the location nearest you.",
};

export default function StoreLocatorPage() {
  return (
    <ServicePageShell secondary={null}>
      <LocationHeroSection />
      <AutoGlassSpecialistSection />
      <NationwideCoverageSection />
    </ServicePageShell>
  );
}
