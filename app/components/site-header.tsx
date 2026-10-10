"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

/*
 * Values below mirror safelite.com's own header stylesheet (.csh-header):
 * - Breakpoint: desktop at >= 992px (theirs is min-width: 991.9px)
 * - Desktop bar: 100px tall, 1px #e8e9e9 bottom border, content max-width 1020px
 * - Mobile bar: 50px tall + 48px quick-links row
 * - CTA (.btn.btn-primary-ghost): 56px tall, 0 32px padding, min-width 177px,
 *   1px #0070d1 border, 16px radius, 16px / weight 500 text, fills blue on hover
 */

const serviceGroups = [
  {
    title: "Glass Services",
    mobileTitle: "Glass services",
    links: [
      { label: "Windshield repair", href: "/windshield-repair" },
      { label: "Windshield replacement", href: "/windshield-replacement" },
      { label: "Back glass replacement", href: "/rear-windshield-replacement" },
      { label: "Side window replacement", href: "/side-window-replacement" },
      { label: "Mobile auto glass repair", href: "/mobile-auto-glass-repair" },
    ],
  },
  {
    title: "Other Services",
    mobileTitle: "Other services",
    links: [
      { label: "Power window repair", href: "/power-window-repair" },
      {
        label: "Safety systems recalibration",
        href: "/windshield-camera-recalibration",
      },
      {
        label: "Commercial repair and replace",
        href: "/auto-glass-services/other-services/commercial-repair-and-replace",
      },
    ],
  },
  {
    title: "Why Safelite?",
    mobileTitle: "Why Safelite?",
    links: [
      {
        label: "Customer reviews",
        href: "/auto-glass-services/safelite-reviews",
      },
      { label: "Nationwide warranty", href: "/national-lifetime-warranty" },
      {
        label: "Safelite Foundation",
        href: "/about-safelite/safelite-autoglass-foundation",
      },
    ],
  },
];

// Shared CTA style: Safelite's .btn + .btn-primary-ghost
const ctaClass =
  "inline-flex h-[56px] text-center min-w-[177px] items-center justify-center whitespace-nowrap rounded-[16px] border border-[#0070d1] bg-transparent px-[2rem] text-[16px] font-medium leading-none text-[#0070d1] hover:bg-[#0070d1] hover:text-white active:bg-[#0070d1] active:text-white focus:outline-none focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#95c2e9]";

// Desktop nav link: full-height, weight 600, red 4px underline that grows from the left
const navLinkClass =
  "group relative flex h-full items-center font-semibold text-[#4b4c4e] no-underline transition-colors duration-150 ease-out hover:text-[#db0020] focus-visible:text-[#db0020] focus:outline-none";
const underlineClass =
  "pointer-events-none absolute bottom-0 left-0 right-0 h-[4px] origin-left bg-[#db0020] transition-transform duration-200 ease-in-out";

