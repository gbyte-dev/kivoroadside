import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import FaqAccordion from "@/app/components/services/faq-accordion";
import ServiceHero from "@/app/components/services/service-hero";
import GrayBox from "@/app/components/services/gray-box";
import SectionHeading from "@/app/components/services/section-heading";
import ContentBlock from "@/app/components/services/content-block";
import ContentHalves, { HalvesHeading } from "@/app/components/services/content-halves";
import ContentImage from "@/app/components/services/content-image";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import TrustCta from "@/app/components/services/trust-cta";
import AdditionalServices from "@/app/components/services/additional-services";
import styles from "./power-window-repair.module.css";

export const metadata: Metadata = {
  title: "Power Window Repair | Fix Your Power Window Motor | Safelite",
  description:
    "Power window not working? You need more than a quick fix. Trust our high-quality power window repair services to get your window motor back in working order.",
};

const photoCards = [
  {
    image: "/image/services/power-window-repair/power-window-shop.jpg",
    title: "Find power window repair shops near you",
    body: "We offer our window regulator repair services nationwide in all 50 states.",
    cta: "Find the nearest Safelite",
  },
  {
    image: "/image/services/power-window-repair/power-window-manual.jpg",
    title: "Power window mobile service",
    body: "Can’t come to us? We’ll come to you! You’ll find over 7,100 MobileGlassShops™ and repair facilities across the country for your convenience.",
    cta: "Learn more",
  },
];

const faqs = [
  {
    question: "What causes power windows to stop working?",
    answer:
      "Power window regulators, or motors, are subject to high wear and tear. After excessive use, power windows can stop working and require replacement service. Other common causes of power window failure include faulty switches, damaged window tracks, old or worn pulleys and cable lines, broken cables, snow and ice exposure, or overheated window motors. These causes can either be permanent or temporary. Professional technicians use diagnostic tools and equipment to pinpoint these issues and repair them accordingly.",
  },
  {
    question: "How do you fix a power window motor?",
    answer:
      "In order to fix a power window motor, a trained technician will need to replace all faulty components by unbolting the broken parts and replacing them with new ones.",
  },
  {
    question: "How long does it take to fix a power window?",
    answer:
      "Experienced technicians can complete most power window repairs in one hour or less. However, if a more complicated issue arises or multiple parts of a power window need to be replaced, the service can run longer.",
  },
  {
    question: "How much does it cost to fix a power window?",
    answer:
      "The total cost to repair or replace a power window can vary and depends on the type of repair needed, parts used, and more. Getting a power window repair quote is always recommended for cost accuracy.",
  },
];

export default function PowerWindowRepairPage() {
  return (
    <ServicePageShell secondary={<AdditionalServices current="/power-window-repair" />}>
      <ServiceHero
        title="Power window repair"
        subtitle={<>If your power window has stopped working, you need more than a quick fix.&nbsp;</>}
        cta={{ label: "Get quote + schedule", href: "/schedule-service" }}
        image={{
          alt: "A Safelite technician wearing gloves replacing a vehicle's power windows",
          desktop: {
            src: "/image/services/power-window-repair/hero-desktop.jpg",
            width: 585,
            height: 389,
            ratio: "66.49573%",
          },
          tablet: {
            src: "/image/services/power-window-repair/hero-tablet.jpg",
            width: 585,
            height: 444,
            ratio: "75.89744%",
          },
        }}
      >
        <p>
          Side windows are one of the most active parts of your vehicle and can wear down fast if you fix them yourself
          or use the wrong parts. You and your vehicle deserve only high-quality power window repair services. Trust our
          expert technicians at Safelite AutoGlass® to get your power window motor back in working order.
        </p>
      </ServiceHero>

      <GrayBox>
        <ContentHalves
          left={<HalvesHeading>Power window repair and replacement services</HalvesHeading>}
          right={
            <>
              <ContentBlock>
                <p>
                  Our trained technicians at Safelite will ensure that you receive the best parts and service for your
                  power window regulator. When we fix your side power window, the motor will work exactly how it used
                  to before it needed service. The best part: We’ll fix your window fast and efficiently, so you can
                  get back to using it quickly.&nbsp;
                  <br />
                </p>
              </ContentBlock>
              <ContentBlock>
                <p>
                  <strong>Our power window repair services can fix the following issues and others:</strong>
                </p>
                <ul className={styles.listDouble}>
                  <li>Stuck power windows</li>
                  <li>Slow rolling power windows</li>
                  <li>Off track car windows</li>
                  <li>Malfunctioning power window&nbsp;switches</li>
                  <li>Broken power window buttons</li>
                  <li>Windows that won’t go up</li>
                  <li>Windows that won’t go down</li>
                  <li>Intermittent functionality&nbsp;</li>
                </ul>
              </ContentBlock>
            </>
          }
        />
      </GrayBox>

      <TrustCta />

      <SectionHeading>The best choice for power window repair</SectionHeading>
      <ContentHalves
        left={
          <ContentImage src="/image/services/power-window-repair/power-window-motor.jpg" alt="power window repair" />
        }
        right={
          <>
            <ContentBlock>
              <p>
                You operate your power windows more often than you probably think. From rolling them down to feel a
                fresh breeze, to grabbing lunch at a drive-through, to withdrawing money at a bank, you use power window
                switches constantly. We know how important it is to correctly fix your broken power window before it
                becomes a major inconvenience.
                <br />
              </p>
            </ContentBlock>
            <ContentBlock>
              <p>
                <strong>We provide the following benefits when repairing your power window:</strong>
              </p>
              <ul>
                <li>Nationwide service</li>
                <li>Power window mobile service in most areas</li>
                <li>Nationwide warranty</li>
                <li>High-quality, brand-name parts</li>
                <li>Competitive pricing&nbsp;</li>
              </ul>
            </ContentBlock>
          </>
        }
      />

      <GrayBox>
        <ContentHalves
          paddedLeftColumn
          left={<HalvesHeading>Manual window regulator repair</HalvesHeading>}
          right={
            <ContentBlock>
              <p>
                We service more than just newer makes and models. If you have an older vehicle and your manual window
                regulator won’t work, Safelite is the right place to get it fixed. Our trained technicians will repair or
                replace your manual window regulator with top-quality parts backed by our nationwide warranty.&nbsp;
              </p>
            </ContentBlock>
          }
        />
        <div className={styles.cardsHalves}>
          <div className={styles.cardContainer}>
            {photoCards.map((card) => (
              <div key={card.title} className={styles.cardWrapper}>
                <div className={styles.cardImage}>
                  <ContentImage src={card.image} alt="" width={480} height={200} ratio="41.66666%" />
                </div>
                <div className={styles.cardContent}>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  <div className={styles.btnWrap}>
                    <Link className={styles.btnSecondary} href="/store-locator">
                      {card.cta}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </GrayBox>

      <SectionHeading>Power window repair FAQs</SectionHeading>
      {faqs.map((faq, index) => (
        <FaqAccordion key={faq.question} id={`power-window-faq-${index + 1}`} question={faq.question}>
          <p>{faq.answer}</p>
        </FaqAccordion>
      ))}
      <HorizontalRule variant="section-divider" />
    </ServicePageShell>
  );
}
