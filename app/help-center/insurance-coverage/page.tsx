import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ContentBlock from "@/app/components/services/content-block";
import AdditionalFaqs from "@/app/components/services/additional-faqs";
import WasPageHelpful from "@/app/components/services/was-page-helpful";
import FaqAccordionItem from "@/app/components/services/faq-accordion-item";

export const metadata: Metadata = {
  title: "Windshield Insurance Claim | Safelite Claims | Safelite",
  description:
    "Before submitting a windshield replacement claim to Safelite, get answers to common questions on windshield insurance through our help center. Learn more.",
};

export default function InsuranceCoveragePage() {
  return (
    <ServicePageShell secondary={<AdditionalFaqs current="insurance" />} strongWeight="medium">
      {/* Title & Subtitle */}
      <ContentBlock className="mb-[-20px]! pt-10!">
        <h1 className="text-[32px] font-bold leading-[40px] tracking-[.03em] text-black md:leading-[44px]">
          Safelite FAQs
        </h1>
        <h4 className="pb-2.5 pt-1 text-[20px] font-normal leading-[30px] tracking-[.03em] text-black">
          Insurance coverage and claims
        </h4>
      </ContentBlock>

      {/* Questions list: Mobile Accordion (collapsible with chevron) / Desktop Always Open */}
      <div className="mx-auto max-w-[510px] px-[15px] md:max-w-[750px]">
        {/* Q1 */}
        <FaqAccordionItem question="Will my insurance cover my broken auto glass?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            If your insurance policy includes comprehensive coverage, you&apos;ll only be responsible for your
            deductible for the service to be completed. Deductible amounts vary based on insurance company and policy
            type.{" "}
            <Link href="/schedule-service" className="text-[#0070d1] underline hover:no-underline">
              Schedule today
            </Link>{" "}
            to verify your deductible with your free quote.
          </p>
        </FaqAccordionItem>

        {/* Q2 */}
        <FaqAccordionItem question="Will checking my deductible or inquiring about auto glass claims raise my insurance rates?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            No. Inquiring about your deductible will not raise your insurance rates.
          </p>
        </FaqAccordionItem>

        {/* Q3 */}
        <FaqAccordionItem question="Will my insurance premium increase if I submit a claim for windshield replacement?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            In most cases, filing a windshield insurance claim won&apos;t raise your comprehensive coverage rates. Many
            auto insurance providers recognize the safety risk of a damaged windshield and prefer you get it fixed right
            away, rather than risking further damage or injury.
          </p>
        </FaqAccordionItem>

        {/* Q4 */}
        <FaqAccordionItem question="Does comprehensive coverage include a cracked windshield?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Typically, yes. If your auto insurance includes comprehensive coverage, you will usually be covered for
            windshield crack repairs and full windshield replacements.
          </p>
        </FaqAccordionItem>

        {/* Q5 */}
        <FaqAccordionItem question="Does collision coverage include a cracked windshield?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Usually, collision coverage doesn&apos;t apply to standard windshield damage. Most windshield damage results
            from debris kicked up on the road or severe weather like hail, so it is covered under your comprehensive
            policy instead. However, if the damage occurs during a collision with another vehicle or object, it could be
            covered under collision coverage.
          </p>
        </FaqAccordionItem>

        {/* Q6 */}
        <FaqAccordionItem question="How do I submit an insurance claim for a windshield replacement?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Safelite works with most major insurance carriers. When booking your appointment online, you can file your
            claim directly with us. We will reach out to your insurance provider to verify your coverage and submit your
            claim on your behalf.
          </p>
        </FaqAccordionItem>

        {/* Q7 */}
        <FaqAccordionItem question="What if Safelite isn’t an in-network provider for my insurance carrier?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            If you have car insurance, you are legally entitled to select your auto glass provider. If Safelite is not
            in your insurance provider&apos;s network, you may need to file the claim yourself. Simply submit your
            itemized Safelite receipt to your insurance provider for reimbursement.
          </p>
        </FaqAccordionItem>

        {/* Q8 */}
        <FaqAccordionItem question="Can I give Safelite my claim number?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            If you&apos;re personally handling your auto glass insurance claim, you can call or text{" "}
            <a href="sms:8008002727" className="text-[#0070d1] underline hover:no-underline">
              800-800-2727
            </a>{" "}
            and give us your claim number after scheduling your appointment. Then we&apos;ll work with your insurance
            company to submit your claim on your behalf.
          </p>
        </FaqAccordionItem>

        {/* Q9 */}
        <FaqAccordionItem question="Does my insurance cover recalibration?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Most insurance carriers cover the full cost of recalibration if you have comprehensive coverage. In some
            cases, your deductible may not include optional self-selected services associated with recalibration, but
            we&apos;ll let you know the total cost and coverage breakdown before you book your appointment.
          </p>
        </FaqAccordionItem>

        {/* Was this page helpful? */}
        <WasPageHelpful />
      </div>
    </ServicePageShell>
  );
}
