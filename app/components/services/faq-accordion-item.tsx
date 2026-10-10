"use client";

import { useId, useState, type ReactNode } from "react";

export type FaqAccordionItemProps = {
  question: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export default function FaqAccordionItem({
  question,
  children,
  defaultOpen = false,
}: FaqAccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const uid = useId();
  const buttonId = `${uid}-btn`;
  const panelId = `${uid}-panel`;

  return (
    <div className="border-t border-[#cacbcc] py-[15px]">
      <button
        id={buttonId}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="group flex w-full cursor-pointer select-none items-center justify-between gap-3 text-left focus:outline-none md:pointer-events-none md:cursor-default"
      >
        <strong
          className={`block text-[16px] font-bold leading-[25px] tracking-[.02em] transition-colors md:text-black ${
            isOpen ? "text-[#0070d1]" : "text-black group-hover:text-[#0070d1]"
          }`}
        >
          {question}
        </strong>

        {/* Chevron icon: visible on mobile (< 768px), hidden on desktop (>= 768px) */}
        <span
          aria-hidden="true"
          className="shrink-0 transition-transform duration-300 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`h-4 w-4 transition-transform duration-300 ${
              isOpen ? "rotate-180 text-[#0070d1]" : "text-[#525656]"
            }`}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>

      {/* Answer container:
          - Mobile (< 768px): Animated collapsible accordion (open / close)
          - Desktop (>= 768px): Always opened (ac-d-always-opened), visible without collapse
      */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows,visibility,opacity] duration-300 ease-in-out md:block md:opacity-100 ${
          isOpen
            ? "visible grid-rows-[1fr] opacity-100"
            : "invisible grid-rows-[0fr] opacity-0 md:visible"
        }`}
      >
        <div className="min-h-0 overflow-hidden md:overflow-visible">
          <div className="pt-2.5 md:pt-0">{children}</div>
        </div>
      </div>
    </div>
  );
}