export default function SiteHeader() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on route change (reset during render instead of in an effect)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }

  // Mobile menu drives the panel below 992px, the Services trigger drives it above.
  const panelHeightClass = `${isMobileMenuOpen ? "max-h-[1000px]" : "max-h-0"} ${
    isServicesOpen ? "min-[992px]:max-h-[1000px]" : "min-[992px]:max-h-0"
  }`;
  const isPanelOpen = isServicesOpen || isMobileMenuOpen;

  return (
    <header
      ref={headerRef}
      className="relative z-50 mx-auto w-full bg-white text-[16px] text-[#4b4c4e]"
    >
      {/* TOP BAR: 50px on mobile, 100px on desktop */}
      <div className="relative flex h-[50px] w-full items-center justify-center border-b border-[#e8e9e9] bg-white min-[992px]:h-[100px]">
        {/* DESKTOP NAV */}
        <div className="hidden h-full w-full max-w-[1020px] px-4 min-[992px]:flex">
          <div className="grid h-full w-full grid-cols-[repeat(6,auto)] items-center gap-[2.5rem]">
            {/* Logo */}
            <div className="flex h-full items-center">
              <Link href="/" className="flex">
                <Image
                  src="/image/safelite-logo.svg"
                  alt="Safelite Logo"
                  width={163}
                  height={28}
                  unoptimized
                  priority
                  className="w-[163px] max-w-none self-center"
                />
              </Link>
            </div>

            {/* Services trigger */}
            <div className="flex h-full items-center">
              <button
                type="button"
                onClick={() => setIsServicesOpen((open) => !open)}
                aria-expanded={isServicesOpen}
                aria-controls="site-services-panel"
                className={`${navLinkClass} cursor-pointer select-none pr-[1.25rem] ${
                  isServicesOpen ? "text-[#db0020]" : ""
                }`}
              >
                <span>Services</span>
                {/* Caret: a rotated bordered square, like the reference */}
                <span
                  aria-hidden="true"
                  className={`absolute right-[0.25rem] h-[0.5rem] w-[0.5rem] -translate-y-1/2 border-b-2 border-r-2 border-current transition-transform duration-200 ease-in-out ${
                    isServicesOpen ? "top-[52%] -rotate-[135deg]" : "top-[48%] rotate-45"
                  }`}
                />
                <span
                  className={`${underlineClass} ${
                    isServicesOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                  }`}
                />
              </button>
            </div>

            {[
              { label: "Locations", href: "/store-locator" },
              { label: "We're hiring", href: "/careers" },
              { label: "My appointment", href: "/my-appointment" },
            ].map((item) => (
              <div key={item.href} className="flex h-full items-center">
                <Link href={item.href} className={`${navLinkClass} whitespace-nowrap`}>
                  <span>{item.label}</span>
                  <span
                    className={`${underlineClass} scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100`}
                  />
                </Link>
              </div>
            ))}

            {/* CTA */}
            <div className="flex h-full items-center">
              <Link href="/fmg/vehicle" className={ctaClass}>
                Get quote + schedule
              </Link>
            </div>
          </div>
        </div>

        {/* MOBILE NAV: logo | Menu/Close | hamburger */}
        <div className="grid w-full max-w-[1020px] grid-cols-[1fr_auto_auto] items-center px-4 min-[992px]:hidden">
          <div className="max-w-[105px] justify-self-start">
            <Link href="/" className="flex">
              <Image
                src="/image/safelite-logo.svg"
                alt="Safelite Logo"
                width={163}
                height={28}
                unoptimized
                priority
                className="w-[163px] max-w-none self-center"
              />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="site-services-panel"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="col-span-2 flex cursor-pointer select-none items-center justify-self-end focus:outline-none"
          >
            {/* Menu / Close word (cross-fades like the reference) */}
            <span className="relative mr-[0.5rem] grid font-medium leading-none text-[#525656]" aria-live="polite">
              <span
                className={`col-start-1 row-start-1 text-right transition-opacity duration-200 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              >
                Menu
              </span>
              <span
                className={`col-start-1 row-start-1 text-right transition-opacity duration-200 ${
                  isMobileMenuOpen ? "opacity-100" : "opacity-0"
                }`}
              >
                Close
              </span>
            </span>

            {/* Hamburger: 18x12, 2px #222 bars, morphs into an X */}
            <span aria-hidden="true" className="relative block h-[12px] w-[18px]">
              <span
                className={`absolute left-0 right-0 h-[2px] rounded-[2px] bg-[#222] transition-all duration-200 ease-in-out ${
                  isMobileMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 rounded-[2px] bg-[#222] transition-opacity duration-200 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-[2px] rounded-[2px] bg-[#222] transition-all duration-200 ease-in-out ${
                  isMobileMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-[calc(100%-2px)]"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE QUICK LINKS: 48px row, 3 equal columns */}
      <div className="grid h-[3rem] w-full grid-cols-3 gap-4 border-b border-[#e8e9e9] min-[992px]:hidden">
        {[
          { label: "Locations", href: "/store-locator" },
          { label: "My appt", href: "/my-appointment" },
          { label: "Quote", href: "/fmg/vehicle" },
        ].map((item, index) => (
          <Link
            key={item.label}
            href={item.href}
            className="relative inline-flex items-center justify-center px-3 py-2 font-semibold text-[#4b4c4e] no-underline"
          >
            {index === 1 && (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-1/2 h-[2rem] w-full -translate-y-1/2 border-x border-[#e8e9e9]"
              />
            )}
            {item.label}
          </Link>
        ))}
      </div>

      {/* DROPDOWN PANEL: services mega menu on desktop, full menu on mobile */}
      <div
        id="site-services-panel"
        className={`absolute top-[50px] z-[999] w-full overflow-hidden rounded-b-[2rem] bg-white shadow-[0_8px_8px_rgba(0,0,0,0.25)] min-[992px]:top-[100px] ${
          isPanelOpen ? "duration-[900ms]" : "duration-300"
        } ${panelHeightClass} transition-[max-height] ease-in-out`}
      >
        {/* Desktop mega menu */}
        <div
          className="mx-auto hidden w-full max-w-[1020px] grid-cols-[188px_repeat(3,minmax(0,1fr))] items-start gap-4 px-4 py-8 min-[992px]:grid"
        >
          {/* Promo slot (empty on the reference right now) */}
          <div className="-mb-px rounded-[8px] p-0" />

          {serviceGroups.map((group) => (
            <div key={group.title} className="rounded-[8px] p-0">
              <ul className="m-0 flex list-none flex-col gap-2 p-0">
                <li className="m-0 font-medium text-[#db0020]">{group.title}</li>
                {group.links.map((link) => (
                  <li key={link.href} className="m-0 font-medium">
                    <Link
                      href={link.href}
                      className="group relative flex w-fit py-1 text-inherit no-underline"
                    >
                      {link.label}
                      <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 bg-[#db0020] transition-transform duration-200 ease-in-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* View all services: full-bleed row with a top border */}
          <div className="relative left-1/2 col-span-full flex w-screen -translate-x-1/2 items-center justify-center border-t border-[#e8e9e9] py-4">
            <Link
              href="/auto-glass-services"
              className="group relative inline-flex items-center gap-2 font-semibold text-[#0070d1] no-underline"
            >
              <span>View all services</span>
              <span
                aria-hidden="true"
                className="h-[0.5rem] w-[0.5rem] -rotate-45 border-b-2 border-r-2 border-current transition-transform duration-150 ease-in-out group-hover:translate-x-[2px]"
              />
              <span className="pointer-events-none absolute -bottom-[2px] left-0 right-0 h-[2px] origin-left scale-x-0 bg-current transition-transform duration-200 ease-in-out group-hover:scale-x-100" />
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <nav className="relative z-[999] grid w-full grid-cols-1 bg-white p-0 font-medium min-[992px]:hidden">
          <div className="border-b border-[#e8e9e9]">
            <button
              type="button"
              onClick={() => setIsMobileServicesOpen((open) => !open)}
              aria-expanded={isMobileServicesOpen}
              className={`relative flex w-full cursor-pointer items-center justify-between border-t border-[#e8e9e9] p-4 text-left font-medium ${
                isMobileServicesOpen ? "bg-[rgba(230,241,249,0.72)] text-[#0070d1]" : "text-inherit"
              }`}
            >
              <span>Services</span>
              <span
                aria-hidden="true"
                className={`relative -top-px inline-block h-[0.6rem] w-[0.6rem] border-b-2 border-r-2 border-[#0070d1] transition-transform duration-300 ease-in-out ${
                  isMobileServicesOpen ? "rotate-[225deg]" : "rotate-45"
                }`}
              />
              {/* 4px blue bar on the left when open */}
              <span
                aria-hidden="true"
                className={`absolute left-0 top-0 h-[56px] w-[4px] origin-top bg-[#0070d1] transition-transform duration-[250ms] ease-in-out ${
                  isMobileServicesOpen ? "scale-y-100" : "scale-y-0"
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                isMobileServicesOpen ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              {serviceGroups.map((group) => (
                <div key={group.title} className="flex flex-col">
                  <p className="m-0 px-4 py-2 text-[0.875rem] font-medium text-[#db0020]">
                    {group.mobileTitle}
                  </p>
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex px-4 py-2 font-medium text-[#4b4c4e] no-underline"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
              <Link
                href="/auto-glass-services"
                className="my-4 flex items-center px-4 py-2 font-medium text-[#0070d1] no-underline"
              >
                View all services
                <span
                  aria-hidden="true"
                  className="relative left-1 inline-flex h-[0.5rem] w-[0.5rem] -rotate-45 border-b-2 border-r-2 border-current"
                />
              </Link>
            </div>
          </div>

          {[
            { label: "Locations", href: "/store-locator" },
            { label: "We're hiring", href: "/careers" },
            { label: "My appointment", href: "/my-appointment" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex border-b border-[#e8e9e9] p-4 text-inherit no-underline"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/fmg/vehicle"
            className={`${ctaClass} mx-auto my-4 flex w-[95%]`}
          >
            Get quote + schedule
          </Link>
        </nav>
      </div>
    </header>
  );
}
