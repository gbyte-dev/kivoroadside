"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { VEHICLE_LOGOS } from "./vehicle-brands";

type Logo = (typeof VEHICLE_LOGOS)[number];

// One full pass of the logo group takes three minutes
const SCROLL_DURATION = 180_000;

function shuffle(logos: Logo[]) {
  const result = [...logos];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const other = Math.floor(Math.random() * (index + 1));
    [result[index], result[other]] = [result[other], result[index]];
  }
  return result;
}

function LogoGroup({ logos, hidden = false }: { logos: Logo[]; hidden?: boolean }) {
  return (
    // .vehicle-logo-images: two staggered rows, the second one shifted 72px
    <div
      aria-hidden={hidden || undefined}
      className="grid flex-none auto-cols-[120px] grid-flow-col grid-rows-[repeat(2,auto)] justify-center gap-6 pr-6"
    >
      {logos.map((logo) => (
        <div
          key={logo.file}
          className="flex size-[120px] items-center justify-center justify-self-center rounded-[24px] bg-[#f4f4f4] p-4 shadow-[inset_0_2px_4px_0_rgba(0,0,0,.16),inset_0_-1px_0_0_rgba(255,255,255,.32)] even:translate-x-[72px]"
        >
          <Image
            src={`/image/vehicle-glass-repair/logos/${logo.file}.svg`}
            alt={logo.alt}
            width={88}
            height={50}
            unoptimized
            loading="eager"
            className="h-full max-h-[50px] w-full [filter:invert(27%)_sepia(4%)_saturate(274%)_hue-rotate(182deg)_brightness(93%)_contrast(88%)]"
          />
        </div>
      ))}
    </div>
  );
}

// Endless band of vehicle brand logos scrolling to the left. As on the
// reference, the logos come in a random order on every visit and the group
// is repeated once so the loop has no gap.
export default function LogoMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [logos, setLogos] = useState(VEHICLE_LOGOS);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const animation = track.animate([{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }], {
      duration: SCROLL_DURATION,
      iterations: Infinity,
      easing: "linear",
    });
    const frame = requestAnimationFrame(() => setLogos(shuffle(VEHICLE_LOGOS)));
    return () => {
      animation.cancel();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    // .vehicle-logo-marquee
    <div className="w-full overflow-hidden pb-10">
      <div ref={trackRef} className="flex w-max">
        <LogoGroup logos={logos} />
        <LogoGroup logos={logos} hidden />
      </div>
    </div>
  );
}
