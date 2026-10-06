"use client";

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import { STATE_LOCATIONS } from "./store-locations";

// States fill the columns top to bottom: 2 columns from 768px, 3 from 992px
const GRID_ROWS = {
  "--rows-2": Math.ceil(STATE_LOCATIONS.length / 2),
  "--rows-3": Math.ceil(STATE_LOCATIONS.length / 3),
} as CSSProperties;

const PANEL_DURATION = 250;

// Store list dropping down over the content below its state. It slides open
// and closed by animating its height, like the reference's collapse.
function StatePanel({ id, open, children }: { id: string; open: boolean; children: ReactNode }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const shownOpen = useRef(open);

  useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel || shownOpen.current === open) return;
    shownOpen.current = open;
    panel.style.display = "block";
    const height = `${panel.scrollHeight}px`;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (!open) panel.style.display = "none";
      return;
    }
    const animation = panel.animate(
      [
        { height: open ? "0px" : height, overflow: "hidden" },
        { height: open ? height : "0px", overflow: "hidden" },
      ],
      { duration: PANEL_DURATION, easing: "ease-in-out" },
    );
    if (!open) {
      animation.onfinish = () => {
        panel.style.display = "none";
      };
    }
    return () => animation.cancel();
  }, [open]);

  return (
    <div ref={panelRef} id={id} className="absolute left-0 top-full z-20 hidden w-full">
      {children}
    </div>
  );
}

// All 50 states; one store list open at a time. Clicking outside the list closes it.
export default function StateAccordion() {
  const listRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const handleClick = (event: MouseEvent) => {
      if (!listRef.current?.contains(event.target as Node)) setOpenIndex(null);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [openIndex]);

  return (
    <div
      ref={listRef}
      id="sl-accordion-list"
      style={GRID_ROWS}
      className="mx-auto mb-8 grid max-w-[510px] grid-cols-1 gap-x-4 rounded-[8px] bg-white px-4 pb-10 md:max-w-[1020px] md:grid-flow-col md:content-start md:max-[992px]:grid-cols-2 md:max-[992px]:grid-rows-[repeat(var(--rows-2),auto)] min-[992px]:grid-cols-3 min-[992px]:grid-rows-[repeat(var(--rows-3),auto)]"
    >
      {STATE_LOCATIONS.map((state, index) => {
        const isOpen = openIndex === index;
        const panelId = `collapse${index + 1}`;
        return (
          <div key={state.name} className={`relative ${isOpen ? "z-30" : ""}`}>
            <h2 className="max-w-none! overflow-hidden border-b border-[#cacbcc] pb-0! text-[16px]! font-medium!">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`relative flex h-[60px] w-full cursor-pointer items-center px-0 py-3 text-left font-[Arial] text-base font-medium leading-[normal] tracking-normal text-black transition-[color,background-color,border-color,box-shadow,border-radius] duration-150 ease-[ease-in-out] hover:z-[2] focus:z-[3] focus:shadow-[0_0_0_.25rem_rgba(0,112,209,.25)] focus:outline-0 ${
                  isOpen ? "bg-white shadow-none!" : "bg-transparent"
                }`}
              >
                {state.name}
                <svg
                  className={`ml-auto size-5 shrink-0 fill-[#db0020] transition-all duration-[250ms] ease-[ease-in-out] ${isOpen ? "-rotate-180" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
            </h2>
            <StatePanel id={panelId} open={isOpen}>
              <div className="mt-2 flex flex-col gap-1.5 rounded-[8px] border border-[#cacbcc] bg-white p-4 shadow-[0_8px_24px_rgba(55,56,57,.32),0_4px_8px_rgba(55,56,57,.24)]">
                {state.stores.map(([href, city, address]) => (
                  <Link
                    key={href}
                    href={href}
                    prefetch={false}
                    className="group/store grid grid-cols-2 items-baseline p-0 text-[#525656]! no-underline!"
                  >
                    <span className="text-[#0070d1] group-hover/store:underline">{city}</span>
                    <span>{address}</span>
                  </Link>
                ))}
                <Link
                  href={state.href}
                  prefetch={false}
                  className="group/store mt-4 grid grid-cols-1 items-baseline p-0 text-[#525656]! no-underline!"
                >
                  <span className="text-[#0070d1] group-hover/store:underline">View {state.name} locations</span>
                </Link>
              </div>
            </StatePanel>
          </div>
        );
      })}
    </div>
  );
}
