import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import GrayBox from "@/app/components/services/gray-box";
import TrustCta from "@/app/components/services/trust-cta";
import ContentBlock from "@/app/components/services/content-block";
import ContentHalves, { HalvesHeading } from "@/app/components/services/content-halves";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import WideContent from "@/app/components/services/wide-content";
import VehicleHero from "./vehicle-hero";
import BrandSearch from "./brand-search";
import LogoMarquee from "./logo-marquee";

export const metadata: Metadata = {
  title: "Auto Glass Repair by Vehicle Make & Model | Safelite",
  description:
    "Safelite repairs and replaces windshields, side windows, and back glass for hundreds of car models. Get a quote and schedule your auto glass repair today.",
};

// "We'll help you get back on the road" block after the article
function CostSection() {
  return (
    <ContentHalves
      left={<HalvesHeading>We&apos;ll help you get back on the road. But what&apos;ll it cost?</HalvesHeading>}
      right={
        <ContentBlock>
          <p>
            It&rsquo;s hard to say how much your glass repair or replacement will cost. In general, it depends on things
            like year, make, and model, which options it has, and the type of glass your specific vehicle needs.
          </p>
          <p>
            As you&rsquo;re making your appointment, share your VIN number so we can be sure we have the correct glass
            for your exact vehicle.&nbsp;
            <Link href="/schedule-service">Get a quote and schedule an appointment online</Link>.
          </p>
        </ContentBlock>
      }
    />
  );
}

// Trademark note under the "Don't wait" band
function Disclaimer() {
  return (
    <WideContent>
      <p id="disclaimer" className="pt-[26px]">
        <sub className="static inline-grid align-sub text-[13.3333px] leading-[25px]">
          <span>
            Any and all trademarks, service marks or copyrights associated with the identified automotive manufacturers
            are the intellectual property rights of such automotive manufacturers and Safelite disclaims any
            intellectual property rights in the same.
          </span>
        </sub>
      </p>
    </WideContent>
  );
}

export default function VehicleGlassRepairPage() {
  return (
    <ServicePageShell secondary={<CostSection />} additional={<Disclaimer />}>
      <VehicleHero />

      {/* A site-wide rule gives this gray box 1rem padding all around */}
      <GrayBox className="p-4!">
        <TrustCta />
      </GrayBox>

      <ContentHalves
        left={
          <>
            <div>
              <h2>Some of the brands we service</h2>
            </div>
            <HorizontalRule variant="left-red" />
          </>
        }
        right={null}
      />
      <ContentHalves
        left={
          <ContentBlock>
            <p>
              From Chevy or Ford to BMW or Lexus&mdash;popular brands to luxury vehicles&mdash;whatever you drive, our
              trusted technicians have the experience to fix it. Here&rsquo;s a list of the{" "}
              <Link href="/resource-center/auto-experts/top-50-windshields">top 50 windshields</Link> Safelite
              replaces, and you can learn more about a specific make and model by browsing the logos below.
            </p>
            <br />
          </ContentBlock>
        }
        right={
          <>
            <BrandSearch />
            {/* Two 20px spacers on the reference */}
            <div aria-hidden="true" className="h-10 w-full" />
          </>
        }
      />
      <LogoMarquee />
    </ServicePageShell>
  );
}
