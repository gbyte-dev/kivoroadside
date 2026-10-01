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
import HorizontalRule from "@/app/components/services/horizontal-rule";
import TrustCta from "@/app/components/services/trust-cta";
import NavCards from "@/app/components/services/nav-cards";
import AiChatButton from "@/app/components/services/ai-chat-button";
import { WHY_SAFELITE_CARDS } from "@/app/components/services/service-links";

export const metadata: Metadata = {
  title: "Mobile Auto Glass Repair | Windshield Repair Come to You | Safelite",
  description:
    "Conveniently repair or replace your windshield without coming into the shop with mobile windshield and auto glass services from Safelite. We’ll come to you.",
};

const heroImage = {
  src: "/image/services/mobile-auto-glass-repair/hero.jpg",
  width: 585,
  height: 438,
  ratio: "74.8718%",
};

function Secondary() {
  return (
    <>
      <HorizontalRule variant="gray-line" />
      <SectionHeading>Frequently Asked Questions</SectionHeading>
      <ContentHalves
        left={<HalvesHeading>Does Safelite come to you?</HalvesHeading>}
        right={
          <ContentBlock>
            Yes! Safelite offers mobile auto glass repair and replacement services that come directly to your home,
            work, or another convenient location. Our mobile auto glass services include windshield repairs, windshield
            replacements, car side window replacements, and more, bringing expert care to you wherever you are.
          </ContentBlock>
        }
      />
      <ContentHalves
        left={<HalvesHeading>Why choose Safelite?</HalvesHeading>}
        right={
          <ContentBlock>
            To learn more about <Link href="/why-choose-safelite">why to choose Safelite</Link> to repair or replace
            your glass, please select from below. For questions or concerns, please{" "}
            <Link href="/contact-us">contact us</Link> or visit us on social media.
          </ContentBlock>
        }
      />
      <NavCards variant="icon" cards={WHY_SAFELITE_CARDS} />
      <AiChatButton />
    </>
  );
}

export default function MobileAutoGlassRepairPage() {
  return (
    <ServicePageShell secondary={<Secondary />} strongWeight="medium">
      <ServiceHero
        title="Mobile auto glass repair & replacement"
        subtitle="Safelite comes to you for at-home convenience."
        contentBlock={false}
        image={{
          alt: "Photo of a Safelite van parked next to a residential building.",
          desktop: heroImage,
        }}
      >
        <p>
          Don’t let damage to your auto glass disrupt your day. Whether it’s a cracked windshield or a broken side
          window, Safelite’s mobile auto glass repair and replacement service brings expert technicians directly to you,
          wherever you need us. Save your time and money with Safelite’s mobile services and get back out on the road
          fast and safe.
        </p>
        <p />
      </ServiceHero>

      <GrayBox>
        <SectionHeading>Auto glass services at your home</SectionHeading>
        <WideContent>
          <ContentBlock>
            <p>
              Damaged glass isn’t convenient, but getting it fixed with Safelite is. With more than 7,100 Mobile Glass
              Shops across the country, our mobile auto glass technicians are ready to travel to you at home, work, or
              wherever you need us.
            </p>
          </ContentBlock>
          <ContentBlock>
            <p>
              Whether you choose Safelite to travel to you for your mobile auto glass needs, or you’d rather come to one
              of our shops, the choice is yours.
            </p>
            <p>
              Our auto glass services reach 97 percent of U.S. drivers in all 50 states. Below, you’ll find everything
              you need to know about our mobile auto glass repair services.{" "}
            </p>
            <p />
          </ContentBlock>
        </WideContent>
        <ContentHalves
          left={
            <ContentImage
              src="/image/services/mobile-auto-glass-repair/mobile-glass-service-tech.jpg"
              alt="Safelite technician seen through open door of a mobile glass shop vehicle"
            />
          }
          right={
            <ContentBlock>
              <p>
                <strong>Here&apos;s what to expect from our mobile auto glass service:{"\u200b"}</strong>
              </p>
              <ul>
                <li>
                  <p>
                    When you schedule mobile service, we&apos;ll give you a specific time frame for the appointment. Your
                    technician will call you the morning of the appointment to provide an estimated arrival time.
                    {"\u200b"}
                  </p>
                </li>
                <li>
                  <p>Be prepared to provide coverage for your technician in the event of rain or snow.{"\u200b"}</p>
                </li>
                <li>
                  <p>
                    For one chip in your glass, a repair appointment will take between 30-45 minutes. If you have 2-3
                    chips in your glass that we&apos;re fixing, the appointment may take up to 90 minutes.{"\u200b"}
                  </p>
                </li>
                <li>
                  <p>
                    You&apos;ll receive an email the morning of your appointment with your tech&apos;s info.{"\u200b"}
                  </p>
                </li>
              </ul>
              <p>&nbsp;</p>
              <ul />
            </ContentBlock>
          }
        />
      </GrayBox>

      <TrustCta />

      <SectionHeading>Mobile Windshield Repair &amp; Replacement</SectionHeading>
      <HorizontalRule variant="gray-line" />
      <ContentHalves
        left={
          <ContentImage
            src="/image/services/mobile-auto-glass-repair/mobile-glass-service.jpg"
            alt="Safelite mobile glass shop being driven by a technician down a street"
          />
        }
        right={
          <>
            <ContentBlock>
              <h3>Mobile glass service</h3>
            </ContentBlock>
            <ContentBlock>
              <ul>
                <li>
                  We have more than{" "}
                  <Link href="/mobile-auto-glass-repair">7,100 Mobile Glass Shops across the country</Link>, ready to
                  travel to you. Save valuable time by having us come to your work, home or other location. Wherever you
                  need us, we’ll be there.
                </li>
                <li>
                  We can <Link href="/windshield-repair">repair a crack in your auto glass</Link> or{" "}
                  <Link href="/windshield-replacement">replace your entire windshield</Link> during a mobile appointment.
                  In most cases, we can also recalibrate the camera connected to your advanced safety systems.
                </li>
                <li>
                  We’ll give you a specific time frame for your repair or replacement when you{" "}
                  <Link href="/schedule-service?start_type=fmg">schedule an appointment</Link>. For added convenience,
                  our auto glass technicians will call you on the morning of the appointment to provide a more accurate
                  time of arrival.
                </li>
                <li>
                  Safelite technicians use special technology for mobile auto glass service that makes for a smooth
                  repair or replacement process. The software is linked to the technicians&apos; mobile applications that
                  manage job statuses and can take care of paperwork wirelessly at your home.
                </li>
              </ul>
            </ContentBlock>
          </>
        }
      />
    </ServicePageShell>
  );
}
