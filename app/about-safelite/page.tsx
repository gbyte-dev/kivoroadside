import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ServiceHero from "@/app/components/services/service-hero";
import GrayBox from "@/app/components/services/gray-box";
import SectionHeading from "@/app/components/services/section-heading";
import ContentBlock from "@/app/components/services/content-block";
import ContentHalves, { HalvesHeading } from "@/app/components/services/content-halves";
import ContentImage from "@/app/components/services/content-image";
import NarrowLeftHalves from "@/app/components/services/narrow-left-halves";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import WideContent from "@/app/components/services/wide-content";
import AboutLearnMore from "@/app/components/services/about-learn-more";

export const metadata: Metadata = {
  title: "About Safelite | Safelite Reviews | Safelite",
  description:
    "Learn what makes Safelite a trusted auto glass company. From repair, replacement, and customer service, choose Safelite for all auto glass damage.",
};

const IMAGES = "/image/services/about-safelite";

const YOTPO_LINK =
  "http://my.yotpo.com/landing_page?redirect=https%3A%2F%2Fwww.yotpo.com%2Fpowered-by-yotpo%2F&utm_campaign=branding_link_reviews_widget_v2&utm_medium=widget&utm_source=safelite.com";

const REASONS = [
  {
    heading: "Innovative technology",
    text: "Our proprietary TrueSeal® system guides the new windshield into precise position to ensure the most reliable seal for most vehicles.",
  },
  {
    heading: "Convenient features",
    text: "Can’t come to one of our store locations? No worries – we can come to you with one of our Mobile Glass Shops.",
  },
  {
    heading: "Caring customer service",
    text: "At Safelite, we’re always here for you – 24 hours a day, seven days a week, 365 days a year.",
  },
  {
    heading: "Experienced technicians",
    text: "All of our technicians complete extensive classroom and hands-on training in our SafeTech® certification program.",
  },
  {
    heading: "Social responsibility",
    text: "We care about cars, but we care more about the people who drive them. That’s why we give back to our communities where we live and work.",
  },
  {
    heading: "Eco-friendly initiatives",
    text: "Safelite recycles used auto glass, making windshield replacement a more earth-friendly option.",
  },
  {
    heading: "Customer-focused culture",
    text: "At Safelite, we’re all about the customer. Everything we do is centered on keeping things simple, convenient and stress-free for you.",
  },
];

// Average rating, a 150x30 star meter and the review count
function RatingsSummary() {
  return (
    <div className="text-center max-md:max-w-[750px]">
      <a href={YOTPO_LINK} className="inline-block">
        <ContentImage
          src="/image/services/customer-reviews/powered-by-yotpo.png"
          alt="Powered by Yot Po Link, Opens in New tab"
          width={106}
          height={25}
          ratio="23.58491%"
        />
      </a>
      <div
        title="Rated 4.6633196 out of 5"
        className="relative mx-auto my-5 h-[30px] w-[150px] overflow-hidden [transform:translateZ(0)]"
      >
        {/* Yellow fill behind a gray overlay with star-shaped cut-outs */}
        <div className="absolute inset-y-0 left-0 right-[7.6%] bg-[#ffc62b]" />
        <div className="absolute inset-0 bg-[url(/image/rating-star-overlay.svg)] bg-[length:30px_30px]">
          <span className="text-[21px] opacity-0">rated 4.6633196 out of 5</span>
        </div>
      </div>
      <h2 className="max-w-none! pb-[10px]! text-[32px]! font-light! leading-[40px]!">
        Customers rate Safelite <span className="font-medium text-black">4.66</span> out of 5
      </h2>
      <div className="relative leading-[30px]">
        <Link href="/auto-glass-services/safelite-reviews">
          <span>1,122,628</span> Reviews
        </Link>
      </div>
    </div>
  );
}

export default function AboutSafelitePage() {
  return (
    <ServicePageShell secondary={<AboutLearnMore current="about" />}>
      <ServiceHero
        title="About Safelite"
        subtitle="With more than 70 years of service, Safelite knows auto glass."
        image={{
          alt: "auto glass repair and replacement company",
          desktop: { src: `${IMAGES}/hero-desktop.jpg`, width: 585, height: 340, ratio: "58.11966%" },
          tablet: null,
          wide: { src: `${IMAGES}/hero-wide.jpg`, width: 1100, height: 340, ratio: "30.90909%" },
        }}
      >
        Safelite was founded at a single location in Wichita, Kansas in&nbsp;1947 and has grown to become the largest
        auto glass specialist company in the United States with more than 850 locations nationwide.
      </ServiceHero>

      <GrayBox>
        <SectionHeading>Why choose Safelite?</SectionHeading>
        <WideContent>
          <ContentBlock>
            From front and rear windshields to side glass, we&rsquo;re proud to serve 6.2 million customers every year.
            Whatever your auto glass needs may be, there&rsquo;s a good chance we can fix it through repair or
            replacement. We&rsquo;re proud to have:
          </ContentBlock>
        </WideContent>
        {REASONS.map((reason, index) => (
          <Fragment key={reason.heading}>
            {index > 0 && <HorizontalRule variant="gray-line" />}
            <NarrowLeftHalves heading={reason.heading}>
              <p>{reason.text}</p>
            </NarrowLeftHalves>
          </Fragment>
        ))}
      </GrayBox>

      <ContentHalves
        left={<HalvesHeading>Safelite reviews</HalvesHeading>}
        right={
          <div>
            <p>
              Another way to learn about us is to see what other people have to say about their service and experience.
              Did the appointment exceed their expectations? Was the technician friendly and informative? A review is
              the perfect place to find out.
            </p>
            <p className="pb-10!">
              Simply take a look at some <Link href="/auto-glass-services/safelite-reviews">Safelite reviews</Link> to
              see what our customers think. If you have questions or concerns, don&rsquo;t hesitate to{" "}
              <Link href="/contact-us">contact us</Link> by email, social media or phone.
            </p>
          </div>
        }
      />
      <HorizontalRule variant="gray-line" />
      <RatingsSummary />
      <HorizontalRule variant="section-divider" />
    </ServicePageShell>
  );
}
