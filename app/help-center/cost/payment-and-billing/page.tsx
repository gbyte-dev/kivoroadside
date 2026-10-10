import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ContentBlock from "@/app/components/services/content-block";
import AdditionalFaqs from "@/app/components/services/additional-faqs";
import HelpCenterInnerNav from "@/app/components/services/help-center-inner-nav";
import WasPageHelpful from "@/app/components/services/was-page-helpful";
import FaqAccordionItem from "@/app/components/services/faq-accordion-item";

export const metadata: Metadata = {
  title: "Safelite Cost, Payment, and Billing FAQs | Safelite",
  description:
    "Learn about Safelite's accepted payment methods, Afterpay financing, receipts, and payment options for auto glass services.",
};

const COST_TABS = [
  { label: "Service cost", href: "/help-center/cost", active: false },
  { label: "Payment & billing", href: "/help-center/cost/payment-and-billing", active: true },
];

export default function PaymentAndBillingPage() {
  return (
    <ServicePageShell secondary={<AdditionalFaqs current="cost" />} strongWeight="medium">
      {/* Title */}
      <ContentBlock className="mb-[-20px]! pt-10!">
        <h1 className="text-[32px] font-bold leading-[40px] tracking-[.03em] text-black md:leading-[44px]">
          Safelite Cost, Payment, and Billing FAQs
        </h1>
      </ContentBlock>

      {/* Tabs */}
      <HelpCenterInnerNav tabs={COST_TABS} />

      {/* Questions list: Mobile Accordion (collapsible with chevron) / Desktop Always Open */}
      <div className="mx-auto max-w-[510px] px-[15px] md:max-w-[750px]">
        {/* Q1 */}
        <FaqAccordionItem question="What payment methods are accepted for auto glass service?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Safelite accepts cash, checks, all major credit cards, and Apple Pay. We also accept payments to be made over
            time in four interest-free installments via Afterpay.
          </p>
        </FaqAccordionItem>

        {/* Q2 */}
        <FaqAccordionItem question="Where do I find a copy of my receipt?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Visit{" "}
            <Link href="/my-appointment" className="text-[#0070d1] underline hover:no-underline">
              mysafelite.com
            </Link>{" "}
            to view appointment details, including your receipt. You can also find your receipt in your confirmation
            email.
          </p>
        </FaqAccordionItem>

        {/* Q3 */}
        <FaqAccordionItem question="How do I get a copy of my itemized bill?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            To access your itemized bill, log in to{" "}
            <Link href="/my-appointment" className="text-[#0070d1] underline hover:no-underline">
              mysafelite.com
            </Link>{" "}
            and enter the phone number associated with your appointment. Next, select your past appointment and choose
            View Receipt.
          </p>
        </FaqAccordionItem>

        {/* Q4 */}
        <FaqAccordionItem question="Can I pay over time?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Yes! Through Afterpay, you can pay for your auto glass service in four interest-free installments.
          </p>
        </FaqAccordionItem>

        {/* Q5 */}
        <FaqAccordionItem question="How do I choose Afterpay?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            You can select Afterpay as your payment method during checkout on safelite.com or by following the payment
            link sent to you by your technician at the completion of your service.
          </p>
        </FaqAccordionItem>

        {/* Q6 */}
        <FaqAccordionItem question="Where can I see my Afterpay payment schedule?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            When you choose Afterpay as your payment method during checkout on safelite.com, you’ll be prompted to
            create an account. Once signed up, you can view your payment schedule and make payments before the due date
            via{" "}
            <a
              href="https://www.afterpay.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0070d1] underline hover:no-underline"
            >
              afterpay.com
            </a>
            .
          </p>
        </FaqAccordionItem>

        {/* Q7 */}
        <FaqAccordionItem question="Can I pay in advance?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Yes, you may pay in advance while booking your appointment on safelite.com or by using the customer portal at{" "}
            <Link href="/my-appointment" className="text-[#0070d1] underline hover:no-underline">
              mysafelite.com
            </Link>{" "}
            after you&apos;ve booked your appointment.
          </p>
        </FaqAccordionItem>

        {/* Was this page helpful? */}
        <WasPageHelpful />
      </div>
    </ServicePageShell>
  );
}
