"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cx } from "@/app/components/services/class-names";

const CATEGORIES = [
  { label: "Auto Expertise", menuLabel: "Auto expertise", href: "/resource-center/category/auto-experts" },
  { label: "Culture", menuLabel: "Culture", href: "/resource-center/category/culture" },
  // The reference's phone menu spells this "Curent events"
  { label: "Current events", menuLabel: "Curent events", href: "/resource-center/category/current-events" },
  { label: "Safety", menuLabel: "Safety", href: "/resource-center/category/car-safety" },
];

const SECONDARY_LINKS = [
  { label: "Connect with us", href: "/contact-us" },
  { label: "Go to Safelite.com", href: "/" },
];

// Header used on the resource center pages: logo and topic links from 768px
// (100px tall), and a logo with a "Menu" toggle below that (50px tall) that
// drops down the topic links.
export default function ResourceCenterHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative">
      <div className="relative flex h-[50px] w-full items-center justify-center gap-2 bg-white md:h-[100px]">
        {/* Desktop */}
        <div className="relative hidden h-full w-full max-w-[1020px] md:flex">
          <div className="absolute right-4 top-2 flex text-[14px] leading-[25px]">
            {SECONDARY_LINKS.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={cx(
                  "font-medium text-[#0070d1] no-underline hover:underline",
                  index === 0 && "mr-2 border-r border-[#cacbcc] pr-2",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="mr-auto flex items-center self-center px-4">
              <Link href="/" className="flex items-center border-b-2 border-t-4 border-transparent">
                <Image src="/image/safelite-logo.svg" alt="Safelite Logo" width={163} height={28} className="max-w-full" />
              </Link>
            </div>
            {CATEGORIES.map((category) => (
              <div key={category.href} className="flex items-center self-end px-4">
                <Link
                  href={category.href}
                  className="flex items-center border-y-4 border-transparent pb-4 font-semibold text-[#525656] no-underline hover:border-b-[#db0020] hover:text-[#db0020]"
                >
                  {category.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Phones and small tablets: logo | Menu/Close | hamburger */}
        <div className="grid w-full max-w-[1020px] grid-cols-[1fr_auto_auto] items-center px-4 md:hidden">
          <div className="max-w-[105px] justify-self-start">
            <Link href="/" className="flex">
              <Image src="/image/safelite-logo.svg" alt="Safelite Logo" width={105} height={18} className="max-w-full" />
            </Link>
          </div>
          <div className="font-semibold">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="resource-center-menu"
              className="relative mr-2 block w-max cursor-pointer select-none justify-self-end border-0 bg-transparent p-0 pb-[5px] font-medium leading-none text-[#525656]"
            >
              <span
                className={cx(
                  "pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 whitespace-nowrap transition-opacity duration-200 ease-[ease]",
                  open ? "opacity-0" : "opacity-100",
                )}
              >
                Menu
              </span>
              <span
                className={cx(
                  "pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 whitespace-nowrap transition-opacity duration-200 ease-[ease]",
                  open ? "opacity-100" : "opacity-0",
                )}
              >
                Close
              </span>
            </button>
          </div>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="resource-center-menu"
            className="relative block h-3 w-[18px] cursor-pointer justify-self-end border-0 bg-transparent p-0 [-webkit-tap-highlight-color:transparent]"
          >
            {[0, 1, 2].map((bar) => (
              <span
                key={bar}
                className={cx(
                  "absolute inset-x-0 h-[2px] rounded-[2px] bg-[#222] transition-[transform,opacity,top] duration-200 ease-[ease]",
                  bar === 0 && (open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"),
                  bar === 1 && cx("top-1/2 -translate-y-1/2", open && "opacity-0"),
                  bar === 2 && (open ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-[calc(100%-2px)]"),
                )}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Drop-down menu (phones) */}
      <div
        id="resource-center-menu"
        className={cx(
          "absolute top-[50px] z-[999] w-full overflow-hidden bg-white shadow-[0_8px_8px_rgba(0,0,0,.25)] md:top-[100px]",
          open ? "max-h-[500px] transition-[max-height] duration-500 ease-[ease]" : "max-h-0 transition-[max-height] duration-300 ease-[ease]",
        )}
      >
        <nav className="relative z-[999] grid w-full grid-cols-1 bg-white font-medium">
          <div>
            {CATEGORIES.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="block border-b border-[#e8e9e9] p-4 text-inherit no-underline"
              >
                {category.menuLabel}
              </Link>
            ))}
            {SECONDARY_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block border-b border-[#e8e9e9] bg-[#f4f4f4] p-4 text-[#0070d1] no-underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
