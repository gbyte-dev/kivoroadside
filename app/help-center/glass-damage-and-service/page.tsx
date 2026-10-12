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
    active: true,
  },
  {
    label: "Service expectations",
    href: "/help-center/glass-damage-and-service/service-expectations",
    active: false,
  },
  {
    label: "Services & products",
    href: "/help-center/glass-damage-and-service/services-and-products",
    active: false,
  },
];

/* ------------------------------- 11 FAQ Items ------------------------------ */
interface FaqItem {
  id: string;
  question: string;
  answer: ReactNode;
}

const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is repair, replacement, and recalibration?",
    answer: (
      <>
        <p className={pClass}>
          A{" "}
          <Link href="/windshield-repair" className={linkClass}>
            windshield repair
          </Link>{" "}
          is needed when your front or rear windshield has a small crack or chip. Our technicians
          inject a special resin into the damaged area before polishing to restore the glass&apos;s
          close to its original form as possible.
        </p>
        <p className={pClass}>
          A{" "}
          <Link href="/windshield-replacement" className={linkClass}>
            windshield replacement
          </Link>{" "}
          occurs when auto glass damage is too large to repair and the technician must replace the
          entire part using our true seal technology.
        </p>
        <p className={pClass}>
          A{" "}
          <Link href="/windshield-camera-recalibration" className={linkClass}>
            recalibration
          </Link>{" "}
          follows a windshield replacement. Specialty trained technicians use advanced equipment and
          processes to recalibrate the camera connected to the front windshield. This ensures the
          advanced safety system features, like automatic emergency braking or lane keep assist, all
          work as the vehicle manufacturer intended following your service.
        </p>
      </>
    ),
  },
  {
    id: "faq-2",
    question: "How do you determine when to repair and when to replace?",
    answer: (
      <p className={pClass}>
        When it comes to auto glass, we have a repair first mindset. So if we can repair it, we
        will. However, there are instances when a replacement becomes necessary For example, if you
        have more than three chips or cracks, if the damage blocks your field of vision or the
        damage sits in the forward facing camera&apos;s line of sight, you&apos;ll likely need a
        replacement. Our expert technicians can confirm your exact service needs after they&apos;ve
        inspected the damage.
      </p>
    ),
  },
  {
    id: "faq-3",
    question: "Does Safelite repair long cracks in the windshield?",
    answer: <p className={pClass}>We will repair cracks that are smaller than six inches.</p>,
  },
  {
    id: "faq-4",
    question:
      "Can you guarantee that a chip or crack in my windshield that can be repaired will not become larger during the repair process?",
    answer: (
      <>
        <p className={pClass}>
          No. In some cases, through no fault of the repair technician, the attempt to repair a
          windshield can result in the chip or crack becoming larger. However, we can guarantee that
          upon completion of a successful repair, the chip or crack will not crack further and that
          the repair will pass any state vehicle inspection, or we will credit the cost of the
          repair toward a replacement.
        </p>
        <p className={pClass}>
          In the very rare event that this occurs, we will credit the cost of the repair either
          toward a new windshield or, in the event of insurance work, back to the insurance company.
          Read our{" "}
          <Link href="/national-lifetime-warranty" className={linkClass}>
            windshield repair limited warranty
          </Link>{" "}
          for more details.
        </p>
      </>
    ),
  },
  {
    id: "faq-5",
    question:
      "Can you guarantee that the chip or crack will be invisible after the windshield repair has been completed?",
    answer: (
      <>
        <p className={pClass}>
          No. A windshield chip or crack repair is used to prevent further damage to your glass and
          to restore the structural integrity of the vehicle. While each incident of damage is
          unique, with most successful repairs, a slight blemish or imperfection where the impact
          occurred is normal. In most cases, you should expect the cosmetic appearance of the repair
          to show some improvement as compared to the damage prior to the repair.
        </p>
        <div className="mt-2 mb-2">
          <Image
            src="/image/help-center/cosmetic-repair.jpg"
            alt="Cosmetic appearance of windshield repair"
            width={600}
            height={344}
            sizes="(max-width: 768px) 100vw, 600px"
            className="h-auto w-full max-w-[600px] rounded border border-gray-200"
          />
        </div>
      </>
    ),
  },
  {
    id: "faq-6",
    question: "What happens if you can’t repair my windshield and need to replace it instead?",
    answer: (
      <p className={pClass}>
        It does occasionally happen that the technician will determine upon inspecting your
        vehicle, that the windshield damage calls for a full replacement instead of a repair. If
        that happens, we&apos;ll update your service order and determine if we have your vehicle&apos;s
        specific glass part on hand. And if we need more time to access your part, we&apos;ll help
        you with rescheduling too.
      </p>
    ),
  },
  {
    id: "faq-7",
    question: "Why do I need recalibration with a windshield replacement?",
    answer: (
      <p className={pClass}>
        If your vehicle has advanced safety systems, things like automatic emergency braking,
        lane keep assist, and forward collision warning use data from a camera connected to your
        front windshield to keep you safe. If your windshield is damaged and needs to be replaced,
        having this camera recalibrated is a must before heading back out on the road. Recalibration
        is the process of bringing your vehicle&apos;s camera back to its original equipment
        manufacturer&apos;s specifications so you can drive with confidence knowing your safety
        features are working as they should.
      </p>
    ),
  },
  {
    id: "faq-8",
    question: "What are the benefits of recalibration?",
    answer: (
      <p className={pClass}>
        Newer vehicles come equipped with advanced safety systems, things like automatic emergency
        braking, lane keep assist, and forward collision warning that help keep drivers safe on the
        road. When a vehicle&apos;s windshield is replaced, the camera connected to the glass is
        removed and reconnected. Even a slight misplacement of just one millimeter can affect your
        vehicle&apos;s ability to properly detect roadway hazards, lane markings, and traffic.
        Recalibration ensures these features are brought back to original equipment manufacturer
        specifications so they function as intended.
      </p>
    ),
  },
  {
    id: "faq-9",
    question: "What is the difference between a static and dynamic recalibration?",
    answer: (
      <p className={pClass}>
        A static recalibration requires a specific target image mounted on a fixture in front of
        the vehicle during the recalibration process, while a dynamic recalibration requires the
        technician to drive the vehicle at a set speed on well-marked roads to complete the
        process. In some cases, a vehicle may require both a static and dynamic recalibration.
      </p>
    ),
  },
  {
    id: "faq-10",
    question: "Can my recalibration be done in a mobile appointment?",
    answer: <p className={pClass}>Yes, we can perform recalibrations during mobile appointments.</p>,
  },
  {
    id: "faq-11",
    question: "Can you fix multiple vehicles in the same visit?",
    answer: (
      <p className={pClass}>
        We can often service multiple vehicles during a single visit depending on part and technician
        availability. You&apos;ll simply need to schedule a separate appointment for each vehicle.
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

export default function GlassDamageAndServicePage() {
  // Collapsible accordion state: closed by default matching Safelite
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

        {/* Accordion List (Collapsible on BOTH Desktop & Mobile matching Safelite) */}
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
                  className="w-full text-left relative block cursor-pointer select-none mb-2.5 pr-[40px] focus:outline-none"
                >
                  <strong className="block text-[16px] font-medium text-black leading-[25px] tracking-[.03em]">
                    {faq.question}
                  </strong>

                  {/* Authentic Safelite CSS Red Chevron */}
                  <span
                    aria-hidden="true"
                    className={`absolute right-[2.5px] top-[14px] w-[12px] h-[12px] border-r-2 border-b-2 border-[#db0020] rounded-[2px] transition-transform duration-200 pointer-events-none ${
                      isOpen ? "-rotate-[135deg] translate-y-[-2px]" : "rotate-45 translate-y-[-6px]"
                    }`}
                  />
                </button>

                {/* Collapsible Answer */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0 overflow-hidden"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
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