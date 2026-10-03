"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CookiePreferences, { openCookiePreferences } from "./cookie-preferences";

const generalLinks = [
  { label: "Locations", href: "/store-locator" },
  { label: "Contact us", href: "/contact-us" },
  { label: "Help center", href: "/help-center" },
  { label: "Careers", href: "/careers" },
  { label: "For agencies", href: "https://safeliteforagents.com/", external: true },
  { label: "Safelite for business", href: "https://safelitedirect.com/?fmg" },
];

const menus = [
  {
    title: "Fix my glass",
    links: [
      { label: "My appointment", href: "/my-appointment" },
      { label: "Cost of auto glass services", href: "/auto-glass-repair-replacement-cost" },
      { label: "Vehicles", href: "/vehicle-glass-repair" },
    ],
  },
  {
    title: "Our services",
    links: [
      { label: "Convenient locations", href: "/store-locator/store-locations-by-state" },
      { label: "Beyond the glass", href: "/windshield-auto-glass-technology" },
      { label: "Products", href: "/products/safelite-glass-cleaner" },
      { label: "Glass damage type", href: "/damaged-windshield-repair-replace" },
      { label: "Commercial & large vehicle glass", href: "/commercial-and-large-vehicle-windshield-replacement" },
    ],
  },
  {
    title: "Why Safelite",
    links: [
      { label: "Why choose Safelite", href: "/why-choose-safelite" },
      { label: "Nationwide warranty", href: "/national-lifetime-warranty" },
      { label: "Mobile and in-shop", href: "/mobile-auto-glass-repair" },
      { label: "Customer reviews", href: "/auto-glass-services/safelite-reviews" },
      { label: "Glass recycling", href: "/why-choose-safelite/glass-recycling" },
    ],
  },
  {
    title: "Our company",
    links: [
      { label: "About us", href: "/about-safelite" },
      { label: "Our leaders", href: "/about-safelite/our-leaders" },
      { label: "Press releases", href: "/about-safelite/press-releases" },
      { label: "Safelite Foundation", href: "/about-safelite/safelite-autoglass-foundation" },
      { label: "Resource Center", href: "/resource-center" },
    ],
  },
];

const socialLinks = [
  {
    label: "Visit Safelite's Facebook page",
    href: "https://www.facebook.com/safelite",
    viewBox: "0 0 16.06 16",
    path: "M8.03 0C3.59 0 0 3.59 0 8.03c0 3.77 2.59 6.93 6.09 7.79v-5.34H4.43V8.03h1.66V6.97c0-2.73 1.24-4 3.92-4 .51 0 1.39.1 1.75.2v2.22c-.19-.02-.52-.03-.93-.03-1.32 0-1.83.5-1.83 1.8v.87h2.62l-.45 2.45H9V16a8.033 8.033 0 0 0 7.06-7.97C16.06 3.6 12.46 0 8.03 0Z",
  },
  {
    label: "Visit Safelite's Instagram page",
    href: "https://www.instagram.com/safelite/",
    viewBox: "0 0 16 16",
    path: "M4.69.06C3.84.1 3.26.24 2.75.44c-.53.2-.97.48-1.42.93-.44.45-.72.89-.92 1.42-.2.51-.33 1.09-.37 1.94C0 5.57 0 5.84 0 8.02c0 2.17.01 2.44.05 3.3.04.85.18 1.43.38 1.94.21.53.48.97.93 1.42.45.44.89.72 1.42.92.51.2 1.09.33 1.94.37.85.04 1.13.05 3.3.04 2.17 0 2.45-.01 3.3-.05.85-.04 1.43-.18 1.94-.38.53-.21.97-.48 1.42-.93.44-.45.72-.89.92-1.42.2-.51.33-1.09.37-1.94.04-.85.05-1.13.04-3.3 0-2.17-.01-2.44-.05-3.3-.04-.85-.18-1.43-.38-1.94a3.97 3.97 0 0 0-.93-1.42 3.94 3.94 0 0 0-1.42-.92c-.51-.2-1.09-.33-1.94-.37C10.43 0 10.16 0 7.98 0c-2.17 0-2.44.01-3.3.05m.1 14.47c-.78-.03-1.2-.16-1.49-.27-.37-.14-.64-.32-.92-.6-.28-.28-.45-.55-.6-.92-.11-.28-.24-.71-.28-1.49-.04-.84-.05-1.1-.05-3.23 0-2.14 0-2.39.04-3.23.03-.78.16-1.2.27-1.49.14-.37.32-.64.6-.92.28-.28.55-.45.92-.6.28-.11.7-.24 1.48-.28.84-.04 1.1-.05 3.23-.05 2.14 0 2.39 0 3.23.04.78.03 1.2.16 1.49.27.37.14.64.32.92.6.28.28.45.55.6.92.11.28.24.7.28 1.48.04.84.05 1.1.05 3.23 0 2.14 0 2.39-.04 3.23-.03.78-.16 1.2-.27 1.49-.14.37-.32.64-.6.92-.28.28-.45.55-.6.92-.28.11-.7.24-1.48.28-.84.04-1.1.05-3.23.05-2.14 0-2.39 0-3.23-.04M11.3 3.72a.96.96 0 1 0 1.92 0 .96.96 0 0 0-1.92 0M3.89 8.01c0 2.27 1.85 4.1 4.12 4.1s4.1-1.85 4.1-4.12-1.85-4.1-4.12-4.1-4.1 1.85-4.1 4.12Zm1.44 0c0-1.47 1.19-2.67 2.66-2.67 1.47 0 2.67 1.19 2.67 2.66 0 1.47-1.19 2.67-2.66 2.67-1.47 0-2.67-1.19-2.67-2.66",
  },
  {
    label: "Visit Safelite's Youtube page",
    href: "https://www.youtube.com/@safelite",
    viewBox: "0 0 20 14",
    path: "M19.58 2.19c-.23-.86-.91-1.54-1.77-1.77C16.25 0 9.99 0 9.99 0S3.74 0 2.18.42C1.32.65.64 1.33.41 2.19-.01 3.75-.01 7-.01 7s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77 1.56.42 7.81.42 7.81.42s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77.42-1.56.42-4.81.42-4.81s0-3.25-.42-4.81ZM8 10V4l5.2 3L8 10Z",
  },
  {
    label: "Visit Safelite's LinkedIn page",
    href: "https://www.linkedin.com/company/safelite-autoglass",
    viewBox: "0 0 16 16",
    path: "M14.82 0H1.18C.52 0 0 .52 0 1.18v13.64C0 15.47.52 16 1.18 16h13.64c.65 0 1.18-.52 1.18-1.18V1.18C16 .53 15.48 0 14.82 0ZM4.76 13.63H2.35V5.99h2.41v7.64Zm-1.2-8.7c-.76 0-1.39-.59-1.39-1.38s.62-1.38 1.39-1.38 1.39.59 1.39 1.38-.62 1.38-1.39 1.38Zm10.08 8.71h-2.41V9.46c0-1.24-.52-1.61-1.2-1.61-.71 0-1.41.53-1.41 1.64v4.14H6.21V5.99h2.31v1.06h.03c.23-.47 1.05-1.27 2.28-1.27 1.34 0 2.79.8 2.79 3.13v4.73h.02Z",
  },
];

