import type { Metadata } from "next";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ServiceHero from "@/app/components/services/service-hero";
import GrayBox from "@/app/components/services/gray-box";
import SectionHeading from "@/app/components/services/section-heading";
import NavCards from "@/app/components/services/nav-cards";
import { WHY_SAFELITE_LINKS } from "@/app/components/services/service-links";

export const metadata: Metadata = {
  title: "Safelite's Auto Glass Service Advantages | Safelite",
  description:
    "When you need windshield and auto glass service, choose Safelite. With a focus on customer service, we show you why we&#39;re the windshield company you need.",
};

const IMAGES = "/image/services/why-choose-safelite";

export default function WhyChooseSafelitePage() {
  return (
    <ServicePageShell secondary={null}>
      <ServiceHero
        title="Benefits of choosing Safelite to fix your windshield glass"
        image={{
          alt: "",
          desktop: { src: `${IMAGES}/hero-desktop.jpg`, width: 585, height: 340, ratio: "58.11966%" },
          tablet: null,
          wide: { src: `${IMAGES}/hero-wide.jpg`, width: 1100, height: 340, ratio: "30.90909%" },
        }}
      >
        <p>
          If your windshield is chipped or cracked, it is a nuisance and also a distraction from the road. A crack
          larger than a dollar can obstruct the road in front of you, preventing you from driving safely, as well as
          lowering the integrity of the overall stability of your vehicle.&nbsp;
        </p>
        <p>
          Don&rsquo;t run the risk of theft or water damage if your car window is broken. The seemingly simple function
          of auto glass may be taken for granted sometimes, but not by Safelite. We care about the people behind the
          glass &ndash; our customers and their families.
        </p>
      </ServiceHero>

      {/* No gap below this gray box on the reference */}
      <GrayBox className="mb-0!">
        <SectionHeading>Why choose us</SectionHeading>
        <NavCards
          variant="icon"
          columns={5}
          cards={[
            WHY_SAFELITE_LINKS.reviews,
            WHY_SAFELITE_LINKS.warranty,
            WHY_SAFELITE_LINKS.mobileInShop,
            WHY_SAFELITE_LINKS.advantage,
            WHY_SAFELITE_LINKS.recycling,
          ]}
        />
      </GrayBox>
    </ServicePageShell>
  );
}
