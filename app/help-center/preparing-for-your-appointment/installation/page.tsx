import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ContentBlock from "@/app/components/services/content-block";
import AdditionalFaqs from "@/app/components/services/additional-faqs";
import HelpCenterInnerNav from "@/app/components/services/help-center-inner-nav";
import WasPageHelpful from "@/app/components/services/was-page-helpful";
import FaqAccordionItem from "@/app/components/services/faq-accordion-item";

export const metadata: Metadata = {
  title: "Installation | Safelite",
  description:
    "Learn about what to expect during your Safelite auto glass installation or replacement appointment.",
};

const APPOINTMENT_TABS = [
  {
    label: "Preparation",
    href: "/help-center/preparing-for-your-appointment/preparation",
    active: false,
  },
  {
    label: "Installation",
    href: "/help-center/preparing-for-your-appointment/installation",
    active: true,
  },
];

export default function InstallationPage() {
  return (
    <ServicePageShell secondary={<AdditionalFaqs current="appointment" />} strongWeight="medium">
      {/* Title & Subtitle */}
      <ContentBlock className="mb-[-20px]! pt-10!">
        <h1 className="text-[32px] font-bold leading-[40px] tracking-[.03em] text-black md:leading-[44px]">
          Safelite FAQs
        </h1>
        <h4 className="pb-2.5 pt-1 text-[20px] font-normal leading-[30px] tracking-[.03em] text-black">
          Preparing for your appointment
        </h4>
      </ContentBlock>

      {/* Tabs */}
      <HelpCenterInnerNav tabs={APPOINTMENT_TABS} />

      {/* Questions list: Mobile Accordion (collapsible with chevron) / Desktop Always Open */}
      <div className="mx-auto max-w-[510px] px-[15px] md:max-w-[750px]">
        {/* Q1 */}
        <FaqAccordionItem question="What do I do if no one shows up for my mobile appointment?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            If for some reason your tech doesn&apos;t show up on the day of your appointment and you don&apos;t hear from
            them, call or text us immediately at{" "}
            <a href="sms:8008002727" className="text-[#0070d1] underline hover:no-underline">
              800-800-2727
            </a>{" "}
            from the phone number associated with your appointment to speak with a representative. We&apos;ll notify
            the shop that your technician didn&apos;t arrive and work to get your situation resolved as quickly as
            possible.
          </p>
        </FaqAccordionItem>

        {/* Q2 */}
        <FaqAccordionItem question="My rear view mirror is attached to my windshield. Will the technician attach it to the new windshield?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Yes, our auto glass technicians will remove your rear view mirror and attach it to your new windshield.
          </p>
        </FaqAccordionItem>

        {/* Q3 */}
        <FaqAccordionItem question="Will you vacuum my vehicle after service?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Yes, our technicians will vacuum any pieces of broken auto glass in your vehicle.
          </p>
        </FaqAccordionItem>

        {/* Q4 */}
        <FaqAccordionItem question="Will any part of my vehicle be harmed during the auto glass repair or replacement process?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            No, your vehicle should not be damaged during the repair or replacement. We use precautionary measures, such
            as protective drapes, to ensure that no damage occurs during your auto glass service.
          </p>
        </FaqAccordionItem>

        {/* Q5 */}
        <FaqAccordionItem question="How long will it be before I can safely drive my vehicle?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            You can usually drive away one hour after a windshield replacement, or immediately after a repair or side
            window replacement. Our technicians use the best materials, including the industry&apos;s first adhesive
            with a one-hour drive-away time for windshield installations. The technician will advise you if any
            additional time is required.
          </p>
        </FaqAccordionItem>

        {/* Q6 */}
        <FaqAccordionItem question="How do I cancel or reschedule an auto glass appointment?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Simply visit{" "}
            <Link href="/my-appointment" className="text-[#0070d1] underline hover:no-underline">
              mysafelite.com
            </Link>{" "}
            to view or edit your appointment at any time. If you choose to cancel a prepaid service booking, you will be
            refunded the full amount.
          </p>
        </FaqAccordionItem>

        {/* Was this page helpful? */}
        <WasPageHelpful />
      </div>
    </ServicePageShell>
  );
}
