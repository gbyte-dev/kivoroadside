import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ContentBlock from "@/app/components/services/content-block";
import AdditionalFaqs from "@/app/components/services/additional-faqs";
import WasPageHelpful from "@/app/components/services/was-page-helpful";
import FaqAccordionItem from "@/app/components/services/faq-accordion-item";

export const metadata: Metadata = {
  title: "Safelite's Warranty & Guarantee | Warranty FAQs | Safelite",
  description:
    "For your auto glass services, Safelite offers a national warranty to guarantee our work. We help answer your questions through our help center. Learn more.",
};

export default function WarrantyPage() {
  return (
    <ServicePageShell secondary={<AdditionalFaqs current="warranty" />} strongWeight="medium">
      {/* Title & Subtitle */}
      <ContentBlock className="mb-[-20px]! pt-10!">
        <h1 className="text-[32px] font-bold leading-[40px] tracking-[.03em] text-black md:leading-[44px]">
          Safelite FAQs
        </h1>
        <h4 className="pb-2.5 pt-1 text-[20px] font-normal leading-[30px] tracking-[.03em] text-black">
          Warranty details
        </h4>
      </ContentBlock>

      {/* Questions list: Mobile Accordion (collapsible with chevron) / Desktop Always Open */}
      <div className="mx-auto max-w-[510px] px-[15px] md:max-w-[750px]">
        {/* Q1 */}
        <FaqAccordionItem question="What do I do if I have a problem with the vehicle after you serviced it?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            To report an issue with your vehicle after we have serviced it, log in to{" "}
            <Link
              href="/my-appointment?iswarrantyfromsfnav=true"
              className="font-medium text-[#0070d1] hover:underline"
            >
              mysafelite.com
            </Link>
            . Then you can view your past appointments and click &ldquo;Report an Issue.&rdquo; Alternatively, you may
            call our customer care team at{" "}
            <a href="tel:18006388958" className="font-medium text-[#0070d1] hover:underline">
              800-638-8958
            </a>{" "}
            between the hours of 8am and 7pm Eastern Time, Monday through Friday. When calling our customer care team,
            please make sure to provide the first name and phone number that you used when scheduling your appointment,
            which are also listed on the work order in your confirmation email.
          </p>
        </FaqAccordionItem>

        {/* Q2 */}
        <FaqAccordionItem question="Do you offer a warranty on your work?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Yes, we offer a{" "}
            <Link href="/national-lifetime-warranty" className="font-medium text-[#0070d1] hover:underline">
              national lifetime warranty
            </Link>{" "}
            on our glass repair and replacement services and craftsmanship, guaranteed for as long as you own or lease
            your vehicle. The warranty is not transferable to another person who owns or leases your vehicle after you.
            To qualify for the warranty, you must contact us within 30 days of discovering the defect. For recalibration
            service, the warranty is for 30 days or until the next recalibration event, whichever happens first.
          </p>
        </FaqAccordionItem>

        {/* Q3 */}
        <FaqAccordionItem question="Does the warranty carry over to other locations?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Yes, the national warranty applies at any location across the United States.
          </p>
        </FaqAccordionItem>

        {/* Q4 */}
        <FaqAccordionItem question="What do I do if I have issues with my recalibration after receiving service from Safelite?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            To report an issue with the function of your advanced safety systems after receiving recalibration services,
            please log in to{" "}
            <Link
              href="/my-appointment?iswarrantyfromsfnav=true"
              className="font-medium text-[#0070d1] hover:underline"
            >
              mysafelite.com
            </Link>
            . You&apos;ll then be able to view your past appointments and click &ldquo;Report an Issue.&rdquo;
          </p>
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Recalibration service is guaranteed for 30 days after recalibration or until the next recalibration event,
            whichever happens first. Note that any modifications to your vehicle from its original specifications may
            cause your advanced safety systems not to function as intended.
          </p>
        </FaqAccordionItem>

        {/* Q5 */}
        <FaqAccordionItem question="Who should I contact if I have an issue?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            We guarantee our auto glass work for as long as you own or lease your vehicle. If you have issues with your
            service, please contact our Customer Care department at{" "}
            <a href="tel:18006388958" className="font-medium text-[#0070d1] hover:underline">
              800-638-8958
            </a>
            .
          </p>
        </FaqAccordionItem>

        {/* Q6 */}
        <FaqAccordionItem question="Who should I contact if I have other inquiries?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Our Customer Care department is standing by to take your call at{" "}
            <a href="tel:18006388958" className="font-medium text-[#0070d1] hover:underline">
              800-638-8958
            </a>
            .
          </p>
        </FaqAccordionItem>

        {/* Was this page helpful? */}
        <WasPageHelpful />
      </div>
    </ServicePageShell>
  );
}
