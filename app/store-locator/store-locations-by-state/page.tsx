import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import WideContent from "@/app/components/services/wide-content";
import LocationSearchForm from "@/app/components/location/location-search-form";
import StateAccordion from "./state-accordion";

export const metadata: Metadata = {
  title: "Safelite Shop Near You | Our Auto Glass Locations | Safelite",
  description:
    "At Safelite, we have auto glass shops and technicians near you. Visit our store locations page and find the closest Safelite. Make an appointment today.",
};

// Title and back link in the left half from 768px; the right half stays empty
function StatesHero() {
  return (
    // .hero-wrapper.hero-half-image
    <div className="mb-[30px] md:mb-0 md:flex md:items-stretch md:justify-around">
      {/* .hero-content (a site-wide rule gives it 1rem padding) */}
      <div className="p-4 md:relative md:w-1/2 md:flex-none md:overflow-hidden">
        <div className="mx-auto max-w-[510px] px-[15px] pb-5 pt-10 md:float-right md:clear-both md:w-full md:max-w-[480px] md:px-0">
          <h1>Safelite locations by state</h1>
          <p>
            <Link href="/store-locator">Back to locations</Link>
          </p>
        </div>
      </div>
      {/* .hero-image-wrapper */}
      <div className="md:relative md:w-1/2 md:flex-none md:overflow-hidden md:px-[15px]" />
    </div>
  );
}

// Gray "Didn't find what you're looking for?" box with the location search
function SearchAgain() {
  return (
    <div className="mb-[-20px] mt-[10px] flex flex-col justify-center bg-[#f4f4f4] pb-10 pt-12 md:items-center md:gap-4 md:whitespace-nowrap">
      <h4 className="pb-5! text-center md:pb-[2px]! md:text-left">Didn&apos;t find what you&apos;re looking for?</h4>
      <div className="mx-auto w-full max-w-[510px] px-[15px] pb-6 md:m-0 md:flex md:max-w-none md:flex-col md:items-center md:justify-center">
        {/* A stray invisible character on the reference adds one 25px line here */}
        <span aria-hidden="true" className="block h-[25px]" />
        <div className="w-full md:max-w-[480px]">
          <LocationSearchForm variant="search-again" />
        </div>
      </div>
    </div>
  );
}

export default function StoreLocationsByStatePage() {
  return (
    <ServicePageShell secondary={null}>
      <StatesHero />
      <WideContent>
        <div>
          <p>
            Find a nearby Safelite store for trusted windshield and auto glass repair or replacement services in the
            United States. Expert technicians can service windshields, side mirrors, back glass, or sunroofs. Many
            locations also offer mobile windshield replacement services, so you can stay home while a technician fixes
            your auto glass. Below are Safelite locations in all 50 states to help you locate a store nearest to you.
          </p>
          <p>&nbsp;</p>
        </div>
      </WideContent>
      <StateAccordion />
      <SearchAgain />
    </ServicePageShell>
  );
}
