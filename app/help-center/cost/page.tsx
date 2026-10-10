import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ContentBlock from "@/app/components/services/content-block";
import AdditionalFaqs from "@/app/components/services/additional-faqs";
import HelpCenterInnerNav from "@/app/components/services/help-center-inner-nav";
import WasPageHelpful from "@/app/components/services/was-page-helpful";
import FaqAccordionItem from "@/app/components/services/faq-accordion-item";

export const metadata: Metadata = {
  title: "Cost, payment, and billing | Safelite",
  description:
    "Learn more about auto glass service cost, payment options, and billing through our help center FAQs. Book your appointment today.",
};

const COST_TABS = [
  { label: "Service cost", href: "/help-center/cost", active: true },
  { label: "Payment & billing", href: "/help-center/cost/payment-and-billing", active: false },
];

export default function CostPage() {
  return (
    <ServicePageShell secondary={<AdditionalFaqs current="cost" />} strongWeight="medium">
      {/* Title & Subtitle */}
      <ContentBlock className="mb-[-20px]! pt-10!">
        <h1 className="text-[32px] font-bold leading-[40px] tracking-[.03em] text-black md:leading-[44px]">
          Safelite FAQs
        </h1>
        <h4 className="pb-2.5 pt-1 text-[20px] font-normal leading-[30px] tracking-[.03em] text-black">
          Cost, payment, and billing
        </h4>
      </ContentBlock>

      {/* Tabs */}
      <HelpCenterInnerNav tabs={COST_TABS} />

      {/* Questions list: Mobile Accordion (collapsible with chevron) / Desktop Always Open */}
      <div className="mx-auto max-w-[510px] px-[15px] md:max-w-[750px]">
        {/* Q1 */}
        <FaqAccordionItem question="What's the best way to book an appointment or to get a quote?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Visit{" "}
            <Link href="/schedule-service" className="text-[#0070d1] underline hover:no-underline">
              safelite.com
            </Link>{" "}
            to receive an auto glass quote or to book an appointment. You can choose to pay on your own or with
            insurance. To make the process easy, Safelite works closely with most major insurance companies, so we can
            take care of your insurance claim too.
          </p>
        </FaqAccordionItem>

        {/* Q2 */}
        <FaqAccordionItem question="How much will it cost?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Your auto glass service cost will depend on a number of factors, including the location and severity of
            your glass damage, local and state taxes, as well as if we&apos;re able to repair the glass or if we&apos;ll
            need to replace it.
          </p>
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Many people don&apos;t realize the cost of their windshield repair or replacement is often fully covered by
            insurance. To make the process easy and stress free, Safelite works closely with most major insurance
            companies. Simply provide your policy information, and we&apos;ll take care of your insurance claim for
            you.
          </p>
        </FaqAccordionItem>

        {/* Q3 */}
        <FaqAccordionItem question="What does my quote include?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Your auto glass quote includes the cost of the glass and labor. Local and state taxes, as well as any
            required moldings or fees, may be an additional charge. The technician will notify you of any additional
            charges before starting the work.
          </p>
        </FaqAccordionItem>

        {/* Q4 */}
        <FaqAccordionItem question="Do you offer AAA, military or senior discounts?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            We’re happy to offer a discount for members of the military, AAA, AARP, and first responders. If you’re a
            member of one of these groups, you may use promo code 10THANKYOU10 to receive 10% off your order — please be
            prepared to verify your eligibility for this discount at the time of your appointment. This offer is valid on
            any product or service other than recalibration and cannot be applied to insurance claims or deductibles. To
            schedule service with this discount,{" "}
            <Link
              href="/schedule-service?start_type=fmg&promo=10THANKYOU10"
              className="text-[#0070d1] underline hover:no-underline"
            >
              click here
            </Link>
            .
          </p>
        </FaqAccordionItem>

        {/* Q5 */}
        <FaqAccordionItem question="Why isn’t my promo code working?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Here&apos;s a few things you can try if your promo code generates an error message.
          </p>
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            First, check to make sure you enter the code correctly. This includes things like an extra space in front of
            the promo code before pasting it into the code entry field.
          </p>
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Next, look to see if the promo code expired.
          </p>
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Lastly, be sure to read the promo code&apos;s eligibility requirements to make sure your order meets them.
          </p>
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            If you&apos;ve verified your promo code is valid, but it still won&apos;t work, you can either call us at{" "}
            <a href="tel:18008002727" className="text-[#0070d1] underline hover:no-underline">
              800-800-2727
            </a>{" "}
            or wait to pay at service completion and ask your technician for assistance.
          </p>
        </FaqAccordionItem>

        {/* Q6 */}
        <FaqAccordionItem question="Why is there a disposal or recycling fee?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Windshield glass has added features like lamination. Unlike regular glass, it can pollute the environment
            if just thrown in the trash. That&apos;s why you can&apos;t dispose of it yourself. We work closely with
            Shark Glass Recycling North America to dispose of your glass and its component parts, and repurpose as much
            of the material as possible into new products. In fact, the carpeting in our home office is made of recycled
            glass.
          </p>
        </FaqAccordionItem>

        {/* Was this page helpful? */}
        <WasPageHelpful />
      </div>
    </ServicePageShell>
  );
}
