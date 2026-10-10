import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ContentBlock from "@/app/components/services/content-block";
import AdditionalFaqs from "@/app/components/services/additional-faqs";
import HelpCenterInnerNav from "@/app/components/services/help-center-inner-nav";
import WasPageHelpful from "@/app/components/services/was-page-helpful";
import FaqAccordionItem from "@/app/components/services/faq-accordion-item";

export const metadata: Metadata = {
  title: "Services & products | Safelite",
  description:
    "Safelite does more than just repair and replace damaged auto glass. Read our FAQs to learn about our full range of services and schedule an appointment today.",
};

const SERVICES_TABS = [
  { label: "Glass damage", href: "/help-center/glass-damage-and-service", active: false },
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

export default function ServicesAndProductsPage() {
  return (
    <ServicePageShell secondary={<AdditionalFaqs current="damage" />} strongWeight="medium">
      {/* Title & Subtitle */}
      <ContentBlock className="mb-[-20px]! pt-10!">
        <h1 className="text-[32px] font-bold leading-[40px] tracking-[.03em] text-black md:leading-[44px]">
          Safelite FAQs
        </h1>
        <h4 className="pb-2.5 pt-1 text-[20px] font-normal leading-[30px] tracking-[.03em] text-black">
          Glass damage and service
        </h4>
      </ContentBlock>

      {/* Tabs */}
      <HelpCenterInnerNav tabs={SERVICES_TABS} />

      {/* Questions list: Mobile Accordion (collapsible with chevron) / Desktop Always Open */}
      <div className="mx-auto max-w-[510px] px-[15px] md:max-w-[750px]">
        {/* Q1 */}
        <FaqAccordionItem question="Do you repair rearview mirrors or side/door mirrors?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Being the nation&apos;s number one autoglass specialist means we can do it all. Beyond side, front, or
            rear vehicle glass, we also replace rearview and side mirrors. We’ll even vacuum your vehicle and clean the
            glass when we’re finished.
          </p>
        </FaqAccordionItem>

        {/* Q2 */}
        <FaqAccordionItem question="Can you fix my power window motor or regulator?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Yes. Our certified technicians can diagnose the issue and determine if it requires a power window repair or
            replacement. Check our{" "}
            <Link href="/power-window-repair" className="font-medium text-[#0070d1] hover:underline">
              power window repair
            </Link>{" "}
            page for more information.
          </p>
        </FaqAccordionItem>

        {/* Q3 */}
        <FaqAccordionItem question="Do you fix sunroofs or moonroofs?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Safelite only replaces sunroof glass when it has been damaged. We do not repair or replace the mechanical or
            electrical components of a sunroof or moonroof, such as the motor, track, or frame.
          </p>
        </FaqAccordionItem>

        {/* Q4 */}
        <FaqAccordionItem question="What additional products do you offer?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            We offer advanced wiper blades with water repelling technology, glass cleaner, and rain repellent to keep
            your glass clear and safe.
          </p>
        </FaqAccordionItem>

        {/* Q5 */}
        <FaqAccordionItem question="Will you install wipers for me?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Yes! If you purchase wipers with your auto glass service, your technician will install them for you at no
            extra charge.
          </p>
        </FaqAccordionItem>

        {/* Q6 */}
        <FaqAccordionItem question="Can you put rain repellent on my back or side windows?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Rain repellent is currently only applied to front windshields during your appointment.
          </p>
        </FaqAccordionItem>

        {/* Q7 */}
        <FaqAccordionItem question="How do I add wipers, glass cleaner, or rain repellent to an upcoming appointment?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            You can add products by logging in to{" "}
            <Link href="/my-appointment" className="font-medium text-[#0070d1] hover:underline">
              mysafelite.com
            </Link>{" "}
            and visiting your appointment details page, or you can ask your technician at the time of your service.
          </p>
        </FaqAccordionItem>

        {/* Q8 */}
        <FaqAccordionItem question="How do I remove a service or product from an upcoming appointment?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            To remove windshield wipers, glass cleaner, or rain repellent from your upcoming appointment, log in to{" "}
            <Link href="/my-appointment" className="font-medium text-[#0070d1] hover:underline">
              mysafelite.com
            </Link>{" "}
            to access your appointment details and open the Cost breakdown to remove products from your service. If you
            would like to remove an additional service, such as a second glass repair, please call{" "}
            <a href="tel:800-800-2727" className="font-medium text-[#0070d1] hover:underline">
              800-800-2727
            </a>{" "}
            from the phone number associated with your appointment, and someone will help you.
          </p>
        </FaqAccordionItem>

        {/* Q9 */}
        <FaqAccordionItem question="Can I buy wipers in the shop?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            When scheduling your appointment, select our Premium or Standard service package to include wiper blades in
            your service. If you&apos;ve already finished scheduling, log in to{" "}
            <Link href="/my-appointment" className="font-medium text-[#0070d1] hover:underline">
              mysafelite.com
            </Link>{" "}
            to access your appointment details and add wipers to your service. You can also tell your technician that
            you&apos;d like to add them, and they&apos;ll install them for you at the time of your service.
          </p>
        </FaqAccordionItem>

        {/* Was this page helpful? */}
        <WasPageHelpful />
      </div>
    </ServicePageShell>
  );
}