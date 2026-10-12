"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/app/components/site-header";
import SiteFooter from "@/app/components/site-footer";
import DontWaitCta from "@/app/components/dont-wait-cta";

/* ----------------------------- Typography tokens ---------------------------- */
const linkClass = "font-medium text-[#0070d1] no-underline hover:underline hover:decoration-[#0070d1]";
const pClass = "pb-[10px] text-[16px] font-normal leading-[25px] tracking-[.03em] text-[#525656]";

/* ------------------------------ Sub-nav tabs ----------------------------- */
const TABS = [
  {
    label: "Glass damage",
    href: "/help-center/glass-damage-and-service/glass-damage",
    active: false,
  },
  {
    label: "Service expectations",
    href: "/help-center/glass-damage-and-service/service-expectations",
    active: false,
  },
  {
    label: "Services & products",
    href: "/help-center/glass-damage-and-service/services-and-products",
    active: true,
  },
];

/* ----------------------- 9 Services & Products FAQs ----------------------- */
interface FaqItem {
  id: string;
  question: string;
  answer: ReactNode;
}

const FAQS: FaqItem[] = [
  {
    id: "sp-1",
    question: "Do you repair rearview mirrors or side/door mirrors?",
    answer: (
      <p className={pClass}>
        Being the nation&apos;s number one autoglass specialist means we can do it all. Beyond side,
        front, or rear vehicle glass, we also replace rearview and side mirrors. We’ll even vacuum
        your vehicle and clean the glass when we’re finished.
      </p>
    ),
  },
  {
    id: "sp-2",
    question: "Can you fix my windshield leak/seal?",
    answer: (
      <p className={pClass}>
        We can repair your windshield leak, but we&apos;ll need to replace your windshield and
        provide a new seal. Our technicians are not able to seal glass installed by a non Safelite
        shop. This is primarily for your protection since any work we do would cause the other
        shops warranty to become void. We stand by our own installation work from start to finish.
        Another glass service provider should too. Your new windshield will be covered by our
        nationwide lifetime warranty for as long as you own or lease the vehicle.
      </p>
    ),
  },
  {
    id: "sp-3",
    question: "Can you repair or replace my sunroof?",
    answer: (
      <p className={pClass}>
        No, at the time Safelite cannot repair or replace your sunroof glass. We only fix
        windshields, side windows and rear windows.
      </p>
    ),
  },
  {
    id: "sp-4",
    question: "Do you offer window tinting services?",
    answer: (
      <p className={pClass}>
        Unfortunately, we do not offer a window tinting service at this time.
      </p>
    ),
  },
  {
    id: "sp-5",
    question: "Does Safelite repair or replace glass on rental vehicles?",
    answer: (
      <p className={pClass}>
        Yes. We service short term rental vehicles. In addition to owned or leased vehicles, commercial
        and fleet vehicles, and RVs, and semi trucks. Be sure to check with your rental company or
        your insurance provider to verify what costs may be covered.
      </p>
    ),
  },
  {
    id: "sp-6",
    question: "Do you offer wiper blades?",
    answer: (
      <>
        <p className={pClass}>
          Yes, we offer quality Safelite advanced memory curve beam blades for an additional cost at
          the time of service. We install them for free when we repair or replace your glass.
        </p>
        <p className={pClass}>
          Because most major driving decisions are based on having a clear, unobstructed view,
          experts recommend replacing your windshield wipers every six months or 6,000 miles.
        </p>
        <p className={pClass}>
          Continuing to drive with worn or damaged blades can damage your windshield, so it&apos;s
          important to ensure you have adequate blades when you have your windshield repaired or
          replaced.
        </p>
      </>
    ),
  },
  {
    id: "sp-7",
    question: "How can I add a service or product to my upcoming appointment?",
    answer: (
      <p className={pClass}>
        To add windshield wipers, glass cleaner, or rain repellent to your upcoming appointment, log in
        to{" "}
        <Link href="/my-appointment" className={linkClass}>
          mysafelite.com
        </Link>{" "}
        to access your appointment details and add products to your service. If you are interested in
        adding an additional service, such as a second glass repair, please call{" "}
        <a href="tel:8008002727" className={linkClass}>
          800-800-2727
        </a>{" "}
        from the phone number associated with your appointment, and someone will help you.
      </p>
    ),
  },
  {
    id: "sp-8",
    question: "How can I remove a service or product from my upcoming appointment?",
    answer: (
      <p className={pClass}>
        To remove windshield wipers, glass cleaner, or rain repellent from your upcoming appointment,
        log in to{" "}
        <Link href="/my-appointment" className={linkClass}>
          mysafelite.com
        </Link>{" "}
        to access your appointment details and open the Cost breakdown to remove products from your
        service. If you would like to remove an additional service, such as a second glass repair,
        please call{" "}
        <a href="tel:8008002727" className={linkClass}>
          800-800-2727
        </a>{" "}
        from the phone number associated with your appointment, and someone will help you.
      </p>
    ),
  },
  {
    id: "sp-9",
    question: "Can I buy wipers in the shop?",
    answer: (
      <p className={pClass}>
        When scheduling your appointment, select our Premium or Standard service package to include
        wiper blades in your service. If you&apos;ve already finished scheduling, log in to{" "}
        <Link href="/my-appointment" className={linkClass}>
          mysafelite.com
        </Link>{" "}
        to access your appointment details and add wipers to your service. You can also tell your
        technician that you&apos;d like to add them, and they&apos;ll install them for you at the time
        of your service.
      </p>
    ),
  },
];

