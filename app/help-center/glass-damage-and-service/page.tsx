"use client";

import { useEffect, useId, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ContentBlock from "@/app/components/services/content-block";
import AdditionalFaqs from "@/app/components/services/additional-faqs";

/* ----------------------------- Styles / tokens ---------------------------- */
const linkClass = "font-medium text-[#0070d1] hover:underline";
const pClass = "pb-[10px]";

import HelpCenterInnerNav from "@/app/components/services/help-center-inner-nav";
import WasPageHelpful from "@/app/components/services/was-page-helpful";

/* ------------------------------ Inner sub-nav ----------------------------- */
const TABS = [
  { label: "Glass damage", href: "/help-center/glass-damage-and-service", active: true },
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

import FaqAccordionItem from "@/app/components/services/faq-accordion-item";

/* ------------------------------- FAQ content ------------------------------ */
const FAQS: { id: string; question: string; answer: ReactNode }[] = [
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
        <div className="mt-3">
          <Image
            src="/image/help-center/cosmetic-repair.jpg"
            alt="Cosmetic appearance of windshield repair"
            width={600}
            height={344}
            sizes="(max-width: 768px) 100vw, 600px"
            className="h-auto w-full max-w-[600px]"
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
        It does occasionally happen that the technician will determine upon inspecting your vehicle,
        that the windshield damage calls for a full replacement instead of a repair. If that
        happens, we&apos;ll update your service order and determine if we have your vehicle&apos;s
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
        If your vehicle has advanced safety systems, things like automatic emergency braking, lane
        keep assist, and forward collision warning use data from a camera connected to your front
        windshield to keep you safe. If your windshield is damaged and needs to be replaced, having
        this camera recalibrated is a must before heading back out on the road. Recalibration is the
        process of realigning the forward facing camera using precision technology in a controlled
        environment, so your advanced safety systems continue to work correctly. It&apos;s about
        safety. Which is why all vehicle manufacturers require camera recalibration after a
        windshield replacement.
      </p>
    ),
  },
  {
    id: "faq-8",
    question: "What are the benefits of recalibration?",
    answer: (
      <p className={pClass}>
        Newer vehicles come equipped with advanced safety systems, things like automatic emergency
        braking, lane keep assist, and forward collision warning that act as an extra set of eyes
        and ears to keep you safe while you&apos;re driving. These systems use data from a camera
        connected to your windshield. Most vehicle manufacturers require that this camera be
        recalibrated after a windshield replacement, so your safety features continue to work
        properly. Safelite&apos;s technicians are experts in recalibration and can usually perform
        both the replacement and the recalibration in a single appointment for your convenience.
      </p>
    ),
  },
  {
    id: "faq-9",
    question: "What is the difference between a static and dynamic recalibration?",
    answer: (
      <p className={pClass}>
        A static recalibration requires a specific target image mounted on a fixture in front of the
        vehicle during the recalibration process, while a dynamic recalibration involves driving the
        vehicle at a set speed on well-marked roads to recalibrate the camera system. The type of
        recalibration required depends on the vehicle and type of service needed. Safelite is able
        to perform both types of recalibrations in either a mobile or in-shop environment.
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
        We can often service multiple vehicles during a single visit depending on part and
        technician availability. You&apos;ll simply need to schedule a separate appointment for each
        vehicle.
      </p>
    ),
  },
];

/* ---------------------------------- Page ---------------------------------- */
export default function GlassDamageAndServicePage() {
  useEffect(() => {
    document.title = "Auto Glass Damage & Service FAQs | Safelite";
  }, []);

  return (
    <ServicePageShell secondary={<AdditionalFaqs current="damage" />} strongWeight="medium">
      <ContentBlock className="mb-[-20px]! pt-10!">
        <h1>Safelite FAQs</h1>
        <h4>Glass damage and service</h4>
      </ContentBlock>

      <HelpCenterInnerNav tabs={TABS} />

      <div className="mx-auto mb-4 max-w-[510px] px-[15px] md:max-w-[750px]">
        {FAQS.map((faq) => (
          <FaqAccordionItem key={faq.id} question={faq.question}>
            {faq.answer}
          </FaqAccordionItem>
        ))}

        <WasPageHelpful />
      </div>
    </ServicePageShell>
  );
}