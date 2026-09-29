"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import type Glide from "@glidejs/glide";

/*
 * Mirrors safelite.com's "Repair. Replace. Recalibrate." gray box and its
 * Glide.js carousel (.carousel-wrapper), including the page script's behaviour:
 * - 1 card per view up to 767px, 2 up to 1200px, 3 above
 * - gap 24px, 48px peek on both sides, bound slider, no rewind, 750ms ease-in-out
 * - "Services" / "Promotions" filters jump to that category's first card and
 *   stay in sync with whichever card is leftmost
 * - one bullet per start position; arrows fade at the ends and hide below 768px
 */

type Category = "services" | "promotions";

type Slide = {
  category: Category;
  image: { src: string; width: number; height: number };
  title: ReactNode;
  body: ReactNode;
  cta: { label: string; href: string };
};

const disclaimerLinkClass = "font-medium text-[#0070d1] no-underline hover:no-underline";

const slides: Slide[] = [
  {
    category: "services",
    image: { src: "/image/carousel/insurance-icon.svg", width: 94.74, height: 72 },
    title: "Insured? We got you",
    body: "We’ll handle your auto insurance claim so you can stress less.",
    cta: { label: "Learn about insurance coverage", href: "/help-center/insurance-coverage" },
  },
  {
    category: "services",
    image: { src: "/image/carousel/shops-near-you.svg", width: 53.9, height: 71.61 },
    title: "Service near you",
    body: "You’ll find our Mobile Glass Shops and repair facilities in all 50 states.",
    cta: { label: "Find a Safelite location", href: "/store-locator" },
  },
  {
    category: "services",
    image: { src: "/image/carousel/superior-repairs-a.svg", width: 61.05, height: 72 },
    title: "Superior repairs",
    body: "We’ll fix your glass using the best materials and back your service with our nationwide warranty.",
    cta: { label: "Explore windshield repair", href: "/windshield-repair" },
  },
  {
    category: "promotions",
    image: { src: "/image/carousel/mobile-service.svg", width: 105.02, height: 72 },
    title: (
      <>
        We&apos;ll come to you for <span className="text-[#db0020]">free</span>
      </>
    ),
    body: (
      <>
        Home. Work. Wherever. Our auto glass experts will get you back on the road.
        <a href="#disclaimer" className={disclaimerLinkClass}>
          *
        </a>
      </>
    ),
    cta: { label: "Let's get started", href: "/schedule-service?startType=fmg" },
  },
  {
    category: "promotions",
    image: { src: "/image/carousel/cost-payment-and-billing.svg", width: 61.42, height: 71.99 },
    title: (
      <>
        <span className="text-[#db0020]">Save up to $75</span> on our Premium package
      </>
    ),
    body: (
      <>
        Limited time offer: glass replacement + wipers + rain repellent treatment
        <a href="#disclaimer" className={disclaimerLinkClass}>
          **
        </a>
      </>
    ),
    cta: { label: "Book now", href: "/schedule-service?startType=fmg" },
  },
  {
    category: "promotions",
    image: { src: "/image/carousel/flexible-payment-options.svg", width: 95.79, height: 71.66 },
    title: (
      <>
        Fix now. <span className="text-[#db0020]">Pay later.</span>
      </>
    ),
    body: (
      <>
        Don’t wait! Take advantage of our flexible payment options and get the service you need now.
        <a href="#disclaimer" className={disclaimerLinkClass}>
          ***
        </a>
      </>
    ),
    cta: { label: "Book now", href: "/schedule-service?startType=fmg" },
  },
];

const filters: { value: Category; label: string }[] = [
  { value: "services", label: "Services" },
  { value: "promotions", label: "Promotions" },
];

// Same breakpoints as the reference script
function basePerView() {
  const width = window.innerWidth;
  if (width <= 767) return 1;
  if (width <= 1200) return 2;
  return 3;
}

function clampPerView(perView: number) {
  return Math.max(1, Math.min(perView, slides.length));
}

function maxStartIndex(perView: number) {
  return Math.max(0, slides.length - clampPerView(perView));
}

