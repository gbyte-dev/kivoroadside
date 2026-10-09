import SectionHeading from "./section-heading";
import NavCards from "./nav-cards";
import { ABOUT_SAFELITE_LINKS } from "./service-links";

export type AboutPage = keyof typeof ABOUT_SAFELITE_LINKS;

type AboutLearnMoreProps = {
  // The page being shown; its own card is left out
  current: AboutPage;
  // Extra spacing some pages give the title
  titleClassName?: string;
};

// "Learn more" title and the icon cards for the About Safelite pages, used at
// the end of each of those pages.
export default function AboutLearnMore({ current, titleClassName }: AboutLearnMoreProps) {
  const cards = (Object.keys(ABOUT_SAFELITE_LINKS) as AboutPage[])
    .filter((page) => page !== current)
    .map((page) => ABOUT_SAFELITE_LINKS[page]);
  return (
    <>
      <SectionHeading className={titleClassName}>Learn more</SectionHeading>
      <NavCards variant="icon" columns={5} cards={cards} />
    </>
  );
}
