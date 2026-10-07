import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ServiceHero from "@/app/components/services/service-hero";
import GrayBox from "@/app/components/services/gray-box";
import ContentBlock from "@/app/components/services/content-block";
import ContentHalves, { HalvesHeading } from "@/app/components/services/content-halves";
import ContentImage from "@/app/components/services/content-image";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import NavCards from "@/app/components/services/nav-cards";
import { WHY_SAFELITE_LINKS } from "@/app/components/services/service-links";

export const metadata: Metadata = {
  title: "We Recycle Windshield Glass | Window Glass Recycling | Safelite",
  description:
    "Safelite helps improve the economy with its auto glass recycling program. Learn how our environmental policies reduce millions of windshields in landfills.",
};

const IMAGES = "/image/services/glass-recycling";

// Left title in a plain wrapper (so the red bar keeps its full 30px gap) and text on the right
function TitledHalves({ title, children }: { title: ReactNode; children: ReactNode }) {
  return (
    <ContentHalves
      left={
        <>
          <div>
            <h2>{title}</h2>
          </div>
          <HorizontalRule variant="left-red" />
        </>
      }
      right={<ContentBlock>{children}</ContentBlock>}
    />
  );
}

function WhyChooseSafelite() {
  return (
    <>
      <ContentHalves
        left={<HalvesHeading>Why choose Safelite?</HalvesHeading>}
        right={
          <ContentBlock>
            To learn more about <Link href="/why-choose-safelite">why to choose Safelite</Link> to repair or replace
            your glass, please select from below. For questions or concerns, please{" "}
            <Link href="/contact-us">contact us</Link> or visit us on social media.
            <br />
          </ContentBlock>
        }
      />
      <NavCards
        variant="icon"
        cards={[
          WHY_SAFELITE_LINKS.reviews,
          WHY_SAFELITE_LINKS.warranty,
          WHY_SAFELITE_LINKS.mobileInShop,
          WHY_SAFELITE_LINKS.advantage,
        ]}
      />
    </>
  );
}

export default function GlassRecyclingPage() {
  return (
    <ServicePageShell secondary={<WhyChooseSafelite />} strongWeight="medium">
      <ServiceHero
        title="Reducing our carbon footprint"
        subtitle="One windshield at a time"
        image={{
          alt: "car glass recycling company",
          desktop: { src: `${IMAGES}/hero-desktop.jpg`, width: 585, height: 340, ratio: "58.11966%" },
          tablet: null,
          wide: { src: `${IMAGES}/hero-wide.jpg`, width: 1100, height: 340, ratio: "30.90909%" },
        }}
      >
        <p>
          We&apos;re committed to protecting our environment. Our goal is to become carbon neutral by 2030 and carbon
          negative by 2050.
          <br />
        </p>
        The best way for us to do this is by recycling the windshields we remove from vehicles.
      </ServiceHero>

      <GrayBox>
        <TitledHalves title="Windshields are different">
          <p>
            They&rsquo;re made of both glass and specialized resin to create a stronger, more resilient product. And if
            they aren&rsquo;t disposed of properly, they can pollute our environment.
          </p>
        </TitledHalves>
      </GrayBox>

      <TitledHalves title="Recycling with expertise">
        <p>
          Our partner,{" "}
          <a target="_blank" rel="noopener noreferrer" href="http://www.recyclemywindshield.com/">
            Shark Glass Recycling North America
          </a>
          , collects our damaged windshields and repurposes the materials into paints, fiberglass insulation, carpet
          backing, and more. In fact, the carpets in our Columbus, Ohio home office are made from these same recycled
          materials.
        </p>
        <p>
          Through this partnership, we&rsquo;ve been able to keep more than{" "}
          <strong>348,000 tons of windshields (the equivalent of 22 million windshields) out of landfills</strong>.
        </p>
        <p>
          In <strong>2022 alone</strong>, we recycled <strong>over 58,000 tons</strong>, about{" "}
          <strong>85% of the damaged windshields we collected</strong>. As we look to the future,{" "}
          <strong>our company goal is to increase that number to 95%</strong>.
        </p>
      </TitledHalves>
      <HorizontalRule variant="gray-line" />

      <ContentHalves
        left={<ContentImage src={`${IMAGES}/glass.jpg`} alt="" />}
        right={
          <>
            <ContentBlock>
              <h4 className="text-left">Our recycling impact goes beyond the landfill</h4>
            </ContentBlock>
            <ContentBlock>
              <p>
                According to the{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.gpi.org/glass-recycling-facts#:~:text=One%20ton%20of%20carbon%20dioxide,used%20in%20the%20manufacturing%20process."
                >
                  Glass Packaging Institute
                </a>
                , we eliminate one ton of carbon dioxide emissions for every six tons of recycled glass.
              </p>
              <p>
                That means that through our recycling efforts, we annually reduce the equivalent CO2 emissions of:
              </p>
              <ul>
                <li>12,000 vehicles</li>
                <li>6 million gallons of gasoline</li>
                <li>5,800 homes</li>
              </ul>
            </ContentBlock>
          </>
        }
      />

      <GrayBox>
        <TitledHalves title="Creating a better future together">
          <p>By choosing Safelite, you&rsquo;re putting your discarded windshield to good use.</p>
          <p>
            So, when you need an&nbsp;<Link href="/windshield-replacement">auto glass replacement</Link>, schedule with
            us and help keep glass out of our landfills.
          </p>
        </TitledHalves>
      </GrayBox>
    </ServicePageShell>
  );
}
