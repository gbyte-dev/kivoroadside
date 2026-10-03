"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GrayBox from "@/app/components/services/gray-box";
import ContentBlock from "@/app/components/services/content-block";
import ContentHalves, { HalvesHeading } from "@/app/components/services/content-halves";

const CARDS = [
  {
    icon: "/image/location/ribbon.png",
    title: "The best replacement technology",
    text: "6 million safety-conscious customers choose Safelite to replace their vehicle glass every year.",
  },
  {
    icon: "/image/location/shield.png",
    title: "Nationwide lifetime warranty",
    text: "Safelite backs up your warranty with more than 7,100 MobileGlassShops and repair facilities nationwide.",
  },
  {
    icon: "/image/location/checklist.png",
    title: "3 easy steps to fixing your glass",
    text: "It only takes 3 quick steps to fix your vehicle’s glass so you can get back on the road as soon as possible.",
  },
];

const SWIPE_THRESHOLD = 60;
// Card width on phones; the row slides by this much per card
const MOBILE_CARD_WIDTH = 240;

// Desktop margins split the leftover row space like the reference's carousel
// script: calc((0.1% + 36px) / 5) beside each card, none before the first.
const DESKTOP_MARGIN = "md:mx-[calc((0.1%_+_36px)/5)]";

// Three cards in a row from 768px. Below that, one 240px card at a time with
// the neighbours peeking in at 85% size, swipe or dots to move.
function CardsCarousel() {
  const [active, setActive] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  function handleTouchEnd(event: React.TouchEvent) {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const touch = event.changedTouches[0];
    const deltaX = start.x - touch.clientX;
    if (Math.abs(deltaX) <= Math.abs(start.y - touch.clientY)) return;
    if (deltaX < -SWIPE_THRESHOLD && active > 0) setActive(active - 1);
    else if (deltaX > SWIPE_THRESHOLD && active < CARDS.length - 1) setActive(active + 1);
  }

  return (
    // .cards-carousel
    <div
      className="relative mx-auto flex max-w-[1020px] flex-col overflow-hidden px-[15px]"
      onTouchStart={(event) => {
        const touch = event.touches[0];
        touchStart.current = { x: touch.clientX, y: touch.clientY };
      }}
      onTouchEnd={handleTouchEnd}
    >
      {/* .carousel-container */}
      <div
        className="relative mx-auto flex w-[240px] max-md:translate-x-[var(--slide)] transition-transform duration-500 ease-in-out md:mx-0 md:w-full md:flex-wrap md:justify-between md:gap-x-3 md:gap-y-6"
        style={{ "--slide": `-${active * MOBILE_CARD_WIDTH}px` } as React.CSSProperties}
      >
        {CARDS.map((card, index) => (
          // .card-wrapper.card-photo
          <div
            key={card.title}
            onClick={() => setActive(index)}
            className={`relative z-10 flex w-[240px] max-w-[480px] flex-none flex-col items-center rounded-[16px] border-2 border-[#dcdcdc] bg-white px-[15px] py-5 text-center transition-transform duration-500 ease-in-out md:w-[calc(33.3%-20px)] md:scale-100 ${
              index === active ? "" : "max-md:scale-[0.85]"
            } ${index === 0 ? "md:mr-[calc((0.1%_+_36px)/5)]" : DESKTOP_MARGIN}`}
          >
            {/* .card-image */}
            <div className="relative mb-[15px] flex h-[70px] w-full flex-none items-center justify-center overflow-hidden rounded-t-[14px]">
              <Image src={card.icon} alt="" width={69} height={70} />
            </div>
            {/* .card-content */}
            <div className="relative flex w-full flex-[1_0_auto] flex-col items-center justify-between text-center">
              <h3 className="pb-[10px]! text-[20px]! font-bold! leading-[32px]! tracking-[.03em] text-[#db0020]">
                {card.title}
              </h3>
              <p className="mx-auto mb-auto w-full flex-none overflow-hidden pb-[10px] text-center">{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* .carousel-control: dots on phones only */}
      <div className="h-[65px] p-5 text-center md:hidden">
        {CARDS.map((card, index) => (
          <button
            key={card.title}
            type="button"
            aria-label={`Show card ${index + 1}`}
            aria-current={index === active ? "true" : undefined}
            onClick={() => setActive(index)}
            className={`mx-[10px] inline-block h-[15px] w-[15px] cursor-pointer rounded-[10px] border p-0 align-baseline transition-all duration-150 ease-out ${
              index === active ? "border-[#0070d1] bg-[#0070d1]" : "border-[#8b8d8e] bg-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// "#1 auto glass specialist in the country" gray band with the three cards
export default function AutoGlassSpecialistSection() {
  return (
    <GrayBox>
      <ContentHalves
        left={<HalvesHeading>#1 auto glass specialist in the country</HalvesHeading>}
        right={
          <ContentBlock>
            <div className="pb-[10px]">
              Safelite AutoGlass is the only national auto glass repair and replacement service. Safelite is available to
              more than 97% of U.S. drivers{" "}
              <Link href="/store-locator/store-locations-by-state">and all 50 states</Link>.
            </div>
          </ContentBlock>
        }
      />
      <CardsCarousel />
    </GrayBox>
  );
}
