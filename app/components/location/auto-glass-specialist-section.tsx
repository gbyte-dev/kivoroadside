"use client";

import React, { useState, useRef } from "react";

function MedalIcon() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Soft shadow underneath */}
      <div className="absolute -bottom-1.5 w-14 h-2 bg-gray-300/50 rounded-full blur-[2px]" />
      <svg
        width="64"
        height="72"
        viewBox="0 0 64 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        {/* Ribbon tails (Red) */}
        <path
          d="M21 38L13 66L23 60L31 66L27 38"
          fill="#db0020"
          stroke="#111827"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M43 38L51 66L41 60L33 66L37 38"
          fill="#db0020"
          stroke="#111827"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Circle Medal Outer */}
        <circle cx="32" cy="24" r="20" fill="white" stroke="#111827" strokeWidth="2.5" />
        {/* Circle Medal Inner Line */}
        <circle cx="32" cy="24" r="15" stroke="#111827" strokeWidth="1.5" strokeDasharray="none" />
      </svg>
    </div>
  );
}

function ShieldIcon() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Soft shadow underneath */}
      <div className="absolute -bottom-1.5 w-14 h-2 bg-gray-300/50 rounded-full blur-[2px]" />
      <svg
        width="64"
        height="72"
        viewBox="0 0 64 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        {/* Shield left half (White) */}
        <path
          d="M32 8C22 8 14 10 14 10V34C14 48 32 60 32 60V8Z"
          fill="white"
          stroke="#111827"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Shield right half (Red) */}
        <path
          d="M32 8C42 8 50 10 50 10V34C50 48 32 60 32 60V8Z"
          fill="#db0020"
          stroke="#111827"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Center dividing line */}
        <path d="M32 8V60" stroke="#111827" strokeWidth="2.5" />
      </svg>
    </div>
  );
}

function DocumentIcon() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Soft shadow underneath */}
      <div className="absolute -bottom-1.5 w-14 h-2 bg-gray-300/50 rounded-full blur-[2px]" />
      <svg
        width="64"
        height="72"
        viewBox="0 0 64 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        {/* Document main body with corner fold */}
        <path
          d="M18 8H40L50 18V58C50 60.2091 48.2091 62 46 62H18C15.7909 62 14 60.2091 14 58V12C14 9.79086 15.7909 8 18 8Z"
          fill="white"
          stroke="#111827"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Red Folded Corner */}
        <path
          d="M40 8V18H50L40 8Z"
          fill="#db0020"
          stroke="#111827"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Checklist Item 1 */}
        <path
          d="M21 24L24 27L29 22"
          stroke="#111827"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M33 24H43" stroke="#111827" strokeWidth="2" strokeLinecap="round" />

        {/* Checklist Item 2 */}
        <path
          d="M21 36L24 39L29 34"
          stroke="#111827"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M33 36H43" stroke="#111827" strokeWidth="2" strokeLinecap="round" />

        {/* Checklist Item 3 */}
        <path
          d="M21 48L24 51L29 46"
          stroke="#111827"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M33 48H43" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function AutoGlassSpecialistSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      id: "tech",
      icon: <MedalIcon />,
      title: "The best replacement technology",
      description:
        "6 million safety-conscious customers choose Safelite to replace their vehicle glass every year.",
    },
    {
      id: "warranty",
      icon: <ShieldIcon />,
      title: "Nationwide lifetime warranty",
      description:
        "Safelite backs up your warranty with more than 7,100 MobileGlassShops and repair facilities nationwide.",
    },
    {
      id: "steps",
      icon: <DocumentIcon />,
      title: "3 easy steps to fixing your glass",
      description:
        "It only takes 3 quick steps to fix your vehicle's glass so you can get back on the road as soon as possible.",
    },
  ];

  // Detect current active slide on horizontal scroll (Mobile)
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.children[0]?.clientWidth || 280;
    const gap = 16;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    if (index >= 0 && index < cards.length && index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  // Scroll to slide when dot is clicked
  const scrollToSlide = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.children[0]?.clientWidth || 280;
    const gap = 16;
    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <section className="bg-[#f4f5f7] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Top Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start mb-8 md:mb-14">
          {/* Title & Red Line Accent */}
          <div className="md:col-span-6 lg:col-span-6">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-gray-900 tracking-tight leading-tight">
              #1 auto glass specialist in the country
            </h2>
            <div className="mt-3.5 w-16 sm:w-20 h-[3.5px] bg-[#db0020] rounded-full" />
          </div>

          {/* Subtitle Description */}
          <div className="md:col-span-6 lg:col-span-6 md:pt-1 mt-2 md:mt-0">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Safelite AutoGlass is the only national auto glass repair and replacement
              service. Safelite is available to more than 97% of U.S. drivers{" "}
              <span className="text-[#0070d1] hover:underline cursor-pointer">
                and all 50 states.
              </span>
            </p>
          </div>
        </div>

        {/* Responsive Carousel (Mobile) / Grid (Tablet & Desktop) */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-none md:mx-0 md:px-0 md:pb-0 md:overflow-visible md:grid md:grid-cols-3 md:gap-6 lg:gap-8 [scroll-behavior:smooth]"
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="w-[82vw] max-w-[320px] shrink-0 snap-center bg-white rounded-[22px] p-7 sm:p-8 lg:p-10 border border-gray-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex flex-col items-center text-center md:w-auto md:max-w-none md:shrink md:snap-align-none h-full hover:shadow-md transition-shadow duration-300"
              >
                {/* Icon Container */}
                <div className="h-20 flex items-center justify-center mb-5">
                  {card.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-[#db0020] text-lg sm:text-xl font-bold mb-3 leading-snug max-w-[240px]">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Carousel Pagination Dots (Mobile Only) */}
          <div className="flex md:hidden justify-center items-center gap-2.5 mt-6">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === index
                    ? "w-3.5 h-3.5 bg-[#0070d1]"
                    : "w-3.5 h-3.5 bg-transparent border-2 border-gray-300 hover:border-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}