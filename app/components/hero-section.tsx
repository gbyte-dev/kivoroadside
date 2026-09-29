"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";

/*
 * Mirrors safelite.com's homepage hero (.sl-hero-wrapper) and its CSS:
 * - Mobile (< 768px): white card stacked above a 235px-min image
 * - Tablet/desktop (>= 768px): 475px image, 480px card with 2px #dcdcdc border,
 *   absolutely centered vertically, 1rem from the 1024px container edge
 * - ZIP widget (.location-widget): column below 992px, row at >= 992px
 * - Submit button: 56px tall, 20px radius, #0070d1 -> #0063ad on hover
 */

const SESSION_ZIP_KEY = "zipcode";

// Read a ZIP saved by an earlier visit, the way the reference does with sessionStorage.
function subscribeToNothing() {
  return () => {};
}
function readStoredZip() {
  try {
    return window.sessionStorage.getItem(SESSION_ZIP_KEY);
  } catch {
    return null;
  }
}
function readStoredZipOnServer() {
  return null;
}

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
function ArrowHollow({ className }: { className: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.93 12" aria-hidden="true">
      <path
        fill="currentColor"
        d="M11.3.62c-.59-.58-1.43-.78-2.2-.5L1.44 2.76A2.11 2.11 0 0 0 0 4.72c-.03.89.5 1.69 1.33 2.03l2.64 1.07c.06.03.11.06.14.13l1.13 2.74c.33.8 1.09 1.32 1.97 1.32h.08c.89-.04 1.66-.6 1.95-1.46l2.59-7.73c.26-.78.06-1.62-.51-2.18Zm-1.27 1.6L7.44 9.94c-.04.11-.11.18-.24.18-.09.04-.19-.05-.24-.15L5.83 7.23c-.21-.53-.64-.95-1.17-1.16L2.02 5q-.15-.075-.15-.24c0-.165.06-.2.16-.24l7.66-2.64s.06-.01.09-.01c.08 0 .14.04.18.08.05.05.1.14.06.26Z"
      />
    </svg>
  );
}

function ArrowFull({ className }: { className: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.93 12" aria-hidden="true">
      <path
        fill="currentColor"
        d="M11.3.63c-.59-.58-1.43-.78-2.2-.5L1.44 2.76C.59 3.05.02 3.82 0 4.72c-.03.89.5 1.7 1.33 2.04l2.63 1.06c.07.03.12.07.14.13l1.13 2.74c.33.8 1.09 1.31 1.97 1.31h.08c.89-.03 1.66-.6 1.95-1.45l2.58-7.74c.27-.77.06-1.62-.51-2.18"
      />
    </svg>
  );
}

