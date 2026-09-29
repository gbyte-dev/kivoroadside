"use client";

import { useRef, useState } from "react";
import Link from "next/link";

/*
 * Mirrors safelite.com's ".ratings" block inside the homepage gray box:
 * - 150x30 star meter: a #ffc62b bar behind a star-cutout overlay
 * - "Customers rate Safelite 4.66 out of 5" heading (32px / 700 / 44px)
 * - three reviews side by side from 768px up
 * - below 768px, one review at a time with dots and a 60px swipe, like the
 *   reference's cards-carousel script
 */

const rating = {
  // Exact values the reference page renders
  score: "4.66",
  precise: "4.6632013",
  barRight: "7.6%",
};

const reviews = [
  {
    quote:
      "Kudos to the team at Safelite Autoglass for their exceptional service and for turning what could have been a stressful situation into a pleasant one. I highly recommend them to anyone in need of auto glass services.",
    name: "Jordan",
  },
  {
    quote:
      "The team was prompt, professional, and meticulous in their work. The replacement was completed efficiently, and the clear communication from the staff made the whole process smooth and stress-free.",
    name: "Andee",
  },
  {
    quote:
      "This company does it right. From their outstanding communications, their punctuality, and the expertise of their technicians, they truly are the best in the business at this stuff.",
    name: "Robert",
  },
];

const SWIPE_THRESHOLD = 60;

export default function CustomerRatings() {
  const [activeReview, setActiveReview] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  function handleTouchStart(event: React.TouchEvent) {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  }

  // Horizontal swipe past 60px moves one review, as on the reference
  function handleTouchEnd(event: React.TouchEvent) {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;

    const touch = event.changedTouches[0];
    const deltaX = start.x - touch.clientX;
    const deltaY = start.y - touch.clientY;
    if (Math.abs(deltaX) <= Math.abs(deltaY)) return;

    if (deltaX < -SWIPE_THRESHOLD && activeReview > 0) {
      setActiveReview(activeReview - 1);
    } else if (deltaX > SWIPE_THRESHOLD && activeReview < reviews.length - 1) {
      setActiveReview(activeReview + 1);
    }
  }

  return (
    // .ratings (inside .gray-box)
    <div className="mx-6 mt-12 text-center max-md:max-w-[750px] min-[990px]:mx-0">
      {/* .rating-stars */}
      <div
        title={`Rated ${rating.precise} out of 5`}
        className="relative mx-auto mb-4 mt-5 h-[30px] w-[150px] overflow-hidden [transform:translateZ(0)]"
      >
        <div className="absolute inset-0 bg-[#ffc62b]" style={{ right: rating.barRight }} />
        <div className="absolute inset-0 bg-[url(/image/rating-star-overlay.svg)] bg-[length:30px_30px] bg-[position:top_left]">
          <span className="text-[21px] opacity-0">rated {rating.precise} out of 5</span>
        </div>
      </div>

      <h2 className="mb-2 text-[32px] font-bold leading-[44px] tracking-[.03em] text-black max-md:mx-auto max-md:max-w-[480px] max-md:px-[15px] max-md:pb-2">
        Customers rate Safelite <span className="inline text-black">{rating.score}</span> out of 5
      </h2>

      {/* .cards-carousel */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative mx-auto w-full max-w-[1020px] overflow-hidden px-[15px] [perspective:50vw]"
      >
        {/* .reviews-container */}
        <div className="relative left-0 mx-auto flex w-auto transition-transform duration-500 ease-in-out md:flex-nowrap md:justify-between md:gap-x-3 md:gap-y-6 md:p-0">
          {reviews.map((review, index) => (
            // .column-reviews
            <div
              key={review.name}
              onClick={() => setActiveReview(index)}
              className={`max-md:relative max-md:z-10 max-md:m-0 max-md:w-full max-md:flex-none max-md:text-center md:block ${
                index === activeReview ? "max-md:block" : "max-md:hidden"
              }`}
            >
              <p className="p-[3px] text-black max-md:mx-auto max-md:max-w-[480px] max-md:px-[15px] max-md:pb-2 max-md:pt-0 md:max-w-[340px] md:px-[15px] md:py-[3px]">
                &quot;{review.quote}&quot;
              </p>
              {/* .cus-name */}
              <div className="flex items-center justify-center">
                <div
                  role="img"
                  aria-label="5 out of 5 stars"
                  className="h-2 w-[50px] bg-[url(/image/small-gray-star.svg)] bg-[length:10px_8px] bg-repeat-x"
                />
                <span className="p-[5px] text-[12px] leading-5 text-[#363c42]">{review.name}</span>
                <span className="p-[5px] text-[12px] leading-5 text-[#363c42]">Verified Buyer</span>
              </div>
            </div>
          ))}
        </div>

        {/* .carousel-control: mobile-only dots */}
        <div className="h-10 px-[11px] pt-[11px] text-center md:hidden">
          {reviews.map((review, index) => {
            const isActive = index === activeReview;
            return (
              <button
                key={review.name}
                type="button"
                aria-label={`Show review ${index + 1}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => setActiveReview(index)}
                className={`mx-[10px] inline-block h-[15px] w-[15px] cursor-pointer rounded-[10px] border p-0 align-top relative top-[3px] transition-all duration-150 ease-out ${
                  isActive ? "border-[#0070d1] bg-[#0070d1]" : "border-[#8b8d8e] bg-transparent"
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* .ratings-links */}
      <div className="relative leading-[30px]">
        <Link href="/auto-glass-services/safelite-reviews" className="font-medium text-[#0070d1] underline decoration-transparent transition-all duration-150 ease-out hover:decoration-[#0070d1]">
          Read more reviews
        </Link>
      </div>
    </div>
  );
}