/* ----------------- 5 Additional FAQ Cards (Matches Safelite) ---------------- */
const ADDITIONAL_FAQ_CARDS = [
  {
    label: "Preparing for your appointment",
    href: "/help-center/preparing-for-your-appointment",
    icon: "/image/help-center/wrench.png",
    width: 65,
    height: 66,
  },
  {
    label: "Cost, payment, and billing",
    href: "/help-center/cost",
    icon: "/image/help-center/pricetag.png",
    width: 61,
    height: 62,
  },
  {
    label: "Insurance coverage and claims",
    href: "/help-center/insurance-coverage",
    icon: "/image/help-center/checklist.png",
    width: 51,
    height: 66,
  },
  {
    label: "Warranty details",
    href: "/help-center/warranty",
    icon: "/image/help-center/shield.png",
    width: 55,
    height: 66,
  },
  {
    label: "Marketing and privacy",
    href: "/help-center/marketing-and-privacy",
    icon: "/image/help-center/lock.png",
    width: 49,
    height: 58,
  },
];

export default function ServicesAndProductsPage() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <SiteHeader />
      <main className="bg-white font-['Urbanist',Roboto,Arial,Helvetica,sans-serif]">
        {/* Top Header Block: "Safelite FAQs" & "Glass damage and service" */}
        <section className="mx-auto max-w-[510px] md:max-w-[750px] px-[15px] pt-10">
          <div>
            <h1 className="text-[32px] font-bold text-black leading-[44px] tracking-[.03em] m-0">
              Safelite FAQs
            </h1>
            <h4 className="text-[20px] font-normal text-black leading-[30px] tracking-[.03em] pt-[2px] pb-[10px] m-0">
              Glass damage and service
            </h4>
          </div>
        </section>

        {/* Navigation Tabs (inner-nav) */}
        <nav className="mx-auto max-w-[510px] md:max-w-[750px] px-[15px] -mt-[10px]">
          <ul className="m-0 flex list-none justify-between md:justify-start p-0 pb-0 md:pb-[10px] border-b border-[#cacbcc]">
            {TABS.map((tab, idx) => (
              <li
                key={tab.label}
                className={`shrink-0 uppercase text-[14px] tracking-[0.75px] ${
                  idx > 0 ? "ml-[15px] md:ml-[50px]" : ""
                }`}
              >
                {tab.active ? (
                  <span className="relative inline-block pb-[10px] font-medium text-[#db0020] cursor-default select-none whitespace-nowrap after:content-[''] after:block after:absolute after:top-full after:left-0 after:right-0 after:h-[5px] after:bg-[#0070d1] after:-mt-[1px]">
                    {tab.label}
                  </span>
                ) : (
                  <Link
                    href={tab.href}
                    className="inline-block pb-[10px] font-medium text-[#525656] hover:text-[#0070d1] no-underline whitespace-nowrap transition-colors"
                  >
                    {tab.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Accordion List (ac-d-always-opened: always open on desktop, collapsible on mobile)
            Matches exact Safelite spacing: mt-5 from tabs border line, no top border on item 1 */}
        <div className="mx-auto max-w-[510px] md:max-w-[750px] px-[15px] mt-5">
          {FAQS.map((faq, idx) => {
            const isOpen = Boolean(openIds[faq.id]);
            return (
              <div
                key={faq.id}
                className={idx > 0 ? "border-t border-[#cacbcc] pt-5 mt-2.5" : ""}
              >
                {/* Accordion header: <strong class="collapsible"> */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left relative block cursor-pointer md:cursor-default select-none mb-2.5 pr-[40px] md:pr-0 focus:outline-none"
                >
                  <strong className="block text-[16px] font-medium text-black leading-[25px] tracking-[.03em]">
                    {faq.question}
                  </strong>

                  {/* Red Chevron: only visible on mobile (< 768px), hidden on desktop matching ac-d-always-opened */}
                  <span
                    aria-hidden="true"
                    className={`md:hidden absolute right-[2.5px] top-[14px] w-[12px] h-[12px] border-r-2 border-b-2 border-[#db0020] rounded-[2px] transition-transform duration-200 pointer-events-none ${
                      isOpen ? "-rotate-[135deg] translate-y-[-2px]" : "rotate-45 translate-y-[-6px]"
                    }`}
                  />
                </button>

                {/* Answer: Always visible on desktop (ac-d-always-opened), collapsible on mobile */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out md:block md:opacity-100 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0 overflow-hidden md:overflow-visible"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden md:overflow-visible">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Divider */}
        <div className="mx-auto max-w-[510px] md:max-w-[750px] px-[15px] my-[30px]">
          <div className="h-[1px] w-full bg-[#cacbcc]" />
        </div>

        {/* Additional FAQs Section */}
        <section className="mx-auto max-w-[1020px] px-[15px] mb-10">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-10 mb-8">
            {/* Left Column: Heading + Red Bar */}
            <div className="w-full md:w-[45%]">
              <h2 className="text-[26px] font-light leading-[35px] tracking-[.03em] text-black pb-5 m-0 text-left">
                Additional FAQs
              </h2>
              <div className="w-[120px] h-[5px] bg-[#db0020] -mt-[10px]" />
            </div>

            {/* Right Column: Explanatory text with link */}
            <div className="w-full md:w-[50%]">
              <p className="text-[16px] font-normal leading-[25px] tracking-[.03em] text-[#525656] m-0">
                To read more FAQs from our{" "}
                <Link
                  href="/help-center"
                  className="font-medium text-[#0070d1] no-underline hover:underline hover:decoration-[#0070d1]"
                >
                  help center
                </Link>
                , please select from below or search for a topic.
              </p>
            </div>
          </div>

          {/* 5 Two-Tone Icon Cards (cards-navigation cards-fifths) */}
          <nav className="w-full" aria-label="Additional FAQ topics">
            <div className="flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-[24px]">
              {ADDITIONAL_FAQ_CARDS.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group flex-1 w-full md:w-[calc(20%-20px)] bg-white border-2 border-[#dcdcdc] rounded-[16px] flex flex-col items-center tracking-[.03em] transition-shadow duration-200 hover:shadow-[0_3px_16px_rgba(0,0,0,0.3)] no-underline"
                >
                  {/* Card Image */}
                  <div className="mt-5 h-[70px] flex items-center justify-center shrink-0">
                    <Image
                      src={card.icon}
                      alt={card.label}
                      width={card.width}
                      height={card.height}
                      className="max-h-[66px] w-auto object-contain"
                    />
                  </div>

                  {/* Card Content & Link Text */}
                  <div className="p-[15px_20px] w-full text-center flex items-center justify-center min-h-[70px]">
                    <span className="text-[#0070d1] text-[16px] font-medium leading-[25px] text-center group-hover:underline group-hover:decoration-[#0070d1]">
                      {card.label}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </nav>
        </section>

        {/* Bottom CTA */}
        <DontWaitCta />
      </main>
      <SiteFooter />
    </>
  );
}