export default function HeroSection() {
  const router = useRouter();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const storedZip = useSyncExternalStore(subscribeToNothing, readStoredZip, readStoredZipOnServer);

  // null means "the visitor has not typed yet", so a stored ZIP shows through
  const [typedZip, setTypedZip] = useState<string | null>(null);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [hasFocusWithin, setHasFocusWithin] = useState(false);
  const [isTooltipDismissed, setIsTooltipDismissed] = useState(false);
  const [wasTriggerClicked, setWasTriggerClicked] = useState(false);
  const [isLocationGranted, setIsLocationGranted] = useState(false);

  const zipcode = typedZip ?? storedZip ?? "";
  const hasFiveDigits = zipcode.replace(/\D/g, "").length === 5;

  // Same state rules as the reference script
  const isTooltipOpen = !isTooltipDismissed && !storedZip;
  const isArrowFull = isLocationGranted || Boolean(storedZip);
  const isLabelRaised = isInputFocused || zipcode !== "" || isArrowFull;
  const isZipComplete = wasTriggerClicked || hasFiveDigits;
  const isWidgetFocused = hasFocusWithin || hasFiveDigits || wasTriggerClicked;

  const inputUnderline = isLabelRaised
    ? "shadow-[inset_0_-2.5px_0_#0070d1]"
    : isZipComplete
      ? "shadow-[inset_0_-1.5px_0_#0070d1]"
      : "shadow-[inset_0_-1.5px_0_#525256] hover:shadow-[inset_0_-2.5px_0_#0070d1]";

  function handleLocate() {
    setIsTooltipDismissed(true);
    setWasTriggerClicked(true);

    if (!navigator.geolocation) {
      setIsLocationGranted(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        setIsLocationGranted(true);
        try {
          const zip = await reverseGeocodeZip(position.coords.latitude, position.coords.longitude);
          if (zip) {
            try {
              window.sessionStorage.setItem(SESSION_ZIP_KEY, zip);
            } catch {
              // Storage can be blocked; the ZIP still fills the field below.
            }
            setTypedZip(zip);
          }
        } catch {
          // Lookup failed; the visitor can still type a ZIP.
        }
      },
      () => setIsLocationGranted(false),
    );
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const zip = zipcode.trim();
    router.push(zip ? `/schedule-service?zipcode=${encodeURIComponent(zip)}` : "/schedule-service");
  }

  return (
    // .sl-hero-wrapper
    <section className="relative flex w-full flex-col items-center justify-center">
      {/* .sl-hero-grid */}
      <div className="flex h-full w-full max-w-[1024px] justify-center md:absolute md:inset-0 md:mx-auto">
        {/* .sl-hero-grid-col */}
        <div className="grid w-full max-w-[1024px] grid-cols-1 items-center gap-0 px-4">
          {/* .sl-hero-cta (the white card) */}
          <div className="relative z-10 mx-auto flex flex-col rounded-[1rem] bg-white p-4 text-center md:absolute md:left-4 md:top-1/2 md:max-w-[480px] md:-translate-y-1/2 md:border-2 md:border-[#dcdcdc] md:p-8 md:text-left">
            <h1 className="text-[3rem] font-extrabold leading-[1.1] tracking-[.03em] text-black">
              <span className="block text-[2.5rem]">
                We&apos;ll come to <br />
                you for <span className="text-[#db0020]">free.</span>
              </span>
            </h1>

            <p className="pb-6 pt-3 text-[1.25rem] leading-[1.4] text-[#525656]">
              Home. Work. Wherever. Our auto glass experts will come to you for{" "}
              <span className="font-bold text-black">free</span>.
              <a href="#disclaimer" className="font-medium text-[#0070d1] no-underline">
                *
              </a>
            </p>

            {/* .sl-hero-form */}
            <div className="md:inline-flex md:rounded-[20px]">
              {/* .location-widget */}
              <form
                id="location-widget"
                onSubmit={handleSubmit}
                onFocus={() => setHasFocusWithin(true)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                    setHasFocusWithin(false);
                  }
                }}
                className={`mx-auto mt-2 flex h-auto w-full max-w-[400px] flex-col rounded-[20px] border-[2.5px] border-[#e8e9e9] bg-white tracking-[.02rem] text-[#5e5f61] transition-shadow duration-150 ease-in-out min-[992px]:mt-6 min-[992px]:max-w-[480px] min-[992px]:flex-row ${
                  isWidgetFocused
                    ? "shadow-[0_0_0_2px_#fff,0_0_0_4px_#95c2e9,0_0_0_2px_#95c2e9,0_2px_4px_rgba(0,0,0,.32),0_4px_12px_rgba(0,0,0,.32)]"
                    : "shadow-[0_0_0_2.5px_#e8e9e9,0_2px_4px_rgba(0,0,0,.32),0_4px_12px_rgba(0,0,0,.32)]"
                }`}
              >
                {/* .input-wrapper */}
                <div className="relative mx-auto mb-2 mt-4 flex w-full -translate-x-2 items-end pb-[.2rem] min-[992px]:mx-2 min-[992px]:mb-0 min-[992px]:mt-2 min-[992px]:w-[110%]">
                  {/* .tooltip-wrapper */}
                  <div>
                    <button
                      ref={triggerRef}
                      type="button"
                      onClick={handleLocate}
                      aria-expanded={isTooltipOpen}
                      aria-controls="hero-location-tooltip"
                      className="relative ml-[10px] flex h-[44px] w-[54px] shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-base focus:outline-none focus-visible:border focus-visible:border-[#0070d1] min-[992px]:ml-0"
                    >
                      <span className="sr-only">Share location</span>
                      {isArrowFull ? (
                        <ArrowFull className="relative -top-[2px] h-auto w-4 text-[#0070d1]" />
                      ) : (
                        <ArrowHollow className="relative -top-[2px] h-auto w-4 text-[#0070d1]" />
                      )}
                    </button>

                    {/* .tooltip */}
                    <div
                      id="hero-location-tooltip"
                      role="tooltip"
                      aria-hidden={!isTooltipOpen}
                      className={`absolute left-0 top-[-42px] z-10 h-9 w-[136px] items-center rounded-[1em] bg-white px-4 text-[.75rem] leading-[1.25] text-[#0a0a0a] shadow-[0_2px_4px_rgba(0,0,0,.32),0_4px_12px_rgba(0,0,0,.32)] min-[992px]:left-[-8px] min-[992px]:top-[-44px] ${
                        isTooltipOpen ? "flex" : "hidden"
                      }`}
                    >
                      <button
                        type="button"
                        aria-label="Close tooltip"
                        onClick={() => {
                          setIsTooltipDismissed(true);
                          triggerRef.current?.focus();
                        }}
                        className="absolute right-4 h-3 w-3 cursor-pointer appearance-none border-0 bg-transparent p-0 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0a58ca]"
                      >
                        <span className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#0a0a0a]" />
                        <span className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#0a0a0a]" />
                      </button>
                      <span className="text-left">Share location</span>
                      {/* Down-pointing arrow under the bubble */}
                      <span className="absolute bottom-[-7px] left-[28px] h-0 w-0 border-x-8 border-t-8 border-x-transparent border-t-white" />
                    </div>
                  </div>

                  {/* .zip-input */}
                  <div className="relative flex w-full flex-col">
                    <input
                      type="text"
                      id="zipcode"
                      name="zipcode"
                      autoComplete="off"
                      inputMode="numeric"
                      placeholder=" "
                      maxLength={5}
                      value={zipcode}
                      onChange={(event) => setTypedZip(event.target.value)}
                      onFocus={() => {
                        setIsInputFocused(true);
                        setIsTooltipDismissed(true);
                      }}
                      onBlur={() => setIsInputFocused(false)}
                      className={`h-6 w-[90%] rounded-none border-0 bg-transparent p-0 text-base text-inherit outline-none transition-shadow duration-500 ease-in-out min-[992px]:w-full ${inputUnderline}`}
                    />
                    <label
                      htmlFor="zipcode"
                      className={`absolute left-0 whitespace-nowrap p-0 font-medium leading-[1.25] text-[#5e5f61] transition-all duration-[250ms] ease-in-out ${
                        isLabelRaised
                          ? "pointer-events-none top-[-.75rem] w-full text-left text-[12px]"
                          : "top-[2px] cursor-pointer text-base"
                      }`}
                    >
                      Enter service ZIP code
                    </label>
                    <span className="text-left text-[.75rem] leading-[1.25]">(e.g. 12345)</span>
                  </div>
                </div>

                {/* #zip-cta (.btn.btn-primary.zip-submit-button) */}
                <button
                  type="submit"
                  id="zip-cta"
                  className="flex h-[56px] w-full min-w-[177px] shrink cursor-pointer items-center justify-center rounded-[20px] border-0 bg-[#0070d1] px-12 text-base font-medium leading-none text-white no-underline transition-all duration-[250ms] ease-in-out hover:bg-[#0063ad] focus:bg-[#0063ad] focus:outline-none focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#95c2e9] min-[992px]:w-[90%] min-[992px]:p-0"
                >
                  Let&apos;s get started
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* .sl-hero-bg */}
      <div
        role="img"
        aria-label="A Safelite van driving down on a street."
        className="min-h-[235px] w-full bg-cover bg-[position:66%_center] bg-no-repeat p-4 md:h-[475px] md:bg-center"
        style={{ backgroundImage: "url('/image/hero-bg.jpg')" }}
      />
    </section>
  );
}
