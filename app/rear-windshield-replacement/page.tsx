import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ServiceHero from "@/app/components/services/service-hero";
import GrayBox from "@/app/components/services/gray-box";
import SectionHeading from "@/app/components/services/section-heading";
import ContentBlock from "@/app/components/services/content-block";
import WideContent from "@/app/components/services/wide-content";
import ContentHalves, { HalvesHeading } from "@/app/components/services/content-halves";
import ContentImage from "@/app/components/services/content-image";
import NarrowLeftHalves from "@/app/components/services/narrow-left-halves";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import TrustCta from "@/app/components/services/trust-cta";
import AdditionalServices from "@/app/components/services/additional-services";

export const metadata: Metadata = {
  title: "Rear Windshield & Back Window Replacement | Safelite",
  description:
    "Have damage to your back window that needs repair? With a quick rear windshield replacement, Safelite AutoGlass gets you back on the road in no time.",
};

export default function RearWindshieldReplacementPage() {
  return (
    <ServicePageShell secondary={<AdditionalServices current="/rear-windshield-replacement" />}>
      <ServiceHero
        title="Rear windshield replacement"
        subtitle="Have damage to your rear auto glass?"
        cta={{ label: "Get quote + schedule", href: "/schedule-service" }}
        image={{
          alt: "A Safelite technician wearing gloves replacing a vehicle's rear window",
          desktop: {
            src: "/image/services/rear-windshield-replacement/hero-desktop.jpg",
            width: 585,
            height: 284,
            ratio: "48.54701%",
          },
          tablet: {
            src: "/image/services/rear-windshield-replacement/hero-tablet.jpg",
            width: 585,
            height: 353,
            ratio: "60.34188%",
          },
        }}
      >
        <p>
          While a <Link href="/windshield-repair">windshield repair</Link> may not be possible, a rear windshield
          replacement can be quick and stress-free. Safelite can get you back on the road in as little as an hour.
        </p>
      </ServiceHero>

      <GrayBox>
        <SectionHeading>How do you replace a rear windshield?</SectionHeading>
        <ContentHalves
          left={<ContentImage src="/image/services/rear-windshield-replacement/customer-handshake.jpg" alt="" />}
          right={
            <ContentBlock>
              <p>
                <strong>When you come to us for a rear windshield replacement, our technicians will:</strong>
              </p>
              <ol>
                <li>Inspect the damage carefully </li>
                <li>Remove the damaged glass </li>
                <li>Vacuum any debris and glass from the vehicle </li>
                <li>Insert a brand new rear windshield </li>
                <li>Ensure any defrost or technological capabilities are functional </li>
                <li>Clean all of the glass on your vehicle</li>
              </ol>
            </ContentBlock>
          }
        />
      </GrayBox>

      <TrustCta />

      <ContentHalves
        left={<HalvesHeading>Trust the safety and reliability of Safelite</HalvesHeading>}
        right={
          <ContentBlock>
            <p>
              When we replace your rear window, our installations of a new back windshield carry a{" "}
              <Link href="/national-lifetime-warranty">nationwide lifetime warranty</Link> for workmanship. When the
              damage affects your safety, our technicians are available for same-day service so you get back on the
              road.
            </p>
            <p>
              Turn to us for your rear windshield replacement and you can expect the best customer service with the
              satisfaction that your back window is quality checked to meet car installation requirements.
            </p>
            <p>
              It may be an inconvenience to get a rear windshield replacement, but we promise to keep your experience as
              painless and easy as possible so you can get back to your day.{" "}
              <Link href="/schedule-service">Schedule service online</Link> today.
            </p>
          </ContentBlock>
        }
      />

      <GrayBox>
        <SectionHeading>Back window replacement service</SectionHeading>
        <WideContent>
          <ContentBlock>
            <p>
              With any type of chip in your rear window, it takes a replacement to ensure the most effective results.
              Safelite has the commitment and expertise you can trust.&nbsp;
            </p>
          </ContentBlock>
        </WideContent>
        <NarrowLeftHalves heading="Trained &amp; certified technicians" paddedLeftColumn>
          <p>
            All of our replacement specialists complete extensive classroom and hands-on training in our SafeTech®
            certification program.
          </p>
          <p>
            When you tell us the make and model of your vehicle that has damage to the rear window glass, we make sure
            that your new quality glass is the same shape, size, and contour of the original windshield.
          </p>
          <p>
            You won’t experience our technicians unprepared to replace your rear window. We won’t have to rework the
            glass with adhesive or force the glass, which can cause adhesion problems, water leaks, and stress
            cracks.&nbsp;
          </p>
        </NarrowLeftHalves>
        <HorizontalRule variant="gray-line" />
        <NarrowLeftHalves heading="The convenience you deserve">
          Need us to come to you? Take advantage of our <Link href="/mobile-auto-glass-repair">mobile service</Link>, or
          stop by one of our <Link href="/store-locator">shop locations</Link>. Whatever works best for you, you can
          count on us to accommodate your needs.
        </NarrowLeftHalves>
        <HorizontalRule variant="gray-line" />
        <NarrowLeftHalves heading="Quick turnaround time">
          <p>The entire back windshield replacement can take as little as one hour.</p>
        </NarrowLeftHalves>
      </GrayBox>
    </ServicePageShell>
  );
}