const legalLinks = [
  { label: "Terms of service", href: "/terms-of-service" },
  { label: "Your privacy choices", href: "/privacy-center", privacyIcon: true },
  { label: "Cookie preferences", cookieButton: true },
  { label: "Cancellation policy", href: "/cancellation-refund-policy" },
  { label: "Site map", href: "/site-map" },
  { label: "Notice at collection", href: "/ccpa-privacy-policy" },
];

function ChevronIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 14.59" aria-hidden="true" className="w-full">
      <path d="M25 1.49c0 .4-.16.79-.44 1.06L12.52 14.59.44 2.55a1.49 1.49 0 0 1 0-2.12c.55-.56 1.57-.56 2.12 0l9.94 9.94L22.44.43C23-.14 24-.14 24.56.43c.28.27.44.66.44 1.06" />
    </svg>
  );
}

{/* Red Hover Underline matching Header */ }
const underlineAfter =
  "after:pointer-events-none after:absolute after:left-0 after:right-0 after:origin-left after:scale-x-0 after:bg-[#db0020] after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100";

export default function SiteFooter() {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const year = new Date().getFullYear();

  function toggleMenu(title: string) {
    setOpenMenus((current) => ({ ...current, [title]: !current[title] }));
  }

  return (
    <footer className="mt-5">
      <div className="border-t border-[#e0e0e0]">
        <div role="navigation" aria-label="secondary" className="md:mx-auto md:max-w-[1020px] md:px-[15px] md:pb-[30px]">
          <div className="mx-auto max-w-[1020px] py-4 tracking-[.02rem]">
            <section className="flex flex-col pt-4 min-[992px]:flex-row">
              {/* General Links */}
              <div className="mb-8 flex flex-col px-4 min-[992px]:mb-0 min-[992px]:w-1/5">
                <ul className="m-0 grid list-none grid-cols-2 gap-0 p-0 min-[992px]:grid-cols-1">
                  {generalLinks.map((link) => (
                    <li
                      key={link.label}
                      className="flex justify-center py-4 min-[992px]:justify-start min-[992px]:pb-4 min-[992px]:pt-0 min-[992px]:text-[1rem] min-[992px]:first:py-4"
                    >
                      <Link
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className={`relative inline-block font-medium text-[#0070d1] no-underline after:bottom-[-2px] after:h-[2px] after:transition-transform after:duration-200 after:ease-in-out ${underlineAfter}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Accordion Menus */}
              {menus.map((menu, index) => {
                const isOpen = Boolean(openMenus[menu.title]);
                const panelId = `footer-menu-${index + 1}`;
                return (
                  <div
                    key={menu.title}
                    className={`relative border-b border-[#e8e9e9] p-0 min-[992px]:w-1/5 min-[992px]:border-none min-[992px]:px-3 ${index === 0 ? "border-t" : ""
                      }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-0 h-full w-[5px] bg-[#0070d1] transition-all duration-300 ease-in-out min-[992px]:hidden ${isOpen ? "max-h-[56px]" : "max-h-0"
                        }`}
                    />
                    <button
                      type="button"
                      onClick={() => toggleMenu(menu.title)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className={`flex h-14 w-full cursor-pointer select-none items-center justify-between px-4 text-left font-medium min-[992px]:pointer-events-none min-[992px]:h-auto min-[992px]:bg-transparent min-[992px]:px-0 min-[992px]:py-4 min-[992px]:text-[#db0020] ${isOpen ? "bg-[rgba(230,241,249,.72)] text-[#0070d1]" : "text-[#0a0a0a]"
                        }`}
                    >
                      {menu.title}
                      <span
                        aria-hidden="true"
                        className={`relative flex w-[.875rem] fill-[#0070d1] transition-transform duration-300 ease-in-out min-[992px]:hidden ${isOpen ? "rotate-180" : ""
                          }`}
                      >
                        <ChevronIcon />
                      </span>
                    </button>

                    <div
                      id={panelId}
                      className={`grid transition-[grid-template-rows] duration-300 ease-in-out min-[992px]:grid-rows-[1fr] min-[992px]:text-[.875rem] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                    >
                      <ul
                        className={`m-0 flex flex-col overflow-hidden px-4 transition-[visibility] duration-300 min-[992px]:visible min-[992px]:px-0 ${isOpen ? "visible" : "invisible"
                          }`}
                      >
                        {menu.links.map((link) => (
                          <li key={link.href} className="list-none first:mt-4 min-[992px]:first:mt-0">
                            <Link
                              href={link.href}
                              className={`relative inline-block pb-4 font-medium text-[#0a0a0a] no-underline after:bottom-3 after:h-[2px] after:transition-transform after:duration-[250ms] after:ease-in-out ${underlineAfter}`}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </section>

            {/* Logo and Social Icons */}
            <section className="flex flex-col justify-evenly border-b border-[#e8e9e9] px-4 pb-5 pt-16 min-[992px]:flex-row min-[992px]:items-center min-[992px]:justify-between min-[992px]:border-transparent">
              <div>
                <Link href="/">
                  <Image
                    src="/image/footer/safelite-logo-not-reg.svg"
                    alt="Safelite Logo"
                    width={439.9}
                    height={73.6}
                    unoptimized
                    className="mx-auto mb-8 flex h-auto w-[145px] max-w-full min-[992px]:m-0"
                  />
                </Link>
              </div>
              <div>
                <ul className="m-0 flex items-center justify-center p-0 min-[992px]:mr-24">
                  {socialLinks.map((social) => (
                    <li key={social.href} className="mx-[1.4rem] list-none">
                      <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox={social.viewBox}
                          aria-hidden="true"
                          className="inline h-6 w-auto fill-[#4b4c4e] align-baseline hover:fill-[#0070d1]"
                        >
                          <path d={social.path} />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <hr className="relative left-1/2 right-1/2 -mx-[50vw] my-0 h-0 w-[99vw] max-w-[5000px] border-0 border-t border-[#e8e9e9] min-[992px]:flex" />

            {/* Footer Legal Links */}
            <section className="px-4">
              <ul className="m-0 grid list-none grid-cols-1 gap-1 py-8 text-center min-[768px]:grid-cols-[repeat(3,auto)] min-[992px]:grid-cols-[repeat(6,auto)] min-[992px]:grid-rows-[auto_auto]">
                {legalLinks.map((link) => {
                  const linkClass = `relative inline-block font-medium text-[#0a0a0a] no-underline transition-colors duration-200 ease-in-out hover:text-[#0070d1] focus-visible:text-[#0070d1] after:bottom-[2px] after:h-px after:transition-transform after:duration-200 after:ease-in-out ${underlineAfter}`;
                  return (
                    <li
                      key={link.label}
                      className={`py-2 text-[.75rem] font-semibold min-[992px]:row-start-1 ${link.privacyIcon ? "flex flex-row items-center justify-center" : ""
                        }`}
                    >
                      {link.cookieButton ? (
                        <button
                          type="button"
                          onClick={openCookiePreferences}
                          className={`${linkClass} cursor-pointer border-0 bg-transparent p-0 tracking-[inherit]`}
                        >
                          {link.label}
                        </button>
                      ) : (
                        <Link href={link.href!} className={linkClass}>
                          {link.label}
                        </Link>
                      )}
                      {link.privacyIcon && (
                        <Image
                          src="/image/footer/opt-out-icon.svg"
                          alt="California Consumer Privacy Act (CCPA) Opt-Out Icon."
                          width={29.2}
                          height={14}
                          unoptimized
                          className="ml-1 h-[14px] w-auto"
                        />
                      )}
                    </li>
                  );
                })}
                <li className="py-2 text-[.75rem] font-semibold text-[#525656] min-[768px]:col-span-full min-[992px]:row-start-2">
                  &copy;&nbsp;{year}&nbsp;Safelite Group
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <CookiePreferences />
    </footer>
  );
}