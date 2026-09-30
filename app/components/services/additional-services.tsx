import Link from "next/link";
import ContentBlock from "./content-block";
import ContentHalves, { HalvesHeading } from "./content-halves";
import HorizontalRule from "./horizontal-rule";
import NavCards from "./nav-cards";
import { SERVICE_CARDS } from "./service-links";

type AdditionalServicesProps = {
  // Route of the page showing this block; its own card is left out
  current: string;
  // Some pages start this block with a gray line
  topRule?: boolean;
};

// "Additional Safelite services" heading, intro text, and five photo cards.
export default function AdditionalServices({ current, topRule = false }: AdditionalServicesProps) {
  return (
    <>
      {topRule && <HorizontalRule variant="gray-line" />}
      <ContentHalves
        left={<HalvesHeading>Additional Safelite services</HalvesHeading>}
        right={
          <ContentBlock>
            <p>
              To learn more about <Link href="/auto-glass-services">our services</Link> to repair or replace your glass,
              please select from below.
            </p>
          </ContentBlock>
        }
      />
      <NavCards variant="photo" cards={SERVICE_CARDS.filter((card) => card.href !== current)} />
    </>
  );
}