export default function ServicesCarousel({ children }: { children?: ReactNode }) {
  const glideRootRef = useRef<HTMLDivElement>(null);
  const glideRef = useRef<Glide | null>(null);

  const [perView, setPerView] = useState(3);
  const [index, setIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  const pages = Math.max(1, slides.length - clampPerView(perView) + 1);
  const lastIndex = maxStartIndex(perView);
  const activeBullet = Math.min(index, pages - 1);

  useEffect(() => {
    let isCancelled = false;
    let resizeTimer: ReturnType<typeof setTimeout> | undefined;

    // Keep bullets and the filter radios in sync with the leftmost card
    function syncFromGlide(glide: Glide) {
      const leftmost = Math.min(Math.max(glide.index || 0, 0), slides.length - 1);
      setIndex(glide.index);
      setActiveCategory(slides[leftmost].category);
    }

    // Recompute layout after a resize, like the reference's debounced handler
    function recomputeLayout() {
      const glide = glideRef.current;
      if (!glide) return;

      const nextPerView = clampPerView(basePerView());
      glide.update({ perView: nextPerView });

      const clamped = Math.min(glide.index || 0, maxStartIndex(nextPerView));
      if (glide.index !== clamped) glide.go(`=${clamped}`);

      setPerView(nextPerView);
      syncFromGlide(glide);
    }

    function handleResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(recomputeLayout, 100);
    }

    // Glide touches the DOM, so load it only in the browser
    import("@glidejs/glide").then(({ default: GlideClass }) => {
      if (isCancelled || !glideRootRef.current) return;

      const initialPerView = clampPerView(basePerView());
      const glide = new GlideClass(glideRootRef.current, {
        type: "slider",
        startAt: 0,
        perView: initialPerView,
        gap: 24,
        bound: true,
        rewind: false,
        hoverpause: true,
        animationDuration: 750,
        animationTimingFunc: "ease-in-out",
        peek: { before: 48, after: 48 },
      });

      glide.on(["mount.after", "run"], () => syncFromGlide(glide));
      glide.mount();
      glideRef.current = glide;

      setPerView(initialPerView);
      syncFromGlide(glide);
      window.addEventListener("resize", handleResize);
    });

    return () => {
      isCancelled = true;
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      glideRef.current?.destroy();
      glideRef.current = null;
    };
  }, []);

  // Filter click: jump so the category's first card is leftmost (clamped)
  function scrollToCategory(category: Category) {
    const glide = glideRef.current;
    setActiveCategory(category);
    if (!glide) return;

    const firstIndex = slides.findIndex((slide) => slide.category === category);
    if (firstIndex === -1) return;
    glide.go(`=${Math.min(firstIndex, lastIndex)}`);
  }

  return (
    // .gray-box
    <section className="mb-12 bg-[#f4f4f4] py-12">
      {/* .content-block */}
      <div className="mx-auto max-w-[510px] px-[15px] pb-6 md:max-w-[750px]">
        <h2 className="text-center text-[32px] font-bold leading-[44px] tracking-[.03em] text-black">
          Repair. Replace. Recalibrate. <br />
          Safelite does it all, anywhere you want.
        </h2>
      </div>

      {/* .carousel-wrapper */}
      <div className="overflow-x-hidden py-6">
        {/* .carousel */}
        <section
          aria-roledescription="carousel"
          aria-label="Featured items"
          className="mx-auto max-w-[1024px]"
        >
          {/* .glide */}
          <div ref={glideRootRef} className="relative w-full cursor-grab">
            {/* .glide__track */}
            <div data-glide-el="track" className="overflow-visible">
              {/* .glide__slides */}
              <ul className="relative -ml-8 flex w-full list-none flex-nowrap overflow-visible whitespace-nowrap px-0 py-8 opacity-100 [backface-visibility:hidden] [touch-action:pan-y] [transform-style:preserve-3d] will-change-transform">
                {slides.map((slide, slideIndex) => (
                  <li
                    key={slideIndex}
                    data-cats={slide.category}
                    className="glide__slide flex h-auto min-h-[355px] w-full max-w-[660px] shrink-0 select-none flex-col whitespace-normal rounded-[1.5rem] bg-[#f5f7fa] px-8 py-6 shadow-[0_1px_4px_rgba(55,56,57,.08),0_1px_2px_rgba(55,56,57,.56)] transition-all duration-300 ease-in-out will-change-[transform,opacity] [backface-visibility:hidden] [-webkit-tap-highlight-color:transparent] hover:shadow-[0_8px_24px_rgba(55,56,57,.32),0_4px_8px_rgba(55,56,57,.24)]"
                  >
                    <Image
                      src={slide.image.src}
                      alt=""
                      width={slide.image.width}
                      height={slide.image.height}
                      unoptimized
                      draggable={false}
                      className="mx-auto h-[72px] w-auto md:h-[88px]"
                    />
                    <h4 className="my-4 pb-[10px] text-[1.5rem] font-normal leading-[30px] tracking-[.03em] text-black">
                      {slide.title}
                    </h4>
                    <p className="mb-8 pb-[10px] text-base font-medium leading-[1.5] text-[#525656]">
                      {slide.body}
                    </p>
                    <Link
                      href={slide.cta.href}
                      draggable={false}
                      className="mt-auto w-fit select-none bg-[linear-gradient(#0070d1,#0070d1)] bg-[length:0_2px] bg-[position:0_100%] bg-no-repeat pb-1 font-medium text-[#0070d1] no-underline transition-[background-size] duration-300 ease-in-out hover:bg-[length:100%_2px] focus:outline-none focus-visible:rounded-[4px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0070d1]"
                    >
                      {slide.cta.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* .filters-controls */}
            <div className="absolute left-1/2 top-[-1.5rem] flex w-full max-w-[1024px] -translate-x-1/2 items-center justify-between pl-6">
              <div>
                {/* .filters */}
                <div role="radiogroup" aria-label="Category filters" className="flex w-fit flex-row gap-6">
                  {filters.map((filter) => (
                    <label key={filter.value} className="group relative cursor-pointer pb-0 font-semibold">
                      <input
                        type="radio"
                        name="carousel-category"
                        value={filter.value}
                        checked={activeCategory === filter.value}
                        onChange={() => scrollToCategory(filter.value)}
                        className="peer absolute m-[-1px] h-px w-px overflow-hidden border-0 p-0 opacity-0 [clip-path:inset(50%)] [clip:rect(0_0_0_0)]"
                      />
                      <span className="bg-[linear-gradient(#0070d1,#0070d1)] bg-[length:0_2px] bg-[position:0_100%] bg-no-repeat pb-1 text-[#4b4c4e] no-underline transition-[color,background-size] duration-300 ease-in-out group-hover:bg-[length:100%_2px] group-hover:text-[#0070d1] peer-checked:bg-[length:100%_2px] peer-checked:text-[#0070d1] peer-focus-visible:rounded-[4px] peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#0070d1]">
                        {filter.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                {/* .carousel-controls: Glide binds the data-glide-dir buttons */}
                <div
                  data-glide-el="controls"
                  aria-label="Carousel controls"
                  className="relative hidden w-fit justify-center gap-2 md:flex"
                  style={pages <= 1 ? { display: "none" } : undefined}
                >
                  <button
                    type="button"
                    aria-label="Previous slide"
                    data-glide-dir="<"
                    data-disabled={index === 0}
                    className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border-0 bg-transparent p-0 data-[disabled=true]:opacity-[.33]"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" className="h-[35px] w-[28px] text-[#0070d1]">
                      <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Next slide"
                    data-glide-dir=">"
                    data-disabled={index >= lastIndex}
                    className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border-0 bg-transparent p-0 data-[disabled=true]:opacity-[.33]"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" className="h-[35px] w-[28px] text-[#0070d1]">
                      <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* #hero-bullets */}
          <div aria-label="Carousel positions" className="mt-1 flex justify-center gap-2">
            {Array.from({ length: pages }, (_, bulletIndex) => {
              const isActive = bulletIndex === activeBullet;
              return (
                <button
                  key={bulletIndex}
                  type="button"
                  aria-label={`Go to position ${bulletIndex + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => glideRef.current?.go(`=${bulletIndex}`)}
                  className={`mx-1 h-3 cursor-pointer rounded-full border border-[#0070d1] p-0 shadow-none transition-all duration-[750ms] ease-in-out ${
                    isActive ? "w-[44px] bg-[#0070d1]" : "w-3 bg-transparent"
                  }`}
                />
              );
            })}
          </div>
        </section>
      </div>

      {/* On the reference, the ratings block also sits inside this gray box */}
      {children}
    </section>
  );
}
