"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const DONATE_URL = "https://fosterlove.com/campaign/fcam-safelite/";
const IMAGES = "/image/services/safelite-and-foster-love";

const CARDS = [
  { src: `${IMAGES}/card-1.png`, alt: "Image showing how a $10 donation helps provide a teddy bear and blanket for children in foster care." },
  { src: `${IMAGES}/card-2.png`, alt: "Image showing how a $25 donation helps provide new books for children in foster care." },
  { src: `${IMAGES}/card-3.png`, alt: "Image showing how a 50 donation helps provide sensory items for children in foster care." },
];

// One card shows for a while, fades down and out, then comes back from the
// back of the stack: the reference's "deckCycle" animation, 3 seconds per card.
const CARD_SECONDS = 3;
const EASE = "cubic-bezier(.4,0,.2,1)";
const frame = (offset: number, opacity: number, y: number, scale: number, blur: number, zIndex: number): Keyframe => ({
  offset,
  opacity,
  transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
  filter: `blur(${blur}px)`,
  zIndex,
  easing: EASE,
});
const DECK_CYCLE: Keyframe[] = [
  frame(0, 1, 0, 1, 0, 3),
  frame(0.23, 1, 0, 1, 0, 3),
  frame(0.33333, 0, 20, 1, 0, 3),
  frame(0.33334, 0, -40, 0.97, 4, 1),
  frame(0.4, 1, -40, 0.97, 4, 1),
  frame(0.6, 1, -40, 0.97, 4, 1),
  frame(0.66666, 1, -20, 0.985, 2, 2),
  frame(0.93333, 1, -20, 0.985, 2, 2),
  frame(1, 1, 0, 1, 0, 3),
];

// Where each card starts before the script runs (its first frame). Set through
// the transform and filter properties, which the animation then takes over.
const START_CLASSES = [
  "z-[3]",
  "z-[2] [transform:translate3d(0,-20px,0)_scale(.985)] [filter:blur(2px)]",
  "z-[3] opacity-0",
];

// Stack of three donation cards that keep cycling; hovering pauses them
export default function DonationCards() {
  const cardRefs = useRef<(HTMLImageElement | null)[]>([]);
  const animations = useRef<Animation[]>([]);

  useEffect(() => {
    animations.current = cardRefs.current.flatMap((card, index) =>
      card
        ? [
            card.animate(DECK_CYCLE, {
              duration: CARD_SECONDS * 3 * 1000,
              // Each card starts one third of the cycle after the one in front of it
              delay: -((CARDS.length - index) % CARDS.length) * CARD_SECONDS * 1000,
              iterations: Infinity,
              fill: "both",
            }),
          ]
        : [],
    );
    return () => animations.current.forEach((animation) => animation.cancel());
  }, []);

  return (
    <div
      onMouseEnter={() => animations.current.forEach((animation) => animation.pause())}
      onMouseLeave={() => animations.current.forEach((animation) => animation.play())}
      className="relative mx-auto mt-14 aspect-[400/256] w-full max-w-[400px] cursor-pointer"
    >
      {CARDS.map((card, index) => (
        <a key={card.src} href={DONATE_URL} target="_blank" rel="noopener noreferrer" className="absolute inset-0 block">
          <Image
            ref={(element) => {
              cardRefs.current[index] = element;
            }}
            src={card.src}
            alt={card.alt}
            title="Animation paused while hovering"
            width={400}
            height={256}
            className={`relative block h-full w-full rounded-[24px] border border-[#ccc] object-contain [backface-visibility:hidden] [will-change:opacity,transform,filter] ${START_CLASSES[index]}`}
          />
        </a>
      ))}
    </div>
  );
}
