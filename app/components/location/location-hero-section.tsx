"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";

// The search field is set in Roboto, as on the reference
const roboto = Roboto({ subsets: ["latin"], weight: "400", display: "swap" });

// The reference uses Google Maps' geocoder (with its own API key) to turn
// coordinates into a ZIP. This uses OpenStreetMap's free reverse geocoder instead.
async function reverseGeocodeZip(latitude: number, longitude: number) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&addressdetails=1&lat=${latitude}&lon=${longitude}`;
  const response = await fetch(url, { headers: { Accept: "application/json" } });
  if (!response.ok) return null;
  const data: { address?: { postcode?: string } } = await response.json();
  const match = data.address?.postcode?.match(/\d{5}/);
  return match ? match[0] : null;
}

// Hollow and filled "location arrow" icons, copied from the reference markup
const ARROW_HOLLOW =
  "M11.3.62c-.59-.58-1.43-.78-2.2-.5L1.44 2.76A2.11 2.11 0 0 0 0 4.72c-.03.89.5 1.69 1.33 2.03l2.64 1.07c.06.03.11.06.14.13l1.13 2.74c.33.8 1.09 1.32 1.97 1.32h.08c.89-.04 1.66-.6 1.95-1.46l2.59-7.73c.26-.78.06-1.62-.51-2.18Zm-1.27 1.6L7.44 9.94c-.04.11-.11.18-.24.18-.09.04-.19-.05-.24-.15L5.83 7.23c-.21-.53-.64-.95-1.17-1.16L2.02 5q-.15-.075-.15-.24c0-.165.06-.2.16-.24l7.66-2.64s.06-.01.09-.01c.08 0 .14.04.18.08.05.05.1.14.06.26Z";
const ARROW_FULL =
  "M11.3.63c-.59-.58-1.43-.78-2.2-.5L1.44 2.76C.59 3.05.02 3.82 0 4.72c-.03.89.5 1.7 1.33 2.04l2.63 1.06c.07.03.12.07.14.13l1.13 2.74c.33.8 1.09 1.31 1.97 1.31h.08c.89-.03 1.66-.6 1.95-1.45l2.58-7.74c.27-.77.06-1.62-.51-2.18";

// "Safelite locations near you": title, location search and a photo on the right (from 768px)
export default function LocationHeroSection() {
  const router = useRouter();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [query, setQuery] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [hasFocusWithin, setHasFocusWithin] = useState(false);
  const [isTooltipDismissed, setIsTooltipDismissed] = useState(false);
  const [isLocationGranted, setIsLocationGranted] = useState(false);

  const isLabelRaised = isInputFocused || query !== "";

  function handleLocate() {
    setIsTooltipDismissed(true);
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        setIsLocationGranted(true);
        try {
          const zip = await reverseGeocodeZip(position.coords.latitude, position.coords.longitude);
          if (zip) setQuery(zip);
        } catch {
          // Lookup failed; the visitor can still type a location.
        }
      },
      () => setIsLocationGranted(false),
    );
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const location = query.trim();
    if (location) router.push(`/store-locator/search?q=${encodeURIComponent(location)}`);
  }

  return (
    // .hero-wrapper.hero-half-image
    <div className="mb-[30px] tracking-[.03em] text-[#525656] md:mb-0 md:flex md:items-stretch md:justify-around">
      {/* .hero-content */}
      <div className="md:relative md:w-1/2 md:flex-none md:overflow-hidden md:px-[15px]">
        {/* Title */}
        <div className="mx-auto max-w-[510px] px-[15px] pt-5 md:float-right md:clear-both md:w-full md:max-w-[480px] md:px-0 md:pb-5 md:pt-10">
          <h1 className="text-[32px] font-bold leading-[44px] tracking-[.03em] text-black">Safelite locations near you</h1>
        </div>

        {/* .store-locator */}
        <div className="mx-auto mt-[25px] max-w-[510px] px-[15px] pt-5 md:float-right md:clear-both md:mt-[-5px] md:w-full md:max-w-[480px] min-[990px]:p-0">
          <form onSubmit={handleSubmit} className="pb-5">
            {/* .sl-hero-form */}
            <div className="min-[992px]:flex min-[992px]:rounded-[20px]">
              {/* .location-widget */}
              <div
                onFocus={() => setHasFocusWithin(true)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setHasFocusWithin(false);
                }}
                className={`mt-4 flex w-full flex-col rounded-[20px] border-2 border-[#e8e9e9] bg-white tracking-[.02rem] text-[#5e5f61] transition-shadow duration-150 ease-in-out min-[992px]:mt-7 min-[992px]:flex-row ${
                  hasFocusWithin || query !== ""
                    ? "shadow-[0_0_0_2px_#fff,0_0_0_4px_#95c2e9,0_0_0_2px_#95c2e9,0_2px_4px_rgba(0,0,0,.32),0_4px_12px_rgba(0,0,0,.32)]"
                    : "shadow-[0_0_0_2.5px_#e8e9e9,0_2px_4px_rgba(0,0,0,.32),0_4px_12px_rgba(0,0,0,.32)]"
                }`}
              >
                {/* .input-wrapper */}
                <div className="relative mb-2 mt-4 flex -translate-x-2 items-center pb-[3.2px] min-[992px]:mx-2 min-[992px]:my-0 min-[992px]:w-[110%]">
                  {/* .tooltip-wrapper */}
                  <div>
                    <button
                      ref={triggerRef}
                      type="button"
                      onClick={handleLocate}
                      aria-expanded={!isTooltipDismissed}
                      aria-controls="store-location-tooltip"
                      className="relative ml-[10px] inline-block h-[44px] w-[54px] cursor-pointer border-0 bg-transparent p-0 text-center focus:outline-none focus-visible:border focus-visible:border-[#0070d1] min-[992px]:ml-0 min-[992px]:w-[44px]"
                    >
                      <span className="sr-only">Share location</span>
                      <svg
                        className="relative top-1 inline-block w-4 text-[#0070d1]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 11.93 12"
                        aria-hidden="true"
                      >
                        <path fill="currentColor" d={isLocationGranted ? ARROW_FULL : ARROW_HOLLOW} />
                      </svg>
                    </button>

                    {/* .tooltip */}
                    <div
                      id="store-location-tooltip"
                      role="tooltip"
                      aria-hidden={isTooltipDismissed}
                      className={`absolute left-1 top-[-42px] z-10 h-9 w-[136px] items-center rounded-[12px] bg-white px-4 text-[12px] leading-[25px] text-[#0a0a0a] shadow-[0_2px_4px_rgba(0,0,0,.32),0_4px_12px_rgba(0,0,0,.32)] min-[992px]:left-[-8px] min-[992px]:top-[-40px] ${
                        isTooltipDismissed ? "hidden" : "flex"
                      }`}
                    >
                      <button
                        type="button"
                        aria-label="Close tooltip"
                        onClick={() => {
                          setIsTooltipDismissed(true);
                          triggerRef.current?.focus();
                        }}
                        className="absolute right-4 top-3 h-3 w-3 cursor-pointer border-0 bg-transparent p-0 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0a58ca]"
                      >
                        <span className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#0a0a0a]" />
                        <span className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#0a0a0a]" />
                      </button>
                      <span className="text-left leading-[15px]">Share location</span>
                      {/* Down-pointing arrow under the bubble */}
                      <span className="absolute left-[26px] top-[35px] h-0 w-0 border-x-8 border-t-8 border-x-transparent border-t-white min-[992px]:left-6" />
                    </div>
                  </div>

                  {/* .zip-input */}
                  <div className="relative flex flex-1 flex-col">
                    <input
                      type="text"
                      id="zipcode"
                      name="locationSearch"
                      autoComplete="off"
                      placeholder=" "
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      onFocus={() => {
                        setIsInputFocused(true);
                        setIsTooltipDismissed(true);
                      }}
                      onBlur={() => setIsInputFocused(false)}
                      className={`${roboto.className} h-6 w-[90%] rounded-none border-0 bg-transparent p-0 text-[14px] leading-[25px] text-[#525656] outline-none transition-shadow duration-500 ease-in-out min-[992px]:w-full ${
                        isLabelRaised
                          ? "shadow-[inset_0_-2.5px_0_#0070d1]"
                          : "shadow-[inset_0_-1.5px_0_#525256] hover:shadow-[inset_0_-2.5px_0_#0070d1]"
                      }`}
                    />
                    <label
                      htmlFor="zipcode"
                      className={`absolute left-0 whitespace-nowrap p-0 font-medium leading-5 text-[#5e5f61] transition-all duration-[250ms] ease-in-out ${
                        isLabelRaised ? "pointer-events-none top-[-.75rem] text-[12px]" : "top-[2px] cursor-pointer text-base"
                      }`}
                    >
                      Enter ZIP or city and state
                    </label>
                  </div>
                </div>

                {/* #zip-cta: gray until a location is entered */}
                <button
                  type="submit"
                  id="zip-cta"
                  className={`flex h-[56px] w-full min-w-[177px] shrink cursor-pointer items-center justify-center rounded-[20px] border-0 px-12 text-base font-medium leading-none tracking-normal transition-all duration-[250ms] ease-in-out focus:outline-none focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#95c2e9] min-[992px]:w-[90%] min-[992px]:p-0 ${
                    query.trim() ? "bg-[#0070d1] text-white hover:bg-[#0063ad]" : "bg-[#e3e4e4] text-[#4d5151]"
                  }`}
                >
                  Find
                </button>
              </div>
            </div>
          </form>
          <Link
            href="/store-locator/store-locations-by-state"
            className="max-w-[108px] font-bold! text-[#0070d1] underline decoration-transparent transition-all duration-150 ease-out hover:decoration-[#0070d1]"
          >
            View all shops
          </Link>
        </div>
      </div>

      {/* .hero-image-wrapper: the photo is shown from 768px, cropped by its column */}
      <div className="hidden md:relative md:block md:w-1/2 md:flex-none md:overflow-hidden md:px-[15px]">
        <span className="relative block w-[585px] overflow-hidden">
          <span className="block pt-[64.95727%]" />
          <Image
            src="/image/location/store-building.jpg"
            alt=""
            width={585}
            height={380}
            preload
            className="absolute left-0 top-0 h-auto w-full max-w-full"
          />
        </span>
      </div>
    </div>
  );
}
