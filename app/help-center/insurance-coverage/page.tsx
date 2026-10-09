import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ContentBlock from "@/app/components/services/content-block";
import FaqAccordion from "@/app/components/services/faq-accordion";
import AdditionalFaqs from "@/app/components/services/additional-faqs";

export const metadata: Metadata = {
  title: "Windshield Insurance Claim | Safelite Claims | Safelite",
  description:
    "Before submitting a windshield replacement claim to Safelite, get answers to common questions on windshield insurance through our help center. Learn more.",
};

export default function InsuranceCoveragePage() {
  return (
    <ServicePageShell secondary={<AdditionalFaqs current="insurance" />} strongWeight="medium">
      {/* As the first block of the page it gets 40px above it, and the first
          question is pulled 20px up under it */}
      <ContentBlock className="mb-[-20px]! pt-10!">
        <h1>Safelite FAQs</h1>
        <h4>Insurance coverage and claims</h4>
      </ContentBlock>

      <FaqAccordion id="insurance-faq-1" question="Will my insurance cover my broken auto glass?">
        <p>
          If your insurance policy includes comprehensive coverage, you&apos;ll only be responsible for your deductible
          for the service to be completed. Deductible amounts vary based on insurance company and policy type.{" "}
          <Link href="/schedule-service">Schedule today</Link> to verify your deductible with your free quote.
        </p>
      </FaqAccordion>
      <FaqAccordion
        id="insurance-faq-2"
        question="Will checking my deductible or inquiring about auto glass claims raise my insurance rates?"
      >
        <p>
          Asking your insurance provider about your policy coverage and deductibles is generally not considered a claim.
          To be certain, please refer to your insurance policy.
        </p>
      </FaqAccordion>
      <FaqAccordion id="insurance-faq-3" question="Will filing an auto glass claim count towards my insurance policy?">
        <p>
          In many cases, insurance companies will not count auto glass damage as a claim on your policy. To be certain,
          please refer to your policy or contact your agent and/or insurance provider to confirm your specific auto glass
          coverage.
        </p>
      </FaqAccordion>
      <FaqAccordion id="insurance-faq-4" question="What if I only have liability coverage?">
        <p>
          Because liability insurance only provides coverage for damages to another vehicle, auto glass services are not
          covered under your liability policy. Safelite offers multiple payment options including cash, check, Visa, MasterCard, Discover and
          American Express.
        </p>
      </FaqAccordion>
      <FaqAccordion
        id="insurance-faq-5"
        question="Will all insurance companies waive my deductible if my windshield is repaired rather than replaced?"
      >
        <p>
          Many insurance companies cover <Link href="/windshield-repair">windshield repair</Link> at 100% coverage with
          no deductible. A Safelite representative will be happy to help you with your questions regarding insurance
          coverage.{" "}
        </p>
        <p>
          Contact your agent and/or insurance provider or refer to your insurance policy to confirm your specific
          coverage.
        </p>
      </FaqAccordion>
      <FaqAccordion id="insurance-faq-6" question="What if my deductible is the same or more than the auto glass service?">
        <p>
          You can pay for the work yourself. Safelite offers multiple payment options including cash, checks, Visa,
          MasterCard, Discover and American Express.
        </p>
      </FaqAccordion>
      <FaqAccordion
        id="insurance-faq-7"
        question="Do I need to contact my agent or insurance company before I contact Safelite?"
      >
        <p>
          No, we can do that for you. We&apos;re experts at verifying coverage, filing the claim and handling all the
          paperwork. Our affiliate company, Safelite Solutions, administers auto glass programs for more than 150
          insurance companies. In many cases, we have coverage information available online. If not, we&apos;ll contact
          your insurance company to obtain your applicable coverage.
        </p>
      </FaqAccordion>
      <FaqAccordion id="insurance-faq-8" question="How do I provide my claim number?">
        <p>
          If you&apos;re personally handling your auto glass insurance claim, you can call or text{" "}
          <a href="sms:8008002727">800-800-2727</a> and give us your claim number after scheduling your appointment. Then
          we&apos;ll work with your insurance company to submit your claim on your behalf.
        </p>
      </FaqAccordion>
      <FaqAccordion id="insurance-faq-9" question="Does my insurance cover recalibration?">
        <p>
          Most insurance carriers cover the full cost of recalibration if you have comprehensive coverage. In some
          cases, your deductible may not include optional self-selected services associated with recalibration, but
          we&apos;ll let you know the total cost and coverage breakdown before you book your appointment.
        </p>
        {/* The reference puts a block inside this paragraph, which splits it and
            leaves an empty paragraph (10px) at the end */}
        <div />
        <p />
      </FaqAccordion>
    </ServicePageShell>
  );
}
