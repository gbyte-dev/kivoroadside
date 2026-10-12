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
    active: true,
  },
  {
    label: "Services & products",
    href: "/help-center/glass-damage-and-service/services-and-products",
    active: false,
  },
];

/* ----------------------- 14 Service Expectations FAQs ---------------------- */
interface FaqItem {
  id: string;
  question: string;
  answer: ReactNode;
}

const FAQS: FaqItem[] = [
  {
    id: "se-1",
    question: "Do you offer mobile auto glass service?",
    answer: (
      <p className={pClass}>
        Yes, we offer mobile auto glass service in most areas. When you request mobile service, a
        Safelite technician will come to your home, office or another convenient location.
      </p>
    ),
  },
  {
    id: "se-2",
    question: "How do I know if my appointment is mobile or in-shop?",
    answer: (
      <p className={pClass}>
        You can find your appointment details, including the location, by logging in to your account
        at{" "}
        <Link href="/my-appointment" className={linkClass}>
          mysafelite.com
        </Link>
        .
      </p>
    ),
  },
  {
    id: "se-3",
    question: "When is your soonest appointment?",
    answer: (
      <p className={pClass}>
        Visit{" "}
        <Link href="/schedule-service" className={linkClass}>
          safelite.com
        </Link>{" "}
        to book an auto-glass service appointment that works for your schedule. Make sure to have your
        license plate number or your VIN (vehicle identification number) handy, as you will need
        this to view appointment availability.
      </p>
    ),
  },
  {
    id: "se-4",
    question: "Where are you located, do you offer auto glass service in my area?",
    answer: (
      <p className={pClass}>
        We offer auto glass service to 97% of U.S. drivers in all 50 states. We offer both in-shop
        and mobile service in most areas. To confirm service in your area, use our{" "}
        <Link href="/store-locator" className={linkClass}>
          Store Locator
        </Link>{" "}
        to find a Safelite store or mobile pro near you.
      </p>
    ),
  },
  {
    id: "se-5",
    question: "What are your store hours?",
    answer: (
      <p className={pClass}>
        Safelite shop hours depend on location, but generally we open between 8AM and 9AM and close at
        5PM local time. To learn more about your specific shop, visit our{" "}
        <Link href="/store-locator" className={linkClass}>
          Store Locator
        </Link>{" "}
        page and see more details.
      </p>
    ),
  },
  {
    id: "se-6",
    question: "Will a Safelite technician come pick up my vehicle?",
    answer: (
      <p className={pClass}>
        We are not able to pick up your vehicle but we are able to send a technician to you through our
        mobile service.
      </p>
    ),
  },
  {
    id: "se-7",
    question: "Can I drop off my vehicle?",
    answer: (
      <>
        <p className={pClass}>
          Some Safelite shop locations offer Drop &amp; Go™ service for your convenience. You can
          verify Drop &amp; Go availability at your scheduled shop by texting{" "}
          <a href="sms:8008002727" className={linkClass}>
            800-800-2727
          </a>
          , or by contacting us at{" "}
          <Link href="/contact-us" className={linkClass}>
            safelite.com/contact-us
          </Link>
          .
        </p>
        <p className={pClass}>
          If your shop offers Drop &amp; Go, you&apos;ll need to drop off your vehicle between the
          shop’s opening time and 9 AM on the morning of your appointment. Park in any available
          parking space, then visit the shop’s front desk to drop off your keys.
        </p>
        <p className={pClass}>
          We’ll stay in touch with service updates before and during your service, and contact you
          with payment and pickup instructions when your vehicle is ready. If you’re unable to pick
          up your vehicle by 5 PM, it will need to be picked up the following business day.
        </p>
      </>
    ),
  },
  {
    id: "se-8",
    question: "Will you replace the stickers on my windshield?",
    answer: (
      <p className={pClass}>
        Yes, if possible. We will remove inspection stickers and other items affixed to your
        windshield and, if permitted by law, re-apply to the new windshield. Some states do not allow
        the inspection sticker to be re-applied to the new windshield and require that you purchase a
        new sticker within 3-5 days after a windshield replacement. Check with your state licensing
        agency for additional information on required inspections and stickers.
      </p>
    ),
  },
  {
    id: "se-9",
    question: "Where does my auto glass come from?",
    answer: (
      <p className={pClass}>
        Safelite buys its glass from the largest and most sophisticated glass manufacturers in the
        world; companies that work directly with and supply to the vehicle manufacturers. As more
        complexity and technology is integrated into vehicle glass, this approach allows us to deliver
        premier quality products and the best experience for our customers.
      </p>
    ),
  },
  {
    id: "se-10",
    question: "Will my new glass be OEM?",
    answer: (
      <p className={pClass}>
        Our long-standing industry partnerships allow us to source the highest quality parts at the
        best price possible. This means the glass installed in your vehicle is made by the same
        companies creating glass for today&apos;s top vehicle manufacturers. If your vehicle requires
        OEM glass, verify with a representative by calling{" "}
        <a href="tel:18008002727" className={linkClass}>
          800-800-2727
        </a>{" "}
        from the phone number associated with your appointment.
      </p>
    ),
  },
  {
    id: "se-11",
    question: "What is the difference between OEM and OEE auto glass?",
    answer: (
      <p className={pClass}>
        Original Equipment Manufacturer (OEM) auto glass is made by the same manufacturer as your
        original glass. Original Equipment Equivalent (OEE) auto glass is made to the same
        standards, but by a different manufacturer. Our customers can choose OEM or OEE prior to
        service by calling{" "}
        <a href="tel:18008002727" className={linkClass}>
          800-800-2727
        </a>
        .
      </p>
    ),
  },
  {
    id: "se-12",
    question: "Will my new windshield have my features?",
    answer: (
      <p className={pClass}>
        Yes. Our expert technicians are trained to not just repair and replace auto glass, but to make
        sure that any existing technology such as heads up displays or rain sensors are also
        restored and working properly. In some cases, this might also require a recalibration of
        your vehicle&apos;s advanced safety systems. If this is needed, your technician will keep you
        updated on your service details and help answer any questions you have.
      </p>
    ),
  },
  {
    id: "se-13",
    question: "Will my new windshield be tinted?",
    answer: (
      <p className={pClass}>
        Yes. Most vehicle glass is manufactured with a small almost unnoticeable amount of tint to
        help reduce glare and block UV rays. However, factory applied tint is not the same as darker
        tinting, which is also known as aftermarket tint. Every state has laws about tint color,
        darkness, and or reflection level. Check with your state&apos;s motor vehicle licensing agency
        for more information.
      </p>
    ),
  },
  {
    id: "se-14",
    question: "How do I cancel or reschedule an auto glass appointment?",
    answer: (
      <p className={pClass}>
        Simply visit{" "}
        <Link href="/my-appointment" className={linkClass}>
          mysafelite.com
        </Link>{" "}
        to view or edit your appointment at any time. If you choose to cancel a prepaid service
        booking, you will be refunded the full amount.
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

export default function ServiceExpectationsPage() {
  // Mobile accordion state (on desktop, ac-d-always-opened means always open)
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