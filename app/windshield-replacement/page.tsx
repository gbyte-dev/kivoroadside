import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ServiceHero from "@/app/components/services/service-hero";
import GrayBox from "@/app/components/services/gray-box";
import SectionHeading from "@/app/components/services/section-heading";
import ContentBlock from "@/app/components/services/content-block";
import WideContent from "@/app/components/services/wide-content";
import ContentHalves, { HalvesHeading } from "@/app/components/services/content-halves";
import NarrowLeftHalves, { NarrowLeftSpacer } from "@/app/components/services/narrow-left-halves";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import TrustCta from "@/app/components/services/trust-cta";
import YouTubeVideo from "@/app/components/services/youtube-video";
import AdditionalServices from "@/app/components/services/additional-services";

export const metadata: Metadata = {
  title: "Windshield Replacement | Auto Glass Replacement | Safelite",
  description:
    "Safelite is a leader in auto glass replacement services, providing the highest quality of windshield replacement glass for our customers.",
};

export default function WindshieldReplacementPage() {
  return (
    <ServicePageShell secondary={<AdditionalServices current="/windshield-replacement" />}>
      <ServiceHero
        title="Windshield replacement near you"
        subtitle="Whether you have a newer vehicle or something older, you need it to get you from point A to point B."
        cta={{ label: "Get quote + schedule", href: "/schedule-service" }}
        image={{
          alt: "A Safelite technician wearing gloves replacing a windshield",
          desktop: {
            src: "/image/services/windshield-replacement/hero-desktop.jpg",
            width: 585,
            height: 388,
            ratio: "66.32479%",
          },
          tablet: {
            src: "/image/services/windshield-replacement/hero-tablet.jpg",
            width: 585,
            height: 413,
            ratio: "70.59829%",
          },
        }}
      >
        <p>
          You need it to be safe. As an industry leader in auto glass replacement, Safelite provides the highest quality
          windshield replacement services for our customers.
        </p>
      </ServiceHero>

      <GrayBox>
        <SectionHeading>Quality auto glass replacement services</SectionHeading>
        <WideContent>
          <ContentBlock>
            <p>
              We help millions of car owners every year with windshield replacement, assisting drivers of most make and
              models find a new windshield at an affordable price. When you turn to us for your windshield replacement,
              you can expect:
            </p>
          </ContentBlock>
        </WideContent>
        <NarrowLeftHalves heading="Trained, certified auto glass replacement technicians">
          <p>
            All of our replacement specialists complete extensive classroom and hands-on training in our SafeTech®
            certification program.
          </p>
        </NarrowLeftHalves>
        <HorizontalRule variant="gray-line" />
        <NarrowLeftHalves heading="Top-quality materials for windshield replacements">
          <p>
            Our skilled technicians use the best materials for windshield replacement, ensuring a quality windshield
            installation. For all cracked windows and windshields, the quality glass proves to be durable and efficient
            to increase your safety on the road.&nbsp;
          </p>
        </NarrowLeftHalves>
        <HorizontalRule variant="gray-line" />
        <NarrowLeftHalves heading="The industry’s only national lifetime warranty" paddedLeftColumn>
          <p>
            For the quality of auto glass we use to replace your windshield, Safelite is proud to feature the
            industry’s only nationwide lifetime warranty.&nbsp;
          </p>
        </NarrowLeftHalves>
        <NarrowLeftSpacer />
      </GrayBox>

      <TrustCta />

      <SectionHeading>How do you replace a windshield?</SectionHeading>
      <WideContent>
        <ContentBlock>
          <p>
            We take pride in our ability to provide quick and painless window and windshield replacement services that
            leave you safe on the road. At Safelite, we use an extensive process that ensures no step is missed as we
            replace your windshield.
          </p>
        </ContentBlock>
      </WideContent>
      <ContentHalves
        left={
          <YouTubeVideo
            videoId="7jkpgB5ayP4"
            title="Exclusive Windshield Replacement TrueSeal™ Technology | Safelite AutoGlass"
          />
        }
        right={
          <ContentBlock>
            <p>
              <strong>When you come to us for a windshield installation, our technicians will take the below steps:</strong>
            </p>
            <ol>
              <li>
                The technician will walk you through the service of removing, replacing, and installing a new
                windshield.
              </li>
              <li>The technician will then completely remove the old windshield.</li>
              <li>
                Using the most advanced primers and adhesives on the market, as well as our innovative TrueSeal®
                Technology, the technician will insert a new windshield for most vehicles.
              </li>
              <li>
                The technician will clean all of the windows and vacuum any broken glass out of your vehicle.
              </li>
              <li>
                The technician will tell you about the 30-45 minute drive-away-time adhesive, which allows you to drive
                away quickly and safely.
              </li>
            </ol>
            <p>
              For all minor chips, our <Link href="/windshield-repair">windshield repair services</Link> help ensure the
              chips are fixed at little to no cost.&nbsp;
            </p>
          </ContentBlock>
        }
      />
      <HorizontalRule variant="section-divider" />
      <ContentHalves
        left={<HalvesHeading>Schedule your replacement service</HalvesHeading>}
        right={
          <ContentBlock>
            <p>
              Other replacement services we offer include{" "}
              <Link href="/power-window-repair">side window replacement</Link> and{" "}
              <Link href="/rear-windshield-replacement">rear windshield replacement</Link>.
            </p>
            <p>
              Are you ready for a replacement windshield that will make it easier to get you where you need to go?
              Let’s get started. <Link href="/schedule-service">Schedule service online</Link> today.
            </p>
          </ContentBlock>
        }
      />
      <HorizontalRule variant="section-divider" />
      <ContentHalves
        left={<HalvesHeading>How long to replace a windshield?</HalvesHeading>}
        right={
          <ContentBlock>
            <p>
              In many cases, windshield repairs can be performed in 30 minutes or less. Windshield replacements will
              often take 60 minutes or less; however, we recommend that you do not drive the vehicle for at least one
              hour after service is completed. <Link href="/schedule-service">Schedule service online</Link> today.{" "}
            </p>
          </ContentBlock>
        }
      />
      <HorizontalRule variant="section-divider" />
    </ServicePageShell>
  );
}
