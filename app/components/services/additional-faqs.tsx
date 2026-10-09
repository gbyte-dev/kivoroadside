import Link from "next/link";
import ContentBlock from "./content-block";
import ContentHalves, { HalvesHeading } from "./content-halves";
import HorizontalRule from "./horizontal-rule";
import NavCards from "./nav-cards";
import { HELP_CENTER_FAQ_LINKS } from "./service-links";

export type FaqTopic = keyof typeof HELP_CENTER_FAQ_LINKS;

// End of a help center FAQ page: a divider, "Additional FAQs" with a note,
// and icon cards for the other FAQ topics (all but the current one).
export default function AdditionalFaqs({ current }: { current: FaqTopic }) {
  const cards = (Object.keys(HELP_CENTER_FAQ_LINKS) as FaqTopic[])
    .filter((topic) => topic !== current)
    .map((topic) => HELP_CENTER_FAQ_LINKS[topic]);
  return (
    <>
      <HorizontalRule variant="section-divider" />
      <ContentHalves
        style={{ marginTop: 40 }}
        left={<HalvesHeading>Additional FAQs</HalvesHeading>}
        right={
          <ContentBlock>
            <p>
              To read more FAQs from our <Link href="/help-center">help center</Link>, please select from below or
              search for a topic.
            </p>
          </ContentBlock>
        }
      />
      <NavCards variant="icon" columns={5} cards={cards} />
    </>
  );
}
