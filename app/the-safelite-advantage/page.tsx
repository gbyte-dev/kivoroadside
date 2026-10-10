import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ServiceHero from "@/app/components/services/service-hero";
import GrayBox from "@/app/components/services/gray-box";
import SectionHeading from "@/app/components/services/section-heading";
import ContentBlock from "@/app/components/services/content-block";
import WideContent from "@/app/components/services/wide-content";
import ContentHalves, { HalvesHeading } from "@/app/components/services/content-halves";
import NarrowLeftHalves from "@/app/components/services/narrow-left-halves";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import YouTubeVideo from "@/app/components/services/youtube-video";
import NavCards from "@/app/components/services/nav-cards";
import { WHY_SAFELITE_LINKS } from "@/app/components/services/service-links";

export const metadata: Metadata = {
  title: "Safelite Advantage | Reliable Auto Glass Service | Safelite",
  description:
    "When you choose Safelite – America’s largest vehicle glass specialist – you get the reliability of the Safelite Advantage™, which you can learn about here.",
};

export default function TheSafeliteAdvantagePage() {
  return (
    <ServicePageShell
      secondary={
        <>
          <ContentHalves
            left={<HalvesHeading>Why choose Safelite?</HalvesHeading>}
            right={
              <ContentBlock>
                <p>
                  To learn more about <Link href="/why-choose-safelite">why to choose Safelite</Link> to repair or replace
                  your glass, please select from below. For questions or concerns, please{" "}
                  <Link href="/contact-us">contact us</Link> or visit us on social media.
                </p>
              </ContentBlock>
            }
          />
          <NavCards
            variant="icon"
            cards={[
              WHY_SAFELITE_LINKS.reviews,
              WHY_SAFELITE_LINKS.warranty,
              WHY_SAFELITE_LINKS.mobileInShop,
              WHY_SAFELITE_LINKS.recycling,
            ]}
          />
        </>
      }
    >
      <ServiceHero
        title="The Safelite Advantage"
        subtitle="What sets us apart?"
        image={{
          alt: "The Safelite Advantage",
          desktop: {
            src: "/image/services/the-safelite-advantage/hero-desktop.jpg",
            width: 585,
            height: 340,
            ratio: "58.11966%",
          },
          tablet: null,
          wide: {
            src: "/image/services/the-safelite-advantage/hero-wide.jpg",
            width: 1100,
            height: 340,
            ratio: "30.90909%",
          },
        }}
      >
        <p>
          When you&rsquo;re considering service from an auto glass company, there are certain factors that set Safelite
          apart. We call it the Safelite Advantage. What this means is that when you choose Safelite &ndash; America&rsquo;s
          largest vehicle glass specialist &ndash; you get the reliability of the Safelite Advantage.
        </p>
      </ServiceHero>

      <GrayBox>
        <SectionHeading>Trust the safety and reliability of the Safelite Advantage</SectionHeading>
        <WideContent>
          <ContentBlock>
            <p>
              These are our customers&rsquo; most important vehicle glass service needs, and we&rsquo;re delighted to
              provide them. The Safelite Advantage is why leading insurance and fleet companies, as well as more than five
              million drivers, trust us every year.
            </p>
          </ContentBlock>
        </WideContent>
        <NarrowLeftHalves heading="Always being there">
          <p>
            Glass damage can happen at any hour. Safelite is always here for you with 24/7 scheduling on our website and
            with live representatives available 365 days a year in our renowned contact centers.
          </p>
        </NarrowLeftHalves>
        <HorizontalRule variant="gray-line" />
        <NarrowLeftHalves heading="Knowing who to expect">
          <p>
            When you schedule Safelite mobile service, you&rsquo;ll receive peace of mind with our Technician Profile
            Email, including the technician&rsquo;s name, photo and credentials before he or she arrives.
          </p>
        </NarrowLeftHalves>
        <HorizontalRule variant="gray-line" />
        <NarrowLeftHalves heading="The best replacement technology">
          <p>
            Our proprietary TrueSeal&reg; system guides the new windshield into precise position to ensure the most
            reliable seal. Plus, Safelite{" "}
            <Link href="/why-choose-safelite/glass-recycling">recycles most windshields</Link>, making replacement a more
            earth-friendly option.
          </p>
        </NarrowLeftHalves>
        <HorizontalRule variant="gray-line" />
        <NarrowLeftHalves heading="Stronger repairs">
          <p>
            Safelite&rsquo;s exclusive GlassHealer&trade; resin is why our{" "}
            <Link href="/windshield-repair">windshield repairs</Link>&nbsp;stay stronger and last longer. It penetrates
            cracks better to make your windshield strong again.
          </p>
        </NarrowLeftHalves>
        <HorizontalRule variant="gray-line" />
        <NarrowLeftHalves heading="The industry’s only nationwide lifetime guarantee">
          <p>
            Safelite is proud to feature the industry&rsquo;s only{" "}
            <Link href="/national-lifetime-warranty">nationwide lifetime guarantee</Link>. We back it up with more than
            7,100 state-of-the-art MobileGlassShops&trade; and company stores in all 50 states.
          </p>
        </NarrowLeftHalves>
      </GrayBox>

      <YouTubeVideo
        videoId="fB_JVG3lFrg"
        title="Safelite AutoGlass® Review: Warranty, Quality Glass & Lifetime Guarantee"
      />
      <HorizontalRule variant="section-divider" />
    </ServicePageShell>
  );
}

