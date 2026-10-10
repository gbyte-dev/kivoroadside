import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ContentBlock from "@/app/components/services/content-block";
import AdditionalFaqs from "@/app/components/services/additional-faqs";
import WasPageHelpful from "@/app/components/services/was-page-helpful";
import FaqAccordionItem from "@/app/components/services/faq-accordion-item";

export const metadata: Metadata = {
  title: "Safelite Privacy & Security | Securing Your Information | Safelite",
  description:
    "At Safelite, we take your security and personal information very seriously. In our help center, we answer questions about your privacy. Learn more.",
};

export default function MarketingAndPrivacyPage() {
  return (
    <ServicePageShell secondary={<AdditionalFaqs current="privacy" />} strongWeight="medium">
      {/* Title & Subtitle */}
      <ContentBlock className="mb-[-20px]! pt-10!">
        <h1 className="text-[32px] font-bold leading-[40px] tracking-[.03em] text-black md:leading-[44px]">
          Safelite FAQs
        </h1>
        <h4 className="pb-2.5 pt-1 text-[20px] font-normal leading-[30px] tracking-[.03em] text-black">
          Marketing and privacy
        </h4>
      </ContentBlock>

      {/* Questions list: Mobile Accordion (collapsible with chevron) / Desktop Always Open */}
      <div className="mx-auto max-w-[510px] px-[15px] md:max-w-[750px]">
        {/* Q1 */}
        <FaqAccordionItem question="How do I unsubscribe from emails?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            You can opt out of email communications at any time by opening a promotional email we sent you and
            following the opt-out links within that message. You can also opt out by visiting{" "}
            <Link href="/email-unsubscribe" className="font-medium text-[#0070d1] hover:underline">
              safelite.com/email-unsubscribe
            </Link>{" "}
            or sending us an email with your request to{" "}
            <a href="mailto:onlinehelp@safelite.com" className="font-medium text-[#0070d1] hover:underline">
              onlinehelp@safelite.com
            </a>
            .
          </p>
        </FaqAccordionItem>

        {/* Q2 */}
        <FaqAccordionItem question="How do I opt in or out of text messages?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            To opt in or out of text messages, visit{" "}
            <Link href="/my-appointment" className="font-medium text-[#0070d1] hover:underline">
              mysafelite.com
            </Link>
            . Once logged in, you can access your appointment details and update your text message preferences.
          </p>
        </FaqAccordionItem>

        {/* Q3 */}
        <FaqAccordionItem question="Is this site secure?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Yes, our site makes use of industry-standard secure socket layer (SSL) technology to ensure your
            information remains private.
          </p>
        </FaqAccordionItem>

        {/* Q4 */}
        <FaqAccordionItem question="Will you sell my personal information?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Safelite will never sell your personal information. Any information that we collect from you will be used in
            accordance with our{" "}
            <Link href="/safelite-group-privacy-policy" className="font-medium text-[#0070d1] hover:underline">
              privacy policy
            </Link>
            .
          </p>
        </FaqAccordionItem>

        {/* Was this page helpful? */}
        <WasPageHelpful />
      </div>
    </ServicePageShell>
  );
}
