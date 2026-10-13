import type { ReactNode } from "react";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ContentBlock from "@/app/components/services/content-block";
import InnerNav, { type InnerNavTab } from "@/app/components/services/inner-nav";
import FaqAccordion from "@/app/components/services/faq-accordion";
import EmbeddedFeedback from "@/app/components/services/embedded-feedback";
import AdditionalFaqs from "@/app/components/services/additional-faqs";

const TABS = {
  glassDamage: { label: "Glass damage", href: "/help-center/glass-damage-and-service/glass-damage" },
  serviceExpectations: {
    label: "Service expectations",
    href: "/help-center/glass-damage-and-service/service-expectations",
  },
  servicesAndProducts: {
    label: "Services & products",
    href: "/help-center/glass-damage-and-service/services-and-products",
  },
} satisfies Record<string, InnerNavTab>;

export type Faq = {
  question: string;
  answer: ReactNode;
};

type FaqTabPageProps = {
  tab: keyof typeof TABS;
  faqs: Faq[];
  // The glass damage tab keeps its answers collapsible at every width; the
  // other tabs show them all from 768px.
  alwaysOpenOnDesktop: boolean;
};

// One tab of the "Glass damage and service" FAQs: the title, the tabs, the
// questions (the page feedback prompt sits inside the last one, as on the
// reference) and the links to the other FAQ topics.
export default function FaqTabPage({ tab, faqs, alwaysOpenOnDesktop }: FaqTabPageProps) {
  return (
    <ServicePageShell
      strongWeight="medium"
      secondary={
        <>
          <InnerNav tabs={Object.values(TABS)} current={TABS[tab].href} />
          {faqs.map((faq, index) => (
            <FaqAccordion
              key={faq.question}
              id={`${tab}-faq-${index + 1}`}
              question={faq.question}
              alwaysOpenOnDesktop={alwaysOpenOnDesktop}
              footer={index === faqs.length - 1 ? <EmbeddedFeedback /> : undefined}
            >
              {faq.answer}
            </FaqAccordion>
          ))}
          <AdditionalFaqs current="damage" />
        </>
      }
    >
      {/* The first block of the article gets 40px above it */}
      <ContentBlock style={{ paddingTop: 40 }}>
        <h1>Safelite FAQs</h1>
        <h4>Glass damage and service</h4>
      </ContentBlock>
    </ServicePageShell>
  );
}
