"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function LocationHeroSection() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      window.location.href = `/store-locator/search?q=${encodeURIComponent(query)}`;
    }
  };

  const isInputActive = isFocused || query.length > 0;

  return (
    <section className="w-full bg-white border-b border-[#d4d6d8] font-sans overflow-hidden">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-stretch min-h-[400px] md:min-h-[460px] lg:min-h-[500px]">
        
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center items-start md:items-center lg:items-end px-5 sm:px-8 md:px-6 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-16 w-full">
          <div className="max-w-[480px] w-full mx-auto md:mx-0">
            
            {/* Main Heading */}
            <h1 className="text-[28px] sm:text-[34px] md:text-[30px] lg:text-[38px] xl:text-[42px] font-normal text-[#111827] leading-[1.15] tracking-tight mb-6">
              Safelite locations near you
            </h1>

            {/* Mobile Tooltip Badge (< 768px) */}
            {showTooltip && (
              <div className="relative mb-3 block md:hidden">
                <div className="relative inline-flex items-center gap-2 bg-white text-[#525656] text-[13px] font-medium px-3.5 py-1.5 rounded-full border border-gray-200 shadow-md">
                  <svg
                    className="w-3.5 h-3.5 fill-current text-[#0070d1]"
                    viewBox="0 0 12 12"
                  >
                    <path d="M11.3.62c-.59-.58-1.43-.78-2.2-.5L1.44 2.76A2.11 2.11 0 0 0 0 4.72c-.03.89.5 1.69 1.33 2.03l2.64 1.07c.06.03.11.06.14.13l1.13 2.74c.33.8 1.09 1.32 1.97 1.32h.08c.89-.04 1.66-.6 1.95-1.46l2.59-7.73c.26-.78.06-1.62-.51-2.18Z" />
                  </svg>
                  <span>Share location</span>
                  <button
                    type="button"
                    onClick={() => setShowTooltip(false)}
                    className="ml-1 text-gray-500 hover:text-black font-bold focus:outline-none"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}

            {/* Search Pill Widget */}
            <form onSubmit={handleSubmit} className="mb-6 w-full">
              <div className="flex flex-row items-center bg-white rounded-full border border-gray-300 p-1 md:p-1.5 shadow-md hover:border-[#0070d1] transition-all w-full max-w-[460px]">
                {/* Paper Plane Location Icon */}
                <div
                  onClick={() => document.getElementById("location-search")?.focus()}
                  className="flex items-center pl-3 sm:pl-3.5 pr-1.5 sm:pr-2 text-[#0070d1] cursor-pointer shrink-0"
                >
                  <svg
                    className="w-4 sm:w-5 h-4 sm:h-5 fill-current text-[#0070d1]"
                    viewBox="0 0 12 12"
                  >
                    <path d="M11.3.62c-.59-.58-1.43-.78-2.2-.5L1.44 2.76A2.11 2.11 0 0 0 0 4.72c-.03.89.5 1.69 1.33 2.03l2.64 1.07c.06.03.11.06.14.13l1.13 2.74c.33.8 1.09 1.32 1.97 1.32h.08c.89-.04 1.66-.6 1.95-1.46l2.59-7.73c.26-.78.06-1.62-.51-2.18Z" />
                  </svg>
                </div>

                {/* Floating Input Area */}
                <div
                  onClick={() => document.getElementById("location-search")?.focus()}
                  className="flex-1 relative flex flex-col justify-center cursor-text min-h-[44px] sm:min-h-[46px] px-1 py-0.5 min-w-0"
                >
                  {/* Floating Label */}
                  <label
                    htmlFor="location-search"
                    className={`transition-all duration-200 cursor-text truncate ${
                      isInputActive
                        ? "text-[#525656] font-semibold text-[10px] sm:text-[11px] transform -translate-y-1"
                        : "text-[#525656] font-normal text-[13px] sm:text-[15px] transform translate-y-0"
                    }`}
                  >
                    Enter ZIP or city and state
                  </label>

                  {/* Input Field */}
                  <input
                    type="text"
                    id="location-search"
                    name="location-search"
                    value={query}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={(e) => setQuery(e.target.value)}
                    className={`w-full text-[14px] sm:text-[15px] font-semibold text-gray-900 bg-transparent focus:outline-none transition-all ${
                      isInputActive ? "opacity-100 py-0.5" : "opacity-0 h-0 p-0"
                    }`}
                  />

                  {/* Underline */}
                  <div
                    className={`h-[1.5px] transition-all duration-200 mt-0.5 ${
                      isFocused ? "bg-[#0070d1] h-[2px] w-full" : "bg-gray-400/70 w-full"
                    }`}
                  />
                </div>

                {/* Find Button */}
                <button
                  type="submit"
                  className={`rounded-full px-5 sm:px-8 py-2.5 sm:py-3 text-[14px] sm:text-[15px] font-medium transition-colors whitespace-nowrap shrink-0 ml-1 ${
                    query
                      ? "bg-[#0070d1] hover:bg-[#0063ad] text-white shadow-sm"
                      : "bg-[#E3E4E4] text-[#4D5151] cursor-pointer"
                  }`}
                >
                  Find
                </button>
              </div>
            </form>

            {/* View All Shops Link */}
            <div>
              <Link
                href="/store-locator/store-locations-by-state"
                className="inline-flex items-center text-[#0070d1] font-semibold text-[15px] hover:underline"
              >
                View all shops
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Store Image (HIDDEN ON MOBILE, VISIBLE ON TABLET & DESKTOP md:block) */}
        <div className="hidden md:block relative w-full h-full min-h-[360px] md:min-h-[460px] overflow-hidden">
          <Image
            src="/image/location/store-building.jpg"
            alt="Safelite Shop Building with Red Van"
            fill
            priority
            unoptimized
            className="object-cover object-left-center"
          />
        </div>
      </div>
    </section>
  );
}