import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ServiceHero from "@/app/components/services/service-hero";
import GrayBox from "@/app/components/services/gray-box";
import SectionHeading from "@/app/components/services/section-heading";
import NarrowLeftHalves from "@/app/components/services/narrow-left-halves";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import AboutLearnMore from "@/app/components/services/about-learn-more";

export const metadata: Metadata = {
  title: "Safelite AutoGlass Partnerships | Safelite",
  description:
    "Safelite AutoGlass is proud to partner with several organizations and institutions across the country, including Ohio State Athletics in Columbus, OH.",
};

const IMAGES = "/image/services/safelite-partnerships";

const SPONSORS: { name: string; text: ReactNode }[] = [
  {
    name: "Ohio State Athletics",
    text: (
      <>
        With our corporate headquarters just a stone&rsquo;s throw from The Ohio State University in Columbus,
        we&rsquo;re an enthusiastic sponsor of Ohio State Athletics. The athletic program&rsquo;s four community
        engagement pillars center around fitness, wellness, education and public service. It&rsquo;s with those shared
        values in mind that we frequently partner with the Buckeyes on fun initiatives like donating to local programs
        for every point or field goal the Buckeyes score at home games during a season.&nbsp;&nbsp;
        <br />
        <br />
        Since 2014, our logo has been prominently displayed on the Ohio Stadium field goal netting. And starting in
        2022, we became the first company to sponsor field logos on what is now called Safelite Field inside the
        &rsquo;Shoe. Two white Safelite logos appear on the turf opposite the Big Ten logos.
        <br />
      </>
    ),
  },
  {
    name: "Columbus Blue Jackets",
    text: (
      <>
        Ohio&rsquo;s only NHL team shares our core values of providing exceptional experiences and supporting the
        community in numerous meaningful ways. From team visits at Nationwide Children&rsquo;s Hospital and inviting
        pediatric cancer patients and their families to games, to sponsoring annual blood drives and more, the Blue
        Jackets truly make a difference.&nbsp;
        <br />
        <br />
        Safelite partners with the Blue Jackets on a number of initiatives, particularly around providing opportunities
        for local youth. We&rsquo;re such strong believers in the impact the team can make that we now sponsor the
        jerseys they wear on the ice. Our technicians around the country tell us how proud they are to see that
        corporate connection on display when they tune in to a nationally televised game.
        <br />
      </>
    ),
  },
  {
    name: "Toyota Racing Development & NASCAR Truck Series",
    text: (
      <>
        The nation&rsquo;s leading auto glass specialist partnering with auto and truck racing felt like a no-brainer.
        Our relationship with Toyota Racing Development makes it possible for us to support charitable organizations in
        race cities around the country, further spreading the surprise and delight that are at the heart of both
        Safelite and Toyota/NASCAR&rsquo;s core values &ndash; and strengthening the bonds with customers and fans alike
        in the process.&nbsp;
        <br />
        <br />
        You&rsquo;ll find Safelite represented on all things NASCAR Trucks, and the drivers we sponsor enjoy being
        cheered on in real-time by our Instagram followers.
        <br />
      </>
    ),
  },
  {
    name: "Boston Red Sox",
    text: (
      <>
        The best part of our longstanding relationship with this beloved baseball team is partnering with them on
        numerous philanthropic activities in the Boston area, including charitable contributions to a variety of local
        organizations. With the Safelite logo displayed throughout one of Major League Baseball&rsquo;s most iconic
        stadiums, Fenway Park, fans trust that we share the Sox passion for making a difference in the lives of area
        youth, veterans, families and communities in need by improving their health, educational and recreational
        opportunities.
        <br />
      </>
    ),
  },
  {
    name: "St. Louis Cardinals",
    text: (
      <>
        {/* The reference wraps this text in two empty paragraphs */}
        <p />
        The Cardinals set the standard in St. Louis for excellence and community involvement. The baseball team&rsquo;s
        mission and values, which focus on extraordinary results and giving back locally, align perfectly with
        Safelite&rsquo;s core values. That&rsquo;s why we&rsquo;re proud to have our brand visible throughout Busch
        Stadium. Our partnership with the team provides numerous opportunities to make a difference in the St. Louis
        area, including donations to cancer research initiatives and youth outreach programs.
        <p />
      </>
    ),
  },
];

export default function SafelitePartnershipsPage() {
  return (
    <ServicePageShell secondary={<AboutLearnMore current="partnerships" />}>
      <ServiceHero
        title="Our Partnerships"
        subtitle="Here at Safelite, exceptional service means delighting customers and communities alike."
        image={{
          alt: "Safelite partnership with Ohio State Athletics",
          desktop: { src: `${IMAGES}/hero-desktop.jpg`, width: 585, height: 340, ratio: "58.11966%" },
          tablet: null,
          wide: { src: `${IMAGES}/hero-wide.jpg`, width: 1100, height: 340, ratio: "30.90909%" },
        }}
      >
        <p>
          While providing high-quality, efficient auto glass repair, replacement and recalibration is the core of our
          business, exceptional service requires going a step further. That&rsquo;s why we&rsquo;re passionate about
          participating in and committing to our local communities through corporate partnerships.
        </p>
      </ServiceHero>

      <GrayBox>
        <SectionHeading>Organizations we sponsor</SectionHeading>
        {SPONSORS.map((sponsor, index) => (
          <Fragment key={sponsor.name}>
            {index > 0 && <HorizontalRule variant="gray-line" />}
            <NarrowLeftHalves heading={sponsor.name}>{sponsor.text}</NarrowLeftHalves>
          </Fragment>
        ))}
      </GrayBox>
    </ServicePageShell>
  );
}
