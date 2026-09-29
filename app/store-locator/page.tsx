import SiteHeader from "@/app/components/site-header";
import LocationHeroSection from "@/app/components/location/location-hero-section";
import AutoGlassSpecialistSection from "@/app/components/location/auto-glass-specialist-section";
import NationwideCoverageSection from "@/app/components/location/nationwide-coverage-section";
import DontWaitCta from "@/app/components/dont-wait-cta";
import SiteFooter from "@/app/components/site-footer";

export default function StoreLocatorPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <LocationHeroSection />
        <AutoGlassSpecialistSection />
        <NationwideCoverageSection />
        <DontWaitCta />
      </main>
      <SiteFooter />
    </>
  );
}